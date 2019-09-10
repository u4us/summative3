import React, { Component } from 'react'
import { Link, navigate } from '@reach/router';


class RouteLanding extends Component {
    handleGuestLogin =(e) =>{
        this.props.setCurrentUser(null)
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
                    <Link to="/login">
                        <div class="button login-button">
                            <a href="#">Login</a>
                        </div>
                    </Link>

                    <Link to="/users/create">
                        <div class="button signup-button">
                            <a href="#">Sign up</a>
                        </div>
                    </Link>
                    <a class="guest-button" onClick={this.handleGuestLogin} href="#">Use as guest</a>    
                </div>
            </div>
        )
    }
}

export default RouteLanding;