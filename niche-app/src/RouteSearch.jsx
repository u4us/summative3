import React from 'react';
import {getProducts, getCategory, getCategories, serverURL} from './API';
import {Link} from '@reach/router';
import './App.scss';

class RouteSearch extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            products: [],
            categories:[],
            category: null
        }

        this.props.setLanding(false)
    }

    componentDidMount(){
        this.routeGetProducts();

        getCategories().then(res => {
            this.setState({categories:res.data})
        })

        var {id} = this.props
        this.routeGetCategory(id)
    }

    componentDidUpdate(prevProps, prevState){
        var {id} = this.props
        if(id != prevProps.id){
          this.routeGetCategory(id)
        }
    }

    routeGetProducts = () => {
        getProducts().then(res => {
            this.setState({products:res.data})
        })
    }

    routeGetCategory =(id) =>{
        getCategory(id).then(res => this.setState({category: res.data}))
    }

    render(){
        var {categories} = this.state
        return(
            <div className="main search">
                <div className="search-header">
                    <p className="search-title">SEARCH</p>
                    <div className="form-group">
                        <input className="search-input" type="text" placeholder="What are you looking for?"/>  
                        <i class="fas fa-search"></i>   
                    </div>
                    
                       
                </div>
                
                <div className="search-results">
                    <p>Recently Listed</p>
                    <div className="search-items">
                        
                        {
                            this.state.products.map((product) => {

                                return(
                                    <Link to={'/products/'+product.id}>
                                        <div className="search-item">
                                            <img className="search-image" src={serverURL+product.photo} alt="product-image"/>
                                        </div>  
                                    </Link>
                                )
                            })
                        }
                        <div className="empty"></div>
    
                    </div>  
                </div>
                      
            </div>
        );
    }
}

export default RouteSearch;