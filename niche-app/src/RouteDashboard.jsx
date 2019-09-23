import React from 'react';
import {getProducts, serverURL, getCategories} from './API';
import {Link} from '@reach/router';
import './App.scss';
import RouteCategory from './RouteCategory';

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

                    {/* {
                        categories.map(category=>{
                            return (
                                <Link to={'/product/'+category.id}>
                                    <div className="dash-category">
                                        <div className="image">
                                            <img className="category-image" src="top.jpg" alt="tops"/>    
                                        </div>
                                        <p className="category-name">{category.name}</p>
                                    </div>
                                </Link>
                            )
                        })
                    } */}

                    <Link className="cat-link" to={'/product/'+'3'}>
                        <div className="dash-category">
                            <div className="image">
                                <img className="category-image" src="top.jpg" alt="tops"/>    
                            </div>
                            <p className="category-name">TOPS</p>
                        </div>
                    </Link>
                    <Link className="cat-link" to={'/product/'+'1'}>
                        <div className="dash-category">
                            <div className="image">
                                <img className="category-image" src="shoe.jpg" alt="tops"/>    
                            </div>
                            <p className="category-name">SHOES</p>
                        </div>
                    </Link>
                    <Link className="cat-link" to={'/product/'+'2'}>
                        <div className="dash-category">
                            <div className="image">
                                <img className="category-image" src="pants.jpg" alt="tops"/>    
                            </div>
                            <p className="category-name">PANTS</p>
                        </div>
                    </Link>
                    <Link className="cat-link" to={'/product/'+'4'}>
                        <div className="dash-category">
                            <div className="image">
                                <img className="category-image" src="jacket.jpg" alt="tops"/>    
                            </div>
                            <p className="category-name">JACKETS</p>
                        </div>
                    </Link>     
                </div>
                       
            </div>
        );
    }
}

export default RouteDashboard;