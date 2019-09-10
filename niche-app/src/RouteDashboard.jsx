import React from 'react';
import {getProducts,serverURL} from './API';
import {Link} from '@reach/router';
import './App.scss';

class RouteDashboard extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            products: []
        }

        this.props.setLanding(false)
    }

    routeGetProducts = () => {
        getProducts().then(res => {
            this.setState({products:res.data})
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
                                <Link to={'/products/'+product.id}>
                                    <div className="dash-item">
                                        <img className="dash-image" src={serverURL+product.photo} alt="product-image"/>
                                    </div>  
                                </Link>
                            )
                        })
                    }
  
                </div>        
            </div>
        );
    }
}

export default RouteDashboard;