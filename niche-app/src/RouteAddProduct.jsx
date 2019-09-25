import React from 'react';
import {navigate} from '@reach/router'
import './App.scss';
import {addProduct, uploadFile} from './API';


class RouteAddProduct extends React.Component{

    constructor(props){
        super(props)
        this.state ={
            product: {
            }
        } 

        this.props.setLanding(false)
    }
    
        handleFormSubmit = (e) => {
            e.preventDefault();
        
            var formData = new FormData(this.form);
    
            uploadFile(formData).then(res => {
                var fileName = res.data;

                var data = {
                    name:formData.get('name-input'),
                    description:formData.get('description-input'),
                    price:formData.get('price-input'),
                    category_id:formData.get('category-input'),
                    photo:fileName,

                    user_id: this.props.currentUser.id,
                  }

                  addProduct(data).then(res => navigate('/products'))
            })
        }

    render(){
        var {currentUser} = this.props
        
        return(
            <div className="main add-product">
                <div className="title">List a Product</div>
                <form className ="form" id="add-form" onSubmit={this.handleFormSubmit} ref={(el)=>{this.form=el}}>
                <div className="form-group">
                        <label htmlFor="photo-input">Upload a photo</label>
                        <input type="file" name="photo-input" id="photo-input"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="name-input">What are you selling?</label>
                        <input type="text" name="name-input" id="name-input"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description-input">Description</label>
                        <input type="text" name="description-input" id="description-input"/>
                    </div>
                    <div className="form-group price">
                        <label htmlFor="price">Price:</label>
                        <div className="price-input">
                            <div>$</div>
                            <input type="text" name="price-input" id="price-input"/>    
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
                        <button type="submit">Upload</button>    
                    </div>             
                </form>
            </div>
        );
    }
}

export default RouteAddProduct;