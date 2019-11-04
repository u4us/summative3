import React from 'react';
import {getProducts,serverURL} from './API';
import {Link} from '@reach/router';
import './App.scss';

class RouteLocations extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            products: []
        }

        this.props.setLanding(false)
    }
}

export default RouteLocations;