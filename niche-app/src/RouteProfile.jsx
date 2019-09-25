import React, { Component } from 'react';
import {getProducts,serverURL} from './API';
import RouteSignup from './RouteSignup';

class RouteProfile extends Component {

    constructor(props){
        super(props);
        this.state = {
            products: []
        }

        this.props.setLanding(false)
    }
    render() {
        var {product} = this.state;
        var {currentUser} = this.props;
        
        return (
            <div className="main profile">

                    <div className="user-profile">
                        <div className="profile-pic">
                            <img className="avatar-user" src="/avatar.jpg" alt="avatar"/>
                            <div className="change-pic"><i class="fas fa-pen"></i></div>
                        </div>
                        <div className="user-info">
                            <div className="username">User Name</div>
                            <div className="location">City road, Auckland</div>
                            <div className="name">Name:<span>ishah lewis</span></div>    
                            <div className="email">Email:<span>ishahlewis@gmail.com</span></div>
                            <div className="description">Bio:<span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, praesentium.</span></div>
                        </div>        
                        <div className="edit-details">
                            <p>Edit my profile</p>
                            {/* <i class="far fa-edit"></i> */}
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

                            {/* link users posts in order for them to show up on profile page - this will be read / review
                                bio - create a bio 
                                edit details in place - update
                                delete - find something to delete on this page
                                 */}
            
                        </div>       
                    </div>

            </div>
        )
    }
}

export default RouteProfile;
