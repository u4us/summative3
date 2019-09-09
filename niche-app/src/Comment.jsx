import React from 'react';
import {Link, navigate} from '@reach/router';
import {deleteComment} from './API';


class Comment extends React.Component{

    handleCommentDelete = (e) =>{
        var {id, product_id} = this.props.comment;
        deleteComment(id).then(res => navigate('/products'))
    }

    
    
    render(){
        
        var{comment} = this.props;
        return(
            <>
            <div className="posted-comment">{comment.description}</div>
            <div>By {comment.user? comment.user.username: 'anon'}</div>
            <i className="fas fa-trash-alt" onClick={this.handleCommentDelete}></i>
            </>
        );
    }
}

export default Comment;