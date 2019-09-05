import React from 'react';

class Comment extends React.Component{
    
    render(){
        
        var{comment} = this.props;
        return(
            <>
            <div className="posted-comment">{comment.description} </div>
            <div>By {comment.user? comment.user.username: 'anon'}</div>
            <i className="fas fa-trash-alt"></i>
            </>
        );
    }
}

export default Comment;