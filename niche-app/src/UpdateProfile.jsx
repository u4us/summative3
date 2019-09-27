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
        var {user,setModalStatus,refreshData} = this.props
        var formData = new FormData(this.form);

        var data = {
            username: formData.get('username'),
            email: formData.get('email'),
            bio: formData.get('bio'),
            location: formData.get('location'),
        }

        updateUser(user.id,data).then(res=>{
            refreshData()
            setModalStatus(false)

        })

     
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

                    <form className="profile-form" onSubmit={this.handleFormSubmit} ref={(el)=>{this.form=el}}>
                        <div className="form-group">
                            <label htmlFor="username">Username:</label>
                            <input type="text" name="username" defaultValue={user.username}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="location">Location:</label>
                            <input type="text" name="location" defaultValue={user.location}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="bio">Bio:</label>
                            <input type="text" name="bio" defaultValue={user.bio} />
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