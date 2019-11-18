import React from 'react';
import {getProducts,serverURL, getLocations,deleteLocation} from './API';
import {Link,navigate} from '@reach/router';
import './App.scss';

class RouteLocations extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            locations: []
        }

        this.props.setLanding(false)
    }

    handleTrashClick = (e) => {
        var id = e.target.dataset.locationid;

        console.log(id)
        deleteLocation(id).then(res => window.location.reload())
    }

    componentDidMount(){
        this.routeGetLocations();
    }

    routeGetLocations = () => {
        getLocations().then(res => {

       
            this.setState({locations:res.data})
        })
    }

    render(){
        return (
            <div className="main dashboard">
                <p className="dash-title">LIST OF LOCATIONS</p>
                <div className="dash-items"></div>
                <div className="locations-container">
                    {
                        this.state.locations.map((location) => {
                        

                            return (<div className="location">{location.name}, {location.address} <i className="fas fa-trash-alt" data-locationid={location.id} onClick={this.handleTrashClick}></i> </div>)

                        })
                    }
                </div>


        </div>)
        
        
    }
}

export default RouteLocations;