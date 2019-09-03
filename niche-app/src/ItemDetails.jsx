import React from 'react';
import './App.scss';

class Details extends React.Component{

    render(){
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
                        <div className="posted-comment">test comment</div>
                        <div className="posted-comment">test comment</div>
                        <div className="posted-comment">test comment</div>
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

export default Details;