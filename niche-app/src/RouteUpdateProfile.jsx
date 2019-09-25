import React from 'react';
import {Link, navigate} from '@reach/router';
import {getProduct, updateUser,getSingleUser} from './API';
import './App.scss';

class RouteUpdateProfile extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            user: {}
        }

        this.props.setLanding(false)
    }

    componentDidMount(){
        var {id} = this.props
        getSingleUser(id).then(res => this.setState({user:res.data}))
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        var {id} = this.props
        var formData = new FormData(this.form);

        var data = {
            username: formData.get('username'),
            email: formData.get('email'),
            bio: formData.get('bio'),        }

        // var {id} = this.props;
        updateUser(id,data).then(res => navigate('/users/'+id))
    }

    render(){

        var {currentUser} = this.props
        return currentUser ? (
            <div className="main update">
                <form className="form" onSubmit={this.handleFormSubmit} ref={(el) => {this.form = el}}>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" id="username" defaultValue={currentUser.username}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="email" defaultValue={currentUser.email} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="bio">Bio</label>   
                        <input type="text" name="bio" id="bio" defaultValue={currentUser.bio}/>               
                    </div>
                    
        
                    <div className="button">
                        <button type="submit">Update</button>    
                    </div>             
                </form>
            </div>
        ) : null
    }
}

export default RouteUpdateProfile;