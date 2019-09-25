import React from 'react';
import {Link, navigate} from '@reach/router';
import {getProduct, updateProduct} from './API';
import './App.scss';

class RouteUpdateProduct extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            product: {}
        }

        this.props.setLanding(false)
    }

    componentDidMount(){
        var {id} = this.props;
        getProduct(id).then(res => {
            this.setState({product:res.data})
        })
    }

    handleFormSubmit = (e) => {
        e.preventDefault();

        var formData = new FormData(this.form);

        var data = {
            name: formData.get('name-input'),
            description: formData.get('description-input'),
            price: formData.get('price-input'),
            category_id:formData.get('category-input'),
        }

        var {id} = this.props;
        updateProduct(id,data).then(res => navigate('/products/'+id))
    }

    render(){

        var {name,description,price} = this.state.product
        return(
            <div className="main update">
                <div className="title">Update Your Item</div>
                <form className="form" onSubmit={this.handleFormSubmit} ref={(el) => {this.form = el}}>
                    <div className="form-group">
                        <label htmlFor="name-input">What are you selling?</label>
                        <input type="text" name="name-input" id="name-input" defaultValue={name}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description-input">Description</label>
                        <input type="text" name="description-input" id="description-input" defaultValue={description}/>
                    </div>
                    <div className="form-group price">
                        <label htmlFor="price">Price:</label>
                        <div className="price-input">
                            <div>$</div>
                            <input type="text" name="price-input" id="price-input" defaultValue={price}/>    
                        </div>                       
                    </div>
                    <div className="form-group price">
                        <label htmlFor="category-input">Category:</label>
                        <select className="category-input" name="category-input" id="category-input">
                            <option value="1">Shoes</option>
                            <option value="2">Pants</option>
                            <option value="3">Shirts</option>
                            <option value="4">Jackets</option>
                        </select>
                    </div>
        
                    <div className="button">
                        <button type="submit">Update</button>    
                    </div>             
                </form>
            </div>
        );
    }
}

export default RouteUpdateProduct;