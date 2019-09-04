import React from 'react';
import Comment from './Comment';
import {getProduct} from './API'

class RouteProductDetails extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            product: null
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
                        <div className="username">username</div>
                    </div>
                    <div className="location">mount eden, auckland</div>   
                    <div className="description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi aliquid recusandae placeat quis, ex.</div> 
                    <div className="comments">
                        <Comment />
                        <div className="form-group">
                            <label htmlFor="comment-input"><i className="far fa-comment"></i></label>
                            <input className="comment-input" name="comment-input" id="comment-input" type="text" placeholder="leave a comment"/>
                        </div>
                        
                    </div>
                </div>     
                
                <div className="buy-container">
                    <div className="price">$600</div>
                    <div className="buy-now">BUY ITEM</div>
                </div>          
            </div>
        );
    }
}

export default RouteProductDetails;