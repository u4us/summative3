import React from 'react';
import './App.scss';
import { Router, Link, navigate } from '@reach/router';
import {getCategories} from './API';


class RouteNav extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            categories:[
                // {id:1,name:'Shoes'},
                // {id:2,name:'Dresses'}
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

    render(){
        var {categories} = this.state
        var {currentUser} = this.props
        return(
            <div className="main nav">
                <div className="nav-container">
                    
                    {
                        categories.map(category=>{
                            return <div className="category">{category.name}</div>
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
                                <Link className="button" to="/login">logout</Link> 
                            </div>
                            </>
                        ) : <div className="log-button">
                                <Link className="button" to="/login">login</Link> 
                            </div>
                    }
                              
                </div>
            </div>
        );
    }
}

export default RouteNav;