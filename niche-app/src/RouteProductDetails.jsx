import React from 'react';
import Comment from './Comment';
import {Link, navigate} from '@reach/router';
import {getProduct, serverURL, deleteProduct, addComment} from './API';


class RouteProductDetails extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            product: {
                comments: []
            },
            // currentUser: null,
        }
    }

    handleTrashClick = (e) => {
        var {id} = this.props;
        deleteProduct(id).then(res => navigate('/'))
    }

    routeGetProduct =(id) =>{
        getProduct(id).then(res => this.setState({product:res.data}))
    }

    handleCommentSubmit =(e) =>{
        e.preventDefault();

        var formData = new FormData(this.commentForm);
        var productId = this.props.id;
        var data = {
            description:formData.get('comment-input'),
            // rating:formData.get('rating-input'),
            product_id: productId,
            user_id: this.props.currentUser.id
        }
        addComment(data).then(res => {
            this.commentForm.reset()
            this.routeGetProduct(productId)
        })
    }

    componentDidMount(){
        var {id} = this.props;
        this.routeGetProduct(id);
    }

    render(){
        var {product} = this.state;
        var {currentUser} = this.props
        return(
            <div className="main details">
                <Link className="back-arrow" to="/"><i className="fas fa-arrow-left"></i></Link>
                <div className="user">
                    <img className="avatar" src="/avatar.jpg" alt="avatar"/>
                    <div className="user-info">
                        <div className="username">{product.user ? product.user.username : 'username'}</div>
                        <div className="location">mount eden, auckland</div>    
                    </div>                
                </div>

                <div className="image-container">
                    <img className="item-image" src={serverURL+product.photo} alt=""/>
                </div>

                <div className="details-content">
                    <div className="icons">
                        <i className="far fa-heart like"></i>
                        <div className="edit">
                            <Link to={'/products/'+product.id+'/edit'}><i className="fas fa-edit"></i></Link>
                            <i className="fas fa-trash-alt" onClick={this.handleTrashClick}></i>
                        </div>
                    </div>
                    <div className="name">{product.name}</div>   
                    <div className="description">{product.description}</div> 
                    <div className="comments">
                        {
                            product.comments.map(comment => {
                                var commentProps = {
                                comment: comment,
                                currentUser:currentUser,
                                key: comment.id,
                                refreshData: () => this.routeGetProduct(product.id)
                                }
                                return <Comment {...commentProps} />
                            })
                        }
                        <form onSubmit={this.handleCommentSubmit} ref={(el)=>{this.commentForm = el}} className="comment-form">
                            <label htmlFor="comment-input">Comment</label>
                            <input className="comment-input" name="comment-input" id="comment-input" type="text" placeholder="leave a comment"/>
                            <button type="submit"><i className="far fa-comment"></i></button>
                        </form>
                        
                    </div>
                </div>     
                
                <div className="buy-container">
                    <div className="price">${product.price}</div>
                    <div className="buy-now">Buy</div>
                </div>          
            </div>
        );
    }
}

export default RouteProductDetails;