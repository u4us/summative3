import React, { Component } from 'react'
import { Link } from '@reach/router';


class RouteLoginNav extends Component {
    render() {
        return (
            //requires condition to check if user has logged in before setting default redirect as profile
            <div class="login-container">
                <div class="logo">
                    <img class="logo" src="newlogo.png" alt=""/>    
                </div>   
                <div class="button-group">
                    <Link to="">
                        <div class="button login-button">
                            <a href="#">Login</a>
                        </div>
                    </Link>
                    <div class="button signup-button">
                        <a href="#">Sign up</a>
                    </div>
                    <a class="guest-button" href="#">Use as guest</a>    
                </div>
            </div>
        )
    }
}

export default RouteLoginNav;
