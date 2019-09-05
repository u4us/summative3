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
            category_id:formData.get('category-input'),
        }

        var {id} = this.props;
        updateProduct(id,data).then(res => navigate('/products/'+id))
    }

    render(){

        var {name,description} = this.state.product
        return(
            <div className="main update">
                <form className="form" onSubmit={this.handleFormSubmit} ref={(el) => {this.form = el}}>
                    <div className="form-group">
                        <label htmlFor="name-input">what are you selling?</label>
                        <input type="text" name="name-input" id="name-input" defaultValue={name}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description-input">description</label>
                        <input type="text" name="description-input" id="description-input" defaultValue={description}/>
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
        
                    <div className="button">
                        <button type="submit">UPDATE</button>    
                    </div>             
                </form>
            </div>
        );
    }
}

export default RouteUpdateProduct;