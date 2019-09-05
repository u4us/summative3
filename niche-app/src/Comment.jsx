import React from 'react';

class Comment extends React.Component{
    
    render(){
        
        var{comment} = this.props;
        return(
            <div className="posted-comment">{comment.description}</div>
        );
    }
}

export default Comment;