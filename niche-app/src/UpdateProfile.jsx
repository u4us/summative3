import React from 'react';
import {getSingleUser} from './API';

class UpdateProfile extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            user:null
        }
    }

    componentDidMount(){
        this.routeGetUser();
    }

    routeGetUser = () => {
        var {id} = this.props
        getSingleUser(id).then(res => {
            this.setState({user:res.data})
        })
    }

    render(){
        var {user} = this.state;
        return(
            <div className="update-backdrop">
                <div className="update-profile">
                    <div className="title">Edit Profile</div>

                    <form className="profile-form">
                        <div className="form-group">
                            <label htmlFor="">Username:</label>
                            <input type="text"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Location:</label>
                            <input type="text"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Bio:</label>
                            <input type="text"/>
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