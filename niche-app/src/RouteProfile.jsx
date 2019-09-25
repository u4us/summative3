import React, { Component } from 'react';
import {getProducts,getSingleUser,serverURL} from './API';
import RouteSignup from './RouteSignup';
import {Link, navigate} from '@reach/router';

class RouteProfile extends Component {

    constructor(props){
        super(props);
        this.state = {
            user:null,
        
        }

        this.props.setLanding(false)
    }

    componentDidMount(){
        var {id} = this.props
        getSingleUser(id).then(res => this.setState({user:res.data}))
    }

    render() {
        var {user} = this.state;
        var {id} = this.props;
        
        return user ? (
            <div className="main profile">

                    <div className="user-profile">
                        <div className="profile-pic">
                            <img className="avatar-user" src="/avatar.jpg" alt="avatar"/>
                            <div className="change-pic" ><i class="fas fa-pen"></i></div>
                            {/* <input type="file" name="photo-input" id="photo-input"/> */}
                            {/* potential to do add file for profile */}
                        </div>
                        <div className="user-info">
                            <div className="username">{user.username}</div>
                            <div className="name">Name:<span>{user.username}</span></div>    
                            <div className="email">Email:<span>{user.email}</span></div>
                            <div className="bio">Bio:<span>{user.bio}</span></div>
                        </div>        
                        <div className="edit-details">
                            <Link className="link" to={'/users/'+id+'/edit'}>Edit my profile</Link>
                        </div>        
                    </div>

                    <div className="my-posts">
                        <div className="main dashboard">
 
                            <div className="dash-items">
                                {
                                    user.products.map(product=>{

                                        return (

                                        <Link to={'/products/'+product.id}>
                                        <div className="dash-item">
                                            <img className="dash-image" src={serverURL+ product.photo} alt="product-image"/>
                                        </div> 
                                        </Link>

                                        )
                                    })
                                } 

                                <div className="empty"></div>  

                            </div>

                      

                            {/* TO DO:
                                Edit in place the name, email and bio

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
