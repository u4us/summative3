import React from 'react';
import {navigate} from '@reach/router';
import {getSingleUser, updateUser} from './API';

class UpdateProfile extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }
    
    handleUpdateCloseClick = () => {
        {this.setState({updateOpen: false})}
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        var {id} = this.props
        var formData = new FormData(this.form);

        var data = {
            username: formData.get('username'),
            email: formData.get('email'),
            bio: formData.get('bio'),
        }

        updateUser(id,data)
    }

    

    render(){
        var updateClasses = 'update-backdrop'
        var {user} = this.props
        if(this.props.show){
            updateClasses = ['update-backdrop open']
        }
        return(
            <div className={updateClasses}>
                <div className="update-profile">
                    <div className="title">Edit Profile</div>

                    <form className="profile-form" onSubmit={this.handleFormSubmit}>
                        <div className="form-group">
                            <label htmlFor="">Username:</label>
                            <input type="text" defaultValue={user.username}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Location:</label>
                            <input type="text" defaultValue={user.location}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Bio:</label>
                            <input type="text" defaultValue={user.bio} />
                        </div>

                        <div className="button">
                            <button type="submit">Update</button>    
                        </div>
                    </form>
                </div>
                
            </div>
        );
    }
}

export default UpdateProfile;