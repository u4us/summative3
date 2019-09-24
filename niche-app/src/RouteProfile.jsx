import React from 'react';
import {Link} from '@reach/router';
import {getSingleUser, serverURL} from './API';
import './App.scss';

class RouteProfile extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            profile: 
                {
                    location: 'location',
                    bio: 'your bio goes here'
                },
            user:null

        }

        this.props.setLanding(false)
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
        var {user,profile} = this.state
        return user ? (
            <div className="main profile">
                <Link className="back" to="/products"><i className="fas fa-chevron-left"></i></Link>

                <div className="avatar">
                    <img className="avatar-image" src="/mountain.jpg" alt="avatar"/>
                </div>
                <h2 className="username">{user.username}</h2>
                <div className="location">{profile.location}</div>
                <div className="bio">{profile.bio}</div>
                <div className="settings">Settings</div>

                <p className="products-title">Products For Sale</p>
                <div className="user-items">
                        
                    {
                        user.products.map((product) => {

                            return(
                                <Link to={'/products/'+product.id}>
                                    <div className="user-item">
                                        <img className="user-image" src={serverURL+product.photo} alt="product-image"/>
                                    </div>  
                                </Link>
                            )
                        })
                    }
                    <div className="empty"></div>
    
                </div>
            </div>
        ) : null
    }
}

export default RouteProfile;