import React from 'react';
import {getProducts, serverURL, getCategories} from './API';
import {Link} from '@reach/router';
import './App.scss';

class RouteDashboard extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            products: [],
            categories: [],
        }

        this.props.setLanding(false)
    }

    componentDidMount(){
        this.routeGetProducts();

        getCategories().then(res => {
            this.setState({categories:res.data})
        })
    }

    routeGetProducts = () => {
        getProducts().then(res => {
            this.setState({products:res.data})
        })
    }

    render(){
        var {categories} = this.state;
        return(
            <div className="main dashboard">
                <p className="dash-title">BROWSE</p>
                <div className="browse-container">
                    <Link className="cat-link" to={'/product/'+'3'}>
                        <div className="dash-category">
                            <div className="image">
                                <img className="category-image" src="top.jpg" alt="tops"/>    
                            </div>
                            <div className="category-name">
                                <p className="name">TOPS</p>
                                <p className="plus">+</p>    
                            </div>                           
                        </div>
                    </Link>
                    <Link className="cat-link" to={'/product/'+'1'}>
                        <div className="dash-category">
                            <div className="image">
                                <img className="category-image" src="shoe.jpg" alt="tops"/>    
                            </div>
                            <div className="category-name">
                                <p className="name">SHOES</p>
                                <p className="plus">+</p>    
                            </div> 
                        </div>
                    </Link>
                    <Link className="cat-link" to={'/product/'+'2'}>
                        <div className="dash-category">
                            <div className="image">
                                <img className="category-image" src="pants.jpg" alt="tops"/>    
                            </div>
                            <div className="category-name">
                                <p className="name">PANTS</p>
                                <p className="plus">+</p>    
                            </div> 
                        </div>
                    </Link>
                    <Link className="cat-link" to={'/product/'+'4'}>
                        <div className="dash-category">
                            <div className="image">
                                <img className="category-image" src="jackets.png" alt="tops"/>    
                            </div>
                            <div className="category-name">
                                <p className="name">JACKETS</p>
                                <p className="plus">+</p>    
                            </div> 
                        </div>
                    </Link>
                    {/* <div className="accessories">
                        <div className="image">
                            <img className="img" src="accessories.jpg" alt=""/>
                        </div>
                        <div className="category-name">
                            <p className="name">ACCESSORIES</p>
                            <p className="plus">+</p>    
                        </div>
                    </div>      */}
                </div>
                       
            </div>
        );
    }
}

export default RouteDashboard;