import React from 'react';
import {getProducts,serverURL, getLocations} from './API';
import {Link} from '@reach/router';
import './App.scss';

class RouteLocations extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            locations: []
        }

        this.props.setLanding(false)
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
                        

                            return (<div className="location">{location.name}, {location.address}</div>)

                        })
                    }
                </div>


        </div>)
        
        
    }
}

export default RouteLocations;