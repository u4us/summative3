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

    componentDidMount(){
        console.log('Nav route mounted')
        getCategories().then(res => {
            this.setState({categories:res.data})
        })
    }

    handleLogoutClick = () => {
        localStorage.removeItem('userId')
        this.props.setCurrentUser(null)
        navigate('/login')
    }

    render(){
        var {categories} = this.state
        var {currentUser} = this.props
        var navClasses = 'nav-container'
        if(this.props.show){
            navClasses = ['nav-container open']
        }
        return(
                <div className={navClasses}>
                    <i class="fas fa-chevron-left" onClick={this.props.handleNavCloseClick}></i>
                    
                    {
                        categories.map(category=>{
                            return (
                                <Link className="nav-link" to={'/nav/'+category.id}><div className="category">{category.name}</div></Link>
                            )
                        })
                    }
                    {
                        localStorage.getItem('userId')!== null && currentUser !== 'guest' ? (
                            <>
                            <div className="sell-item">                    
                                <div className="sell">sell an item</div>
                                <Link to="/products/create"><i className="fas fa-plus"></i></Link>
                            </div>
                            <div className="log-button">
                                <Link className="button" to="/" onClick={this.handleLogoutClick}>logout</Link> 
                            </div>
                            </>
                        ) : <div className="log-button">
                                <Link className="button" to="/login">Log In</Link> 
                            </div>
                    }
                              
                </div>
        );
    }
}

export default Nav;