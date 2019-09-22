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
                    <p className="search-title">Search</p>
                    <div className="form-group">
                        <i class="fas fa-search"></i>
                        <input className="search-input" type="text" placeholder="Search.."/>     
                    </div>

                    <div className="categories">
                        {
                            categories.map(category=>{
                                return(
                                    <p className="category">{category.name}</p>      
                                )
                            })
                        }
                    </div>

                    
                       
                </div>
                
                <div className="dash-items">
                    
                    {
                        this.state.products.map((product) => {
                            
                            // var productProps = {
                            //     ...product,
                            //     key: product.id
                            // };

                            return(
                                <Link to={'/products/'+product.id}>
                                    <div className="dash-item">
                                        <img className="dash-image" src={serverURL+product.photo} alt="product-image"/>
                                    </div>  
                                </Link>
                            )
                        })
                    }
                    <div className="empty"></div>
  
                </div>        
            </div>
        );
    }
}

export default RouteSearch;