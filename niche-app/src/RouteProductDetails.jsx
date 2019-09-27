import React from 'react';
import Comment from './Comment';
import {Link, navigate} from '@reach/router';
import {getProduct, serverURL, deleteProduct, addComment, addFavourite, removeFavourite, addToCart} from './API';


class RouteProductDetails extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            product: {
                comments: []
            },
            favCount: 0
        }

        this.props.setLanding(false)
    }

    componentDidMount(){
        var {id} = this.props;
        this.routeGetProduct(id);
    }

    handleTrashClick = (e) => {
        var {id} = this.props;
        deleteProduct(id).then(res => navigate('/products'))
    }

    incrementFavCount = () => {
        var newFavCount = this.state.favCount + 1;
        this.setState({favCount: newFavCount})
    }

    handleFavouriteClick = () => { 
        this.incrementFavCount();           
        var {id,currentUser,setCurrentUser} = this.props;
        addFavourite(currentUser.id,{productid:id}).then(res => {
            var user = res.data
            setCurrentUser(user)
            navigate('/favourites')
        })
    }

    handleRemoveFavouriteClick = () => {
       
        var {id,currentUser,setCurrentUser} = this.props;
        removeFavourite(currentUser.id,id).then(res => {
            var user = res.data
            setCurrentUser(user)
            navigate('/favourites')
        })
    }
    
    handleAddCartClick = () => {            
        var {id,currentUser,setCurrentUser} = this.props;
        addToCart(currentUser.id,{productid:id}).then(res => {
            var user = res.data
            setCurrentUser(user)
            navigate('/users/'+currentUser.id+'/cart')
        })
    }

    handleCommentSubmit =(e) =>{
        e.preventDefault();

        var formData = new FormData(this.commentForm);
        var productId = this.props.id;
        var data = {
            description:formData.get('comment-input'),
            product_id: productId,
            user_id: this.props.currentUser.id
        }
        addComment(data).then(res => {
            this.commentForm.reset()
            this.routeGetProduct(productId)
        })
    }

    routeGetProduct =(id) =>{
        getProduct(id).then(res => this.setState({product:res.data}))
    }

    render(){
        var {product} = this.state;
        var {currentUser,id} = this.props

        id = parseInt(id)
        return product ? (
            <div className="main details">
                <Link className="back-arrow" to="/products"><i class="fas fa-chevron-left"></i></Link>


                <div className="image-container">
                    <img className="item-image" src={serverURL+product.photo} alt="item"/>
                </div>

                <div className="details-content">
                    <div className="product-name">
                        <div className="name">{product.name}</div>
                        {
                            currentUser && currentUser.username !== 'guest' ? <>
                            {                               
                                (currentUser && currentUser.savedProducts.includes(id)) ? 
                                <i className="fas fa-heart like" onClick={this.handleRemoveFavouriteClick}></i>
                                :  <i className="far fa-heart like" onClick={this.handleFavouriteClick}></i>
                                
                            }
                            </> : null
                        }
                    </div>
                    
                    <div className="user">
                    <div className="user-icon">
                        <div className="user-info">
                            <div className="by">seller:</div>
                            <div className="details">
                                <div className="username">{product.user ? product.user.username : 'username'}</div>
                                
                                <div className="location">{product.user ? product.user.location : 'location'}<i class="fas fa-map-marker-alt"></i></div>
                            </div>
                               
                        </div>    
                    </div>                

                    <div className="icons">
                        {
                            currentUser && product.user_id == currentUser.id ? (
                                    <>
                                    <div className="edit">
                                        <Link to={'/products/'+product.id+'/edit'}><i className="fas fa-edit"></i></Link>
                                        <i className="fas fa-trash-alt" onClick={this.handleTrashClick}></i>
                                    </div>
                                    </>
                                ) : null
                            }
                            
                        </div>                
                    </div>
                    <div className="price">${product.price}</div>   
                    <div className="description">
                        <div className="title">Description:</div>
                        <div className="desc">{product.description}</div>
                    </div>
                    
                    {
                      currentUser && product.user_id !== currentUser.id ? <div className="buy" onClick={this.handleAddCartClick}>Buy Now</div> : null
                    }
                    
                    <div className="comments">
                        {
                            product.comments.map(comment => {
                                var commentProps = {
                                comment: comment,
                                currentUser: currentUser,
                                key: comment.id,
                                product_id: this.props,
                                refreshData: () => this.routeGetProduct(product.id)
                                }
                                return <Comment {...commentProps} />
                            })
                        }                       
                    </div>
                    <form onSubmit={this.handleCommentSubmit} ref={(el)=>{this.commentForm = el}} className="comment-form">
                            <input className="comment-input" name="comment-input" id="comment-input" type="text" placeholder="leave a comment"/>
                            <button type="submit"><i className="far fa-comment"></i></button>
                        </form>
                </div>     
            </div>
        ) : null
    }
}

export default RouteProductDetails;