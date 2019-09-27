import React, { Component } from 'react'
import { Router, Link } from '@reach/router';
import {getCategory, serverURL} from './API';

class RouteCategory extends Component {
    constructor(props){
        super(props)
        this.state = {
            category: null,
        }

        this.props.setLanding(false);
    }

    routeGetCategory =(id) =>{
        getCategory(id).then(res => this.setState({category: res.data}))
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

    render() {
        var {category} = this.state
        return category ? (
            <div class="main category">
                <h3 className="title">{category.name}</h3>
                <div className="cat-items">
                {
                    category.products.map((product) => {
        
                        return (
                            <Link to={'/products/'+product.id}>
                                <div className="cat-item">
                                    <img className="cat-image" src={serverURL+product.photo} alt="product-image"/>
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
