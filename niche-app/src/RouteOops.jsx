import React from 'react';
import {Link} from '@reach/router';

class RouteOops extends React.Component{

    constructor(props){
        super(props);

        this.props.setLanding(false)
    }
    render(){
        return(
            <div className="oops">
                <div className="title">Oops!</div>
                <div className="description">You'll have to login <br/> before accessing this page!</div>
                <Link className="login-link" to="/login"><div className="direct-button">Go to Login</div></Link>
            </div>
        );
    }
}

export default RouteOops;