import React from 'react';
import {Link, navigate} from '@reach/router';
import {deleteComment} from './API';


class Comment extends React.Component{
    //L-Todo edit comment
    handleCommentDelete = (e) =>{
        var {refreshData} = this.props;
        var commentId = e.target.dataset.commentid
        deleteComment(commentId).then(res => refreshData())
    }
    
    render(){
        
        var{comment} = this.props;
        return(
            <>
            <div className="comment">
                <div className="comment-user">{comment.user? comment.user.username: 'anon'}</div>
                <div className="posted-comment">{comment.description}</div>
                <i data-commentid={comment.id} className="fas fa-trash-alt" onClick={this.handleCommentDelete}></i>    
            </div>
            
            </>
        );
    }
}

export default Comment;