import React from 'react';
import './App.scss';
import { Link } from "@reach/router";
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
    }
    componentDidMount(){
        getCategories().then(res => {
            this.setState({categories:res.data})
        })
    }

    render(){
        var {categories} = this.state
        return(
            <div className="main nav">
                <div className="nav-container">
                    
                    
                    {
                        categories.map(cat=>{
                            return <div className="category">{cat.name}</div>
                        })
                    }
                    <div className="sell-item">
                        <div className="sell">sell an item</div>
                        <i className="fas fa-plus"></i>
                    </div>          
                </div>
            </div>
        );
    }
}

export default RouteNav;