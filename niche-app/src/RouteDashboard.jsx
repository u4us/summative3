import React from 'react';
import {getProducts} from './API';
import './App.scss';

class RouteDashboard extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            products: []
        }
    }

    routeGetProducts = () => {
        getProducts().then(res => {
            this.setState({projects:res.data})
        })
    }

    componentDidMount(){
        this.routeGetProducts();
    }

    render(){

        return(
            <div className="main dashboard">
                <div className="dash-items">
                    
                    {
                        this.state.products.map((product) => {

                            var productProps = {
                                ...product,
                                key: product.id
                            };

                            return(
                                <div className="dash-item">
                                    <img className="dash-image" src={product.image} alt="product-image"/>
                                </div>  
                            )
                        })
                    }
  
                </div>        
            </div>
        );
    }
}

export default RouteDashboard;