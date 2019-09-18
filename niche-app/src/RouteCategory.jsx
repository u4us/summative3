import React, { Component } from 'react'
import { Router, Link } from '@reach/router';

import {getCategory, serverURL} from './API';

class RouteCategory extends Component {
    constructor(props){
        super(props)
        this.state = {
            category: null,
        }
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
        return category 
        ? (
            <div class="main">
              <h3>{category.name}</h3>
              {
                category.products.map((product) => {
      
                    var productProps = {
                        ...product,
                        key: product.id,
                        refreshData: () => this.routeGetCategory(category.id),
                        currentUser: this.props.currentUser
            
                    };
                    return (
                        // <Product {...productProps} />
                        <Link to={'/products/'+product.id}>
                            <div className="dash-item">
                                <img className="dash-image" src={serverURL+product.photo} alt="product-image"/>
                            </div>  
                        </Link>
                    )
                })
              }
            </div>
        ) : null
    }
}

export default RouteCategory;
