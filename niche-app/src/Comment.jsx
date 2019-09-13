import React from 'react';
import {Link, navigate} from '@reach/router';
import {deleteComment, updateComment} from './API';


class Comment extends React.Component{

    constructor(props){
        super(props);
        this.state = {
        }
    }

    //L-Todo edit comment
    handleCommentDelete = (e) =>{
        var {refreshData} = this.props;
        var commentId = e.target.dataset.commentid
        deleteComment(commentId).then(res => refreshData())
    }

    handleCommentEdit = (e) =>{}

    handleCommentEditSubmit = (e) =>{
        e.preventDefault();

        var formData = new FormData(this.form);
        var data = {
            description: formData.get('comment-description-input')
        }

        var {id} = this.props.comment;
        updateComment(id,data).then(res => navigate('/products'))
    }
    
    render(){
        
        var{comment} = this.props;
        return(
            <>
            <div className="comment">  
                <div className="comment-details">
                    <div className="comment-user">{comment.user? comment.user.username: 'anon'}</div>
                    <div className="posted-comment">{comment.description}</div>    
                </div>

                <i className="fas fa-edit" onClick={this.handleCommentEdit}></i>
                {}
                
                <form onSubmit={this.handleCommentEditSubmit} ref={(el) => {this.form = el}}>
                    <input type="text" name="comment-description-input" id="comment-description-input"/>
                    <button type="submit"><i class="fas fa-check"></i></button>
                </form>

                <i data-commentid={comment.id} className="fas fa-times" onClick={this.handleCommentDelete}></i>  
            </div>
            </>
        );
    }
}

export default Comment;