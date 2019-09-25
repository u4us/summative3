import React from 'react';
import {getProducts,serverURL} from './API';
import {Link} from '@reach/router';
import './App.scss';

class RouteMyFavourites extends React.Component{

    constructor(props){
        super(props);
        // this.state = {
        //     products: []
        // }

        this.props.setLanding(false)
    }

    // componentDidMount(){
    //     this.routeGetProducts();
    // }

    // routeGetProducts = () => {
    //     getProducts().then(res => {
    //         this.setState({products:res.data})
    //     })
    // }

    render(){
        var {currentUser} = this.props
        return(
            <div className="main dashboard">
                <p className="dash-title">YOUR FAVOURITES</p>
                <div className="dash-items">
                    
                    {   currentUser.favourites !== undefined ?
                        currentUser.favourites.map((product) => {
                            
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
                        : null
                    }
                    <div className="empty"></div>
  
                </div>        
            </div>
        );
    }
}

export default RouteMyFavourites;