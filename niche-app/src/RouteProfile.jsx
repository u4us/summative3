import React, { Component } from 'react';
import {getProducts,getSingleUser,serverURL} from './API';
import RouteSignup from './RouteSignup';
import {Link, navigate} from '@reach/router';

class RouteProfile extends Component {

    constructor(props){
        super(props);
        this.state = {
            user:null,
            products: []
        }

        this.props.setLanding(false)
    }

    componentDidMount(){
        var {id} = this.props
        getSingleUser(id).then(res => this.setState({user:res.data}))
    }

    render() {
        var {user,product} = this.state;
        var {id} = this.props;
        
        return user ? (
            <div className="main profile">

                    <div className="user-profile">
                        <div className="profile-pic">
                            <img className="avatar-user" src="/avatar.jpg" alt="avatar"/>
                            <div className="change-pic"><i class="fas fa-pen"></i></div>
                        </div>
                        <div className="user-info">
                            <div className="username">{user.username}</div>
                            <div className="name">Name:<span>{user.username}</span></div>    
                            <div className="email">Email:<span>{user.email}</span></div>
                            <div className="description">Bio:<span>Tell us something about yourself...</span></div>
                        </div>        
                        <div className="edit-details">
                            <Link to={'/users/'+id+'/edit'}>Edit my profile</Link>
                        </div>        
                    </div>

                    <div className="my-posts">
                        <div className="main dashboard">
 
                            <div className="dash-items">
                                <div className="dash-item">
                                    <img className="dash-image" src='rose.jpg' alt="product-image"/>
                                </div>  
                            </div>

                            <div className="empty"></div>

                            {/* TO DO:
                                Edit in place the name, email and bio

                                attach user name

                                delete posts from your page

                                somehow hook up your posts to the posts on the page


                                 */}
            
                        </div>       
                    </div>

            </div>
        ) : null
    }
}

export default RouteProfile;
