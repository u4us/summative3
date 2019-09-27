import React from 'react';
import {getProducts,serverURL} from './API';
import {Link} from '@reach/router';
import './App.scss';

class RouteMyFavourites extends React.Component{

    constructor(props){
        super(props);

        this.props.setLanding(false)
    }

    render(){
        var {currentUser} = this.props
        return(
            <div className="main favourites">
                <p className="title">YOUR FAVOURITES</p>
                <div className="fav-items">
                    
                    {   currentUser && currentUser.favourites !== undefined ?
                        currentUser.favourites.map((product) => {
                            
                            var productProps = {
                                ...product,
                                key: product.id
                            };

                            return(
                                <Link className="fav-link" to={'/products/'+product.id}>
                                    <div className="fav-item">
                                        <div className="fav-image">
                                            <img className="image" src={serverURL+product.photo} alt="product-image"/>    
                                        </div>
                                        <div className="name">{product.name}</div>
                                        <div className="price">${product.price}</div>
                                    </div>  
                                </Link>
                            )
                        })
                        : null
                    }
  
                </div>        
            </div>
        );
    }
}

export default RouteMyFavourites;