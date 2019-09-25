import React from 'react';
import {serverURL, removeFromCart} from './API';
import {navigate, Link} from '@reach/router';

class RouteCart extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        }

        this.props.setLanding(false)
    }

    handleRemoveCartClick = () => {
       
        var {id,currentUser,setCurrentUser} = this.props;
        removeFromCart(currentUser.id,id).then(res => {
            var user = res.data
            setCurrentUser(user)
            window.location.reload();          
        })
    }

    render(){
        var {currentUser} = this.props
        return(
            <div className="cart">
                <div className="title">My Cart</div>

                <div className="cart-items">

                    {   currentUser && currentUser.cart !== undefined ?
                        currentUser.cart.map((product) => {

                            return(
                               
                                    <div className="cart-item">
                                        <div className="left"> 
                                        <Link to={'/products/'+product.id}>
                                            <div className="cart-image">
                                                <img className="image" src={serverURL+product.photo} alt="product-image"/>    
                                            </div>
                                        </Link>
                                        <div className="details">
                                            <div className="name">{product.name}</div>              
                                            <div className="delete" onClick={this.handleRemoveCartClick}>Remove</div>     
                                        </div>
                                        </div>                                                                              
                                        <div className="price">${product.price}</div> 
                                    </div>
                                
                            )
                        })
                        : null
                    }
  
                </div>
            </div>
        );
    }
}

export default RouteCart;