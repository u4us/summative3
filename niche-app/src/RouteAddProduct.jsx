import React, {Component} from 'react';
import {navigate} from '@reach/router'
import './App.scss';
import {addProduct} from './API';



class RouteAddProduct extends React.Component{

    constructor(props){
    super(props)
    this.state ={
        product: {}
        } 
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
    
        var formData = new FormData(this.form);

        var data = {
            name:formData.get('name-input'),
            description:formData.get('description-input'),
            category_id:formData.get('category-input')
          }

    addProduct(data).then(res => navigate('/products'))
    
    }





    render(){
        return(
            <div className="main add-item">
                <form>
                    <div className="form-group">
                        <label htmlFor="photo-input">upload photo</label>
                        <input type="file" name="photo-input" id="photo-input"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="name-input">what are you selling?</label>
                        <input type="text" name="name-input" id="name-input"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description-input">description</label>
                        <input type="text" name="description-input" id="description-input"/>
                    </div>
                    <div classNameName="form-group">
                        <label htmlFor="category-input">category</label>
                        <select className="category-input" name="category-input" id="category-input">
                            <option value="1">category</option>
                            <option value="2">category</option>
                            <option value="3">category</option>
                            <option value="4">category</option>
                        </select>
                    </div>
        
                    <div className="upload-button">
                        <button type="submit">UPLOAD</button>    
                    </div>             
                </form>
            </div>
        );
    }
}

export default RouteAddProduct;