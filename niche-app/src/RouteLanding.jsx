import React, {Component} from 'react'
import {Link, navigate} from '@reach/router';


class RouteLanding extends Component {

    handleGuestLogin = (e) =>{
        e.preventDefault();
        var data = {
            username:'guest',
            password:'guest',
        }
    
        var {setCurrentUser} = this.props
    
        setCurrentUser(data)
        navigate('/products')
    }

    render() {
        return (
            //requires condition to check if user has logged in before setting default redirect as profile
            <div class="login-container">
                <div class="logo">
                    <img class="logo" src="newlogo.png" alt=""/>    
                </div>   
                <div class="button-group">
                    <Link className="landing-button login-button" to="/login">Login</Link>

                    <Link className="landing-button" to="/users/create">Sign up</Link>
                    <a class="guest-button" onClick={this.handleGuestLogin} href="#">Use as guest</a>    
                </div>
            </div>
        )
    }
}

export default RouteLanding;
