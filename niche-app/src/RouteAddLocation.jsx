import React from 'react';
import {navigate} from '@reach/router'
import './App.scss';
import {getLocation, uploadFile, addLocation} from './API';


class RouteAddLocation extends React.Component{

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
    
        

            var data = {
                name:formData.get('name-input'),
                description:formData.get('description-input'),
                //user_id: this.props.currentUser.id,
            }

            addLocation(data).then(res => navigate('/location'))
            
        }

    render(){
            var {currentUser} = this.props
            
            return(
                <div className="main add-product">
                    <form className ="form" onSubmit={this.handleFormSubmit} ref={(el)=>{this.form=el}}>
                        <div className="form-group">
                            <label htmlFor="name-input">Name of Location?/</label>
                            <input type="text" name="name-input" id="name-input"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="name-input">Name of Address?/</label>
                            <input type="text" name="address-input" id="address-input"/>
                        </div>
            
                        <div className="button">
                            <button type="submit">Upload</button>    
                        </div>             
                    </form>
                </div>
            );
        }
}
    
export default RouteAddLocation;