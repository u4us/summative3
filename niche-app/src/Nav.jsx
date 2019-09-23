import React from 'react';
import './App.scss';
import {Router, Link, navigate} from '@reach/router';
import {getCategories} from './API';


class Nav extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            categories:[
            ]
        }
    }

    handleLogoutClick = () => {
        localStorage.removeItem('userId')
        this.props.setCurrentUser(null)
        navigate('/login')
    }

    render(){
        var {currentUser} = this.props
        var navClasses = 'nav-container'
        if(this.props.show){
            navClasses = ['nav-container open']
        }
        return(
                <div className={navClasses}>
                    <i class="fas fa-times" onClick={this.props.handleNavCloseClick}></i>

                    <div className="links">
                        <p className="nav-link">Browse All</p>
                        <p className="nav-link">Search</p>
                        <p className="nav-link">My Listings</p>
                        <p className="nav-link bag">My Cart</p>       
                        <p className="nav-link">About</p>
                        <p className="nav-link">Help</p>    
                    </div>
                                      
                    {
                        localStorage.getItem('userId')!== null && currentUser !== 'guest' ? (
                            <>
                            <div className="log-button">
                                <Link className="button" to="/" onClick={this.handleLogoutClick}>LOG OUT</Link> 
                            </div>
                            </>
                        ) : <div className="log-button">
                                <Link className="button" to="/login">LOG IN</Link> 
                            </div>
                    }
                              
                </div>
        );
    }
}

export default Nav;