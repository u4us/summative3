import React from 'react';
import Comment from './Comment';
import {getProduct} from './API'

class RouteProductDetails extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            product: {
                // name: 't',
                // description: 'shirt',
                comments: []
            }
        }
    }

    routeGetProduct =(id) =>{
        getProduct(id).then(res => this.setState({product:res.data}))
    }

    componentDidMount(){
        var {id} = this.props;
        this.routeGetProduct(id);
    }

    render(){
        var {product} = this.state;
        return(
            <div className="main details">
                <div className="image-container">
                    <img className="item-image" src="test-photo.jpg" alt=""/>
                </div>
                <div className="details-content">
                    <div className="icons">
                        <i className="far fa-heart like"></i>
                        <div className="edit">
                            <i className="fas fa-edit"></i>
                            <i className="fas fa-trash-alt"></i>
                        </div>
                    </div>
                    <div className="user">
                        <img className="avatar" src="avatar.jpg" alt="avatar"/>
                        <div className="username">{product.user ? product.user.username : null}</div>
                    </div>
                    <div className="location">mount eden, auckland</div>   
                    <div className="description">{product.description}</div> 
                    <div className="comments">
                    {
                        product.comments.map(comment => {
                            var commentProps = {
                            comment: comment,
                            // currentUser:currentUser,
                            refreshData: () => this.routeGetProduct(product.id)
                            }
                            return <Comment {...commentProps} />
                        })
                    }
                        <div className="form-group">
                            <label htmlFor="comment-input"><i className="far fa-comment"></i></label>
                            <input className="comment-input" name="comment-input" id="comment-input" type="text" placeholder="leave a comment"/>
                        </div>
                        
                    </div>
                </div>     
                
                <div className="buy-container">
                    <div className="price">${product.price}</div>
                    <div className="buy-now">BUY ITEM</div>
                </div>          
            </div>
        );
    }
}

export default RouteProductDetails;