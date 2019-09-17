import React from 'react';
import './App.scss';
import {Router, Link, navigate} from '@reach/router';
import {getCategories} from './API';


class RouteNav extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            categories:[
            ]
        }

        this.props.setLanding(false)
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
        return(
            <div className="main nav">
                <div className="nav-container">
                    
                    {
                        categories.map(category=>{
                            return (
                                <Link to={'/nav/'+category.id}><div className="category">{category.name}</div></Link>
                            )
                        })
                    }
                    {
                        currentUser ? (
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
                                <Link className="button" to="/login">login</Link> 
                            </div>
                    }
                    

                    {/* //////potential logout code
                    
                        {
                            (localStorage.getItem('userId')!== null) 
                            ?
                            <i className="fas fa-sign-out-alt" onClick={this.handleLogoutClick}></i>
                            : <></>
                        } */}
                              
                </div>
            </div>
        );
    }
}

export default RouteNav;