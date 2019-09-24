import React from 'react';
import {Link, navigate} from '@reach/router';
import {deleteComment, updateComment} from './API';


class Comment extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            editComment: false,
            editCommentInput: props.comment.description,
        }
    }

    //L-Todo edit comment
    handleCommentDelete = (e) =>{
        var {refreshData} = this.props;
        var commentId = e.target.dataset.commentid
        deleteComment(commentId).then(res => refreshData())
    }

    handleEditClick = () => {
        this.setState(
            {
                editComment: true,
            }
        );
    }

    handleEditBlur = () =>{
        this.setState(
            {
                editComment: false,
            }
        );

    }

    handleEditInputChange=(e)=>{
        this.setState(
            {
                editCommentInput: e.target.value
            }
        );
    }

    handleCommentEditSubmit = (e) =>{
        e.preventDefault();

        var formData = new FormData(this.form);
        var data = {
            description: formData.get('comment-description-input'),
        }

        var {id} = this.props.comment;
        var productId = this.props.id;
        updateComment(id,data).then(res => navigate('/products'))
    }
    
    render(){
        
        var {comment} = this.props;
        return(
            <>
            <div className="comment">  
                <div className="comment-details">
                    <div className="comment-user">{comment.user? comment.user.username: 'anon'}</div>
                     
                    <form onSubmit={this.handleCommentEditSubmit} ref={(el) => {this.form = el}}>
                    {
                        this.state.editComment ?(
                            <input type="text" name="comment-description-input" id="comment-description-input" autoFocus onBlur={this.handleEditBlur} value={this.state.editCommentInput} onChange={this.handleEditInputChange}/>
                        ) :(
                            <div className="posted-comment">{comment.description}</div>  
                        )
                    }
                    {/* <button type="submit"><i class="fas fa-check"></i></button> */}
                </form> 
                </div>
        
                
                <div className="comment-buttons">
                    <div className="comment-edit" onClick={this.handleEditClick}>edit</div>

                    <div data-commentid={comment.id} className="comment-edit" onClick={this.handleCommentDelete}>delete</div>     
                </div>
                
                
            </div>
            </>
        );
    }
}

export default Comment;