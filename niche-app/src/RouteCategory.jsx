import React, { Component } from 'react'
import { Router, Link } from '@reach/router';
import {getCategory, serverURL} from './API';

class RouteCategory extends Component {
    constructor(props){
        super(props)
        this.state = {
            category: null,
        }

        this.props.setLanding(false)
    }

    componentDidMount(){
        var {id} = this.props
        this.routeGetCategory(id)
    }

    componentDidUpdate(prevProps, prevState){
        var {id} = this.props
        if(id != prevProps.id){
          this.routeGetCategory(id)
        }
    }

    routeGetCategory =(id) =>{
        getCategory(id).then(res => this.setState({category: res.data}))
    }

    render() {
        var {category} = this.state
        return category ? (
            <div class="main category">
                <Link to="/products"><i class="back fas fa-chevron-left"></i></Link>
                <h2 className="title">{category.name}</h2>
                <div className="cat-items">
                {
                    category.products.map((product) => {
        
                        return (
                            <Link className="cat-link" to={'/products/'+product.id}>
                                <div className="cat-item">
                                    <img className="cat-image" src={serverURL+product.photo} alt="product-image"/>
                                </div>
                                <div className="text">
                                    <div className="favs">
                                        <i class="fas fa-heart"></i>
                                        <p>35 favourites</p>    
                                    </div>
                                <div className="name">{product.name}</div>
                                <div className="price">${product.price}</div>   
                                </div>  
                            </Link>
                        )
                    })
                }
                </div>
            </div>
        ) : null
    }
}

export default RouteCategory;
