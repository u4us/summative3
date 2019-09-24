import React from 'react';
import Comment from './Comment';
import {Link, navigate} from '@reach/router';
import {getProduct, serverURL, deleteProduct, addComment,addFavourite,removeFavourite} from './API';


class RouteProductDetails extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            product: {
                comments: []
            },
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

    handleFavouriteClick = () => {
       
        
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

                <div className="user">
                    <div className="user-icon">
                        <img className="avatar" src="/avatar.jpg" alt="avatar"/>
                        <div className="user-info">
                            <div className="username">{product.user ? product.user.username : 'username'}</div>
                            <div className="location">mount eden, auckland</div>    
                        </div>    
                    </div>                

                    <div className="icons">
                        {
                            currentUser && product.user_id == currentUser.id
                            ? (
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

                <div className="image-container">
                    <img className="item-image" src={serverURL+product.photo} alt="item"/>
                </div>

                <div className="details-content">
                    <div className="product-name">
                        <div className="name">{product.name}</div>
                        {/* {
                            currentUser && currentUser.username !== 'guest' ? <>
                            {                               
                                (currentUser && currentUser.savedProducts.includes(id)) ? 
                                <i className="fas fa-heart like" onClick={this.handleRemoveFavouriteClick}></i>
                                :  <i className="far fa-heart like" onClick={this.handleFavouriteClick}></i>
                                
                            }
                            </> : null
                        } */}

                         

                    </div>
                    
                    <div className="price">${product.price}</div>   
                    <div className="description">
                        <div className="title">Description:</div>
                        <div className="desc">{product.description}</div>
                    </div>
                    
                    {
                      currentUser && product.user_id !== currentUser.id ? <div className="buy">Buy Now</div> : null
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