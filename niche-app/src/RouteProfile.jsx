import React from 'react';
import './App.scss';

class RouteProfile extends React.Component{

    render(){
        return(
            <div className="main profile">
                <div className="avatar">
                    <img className="avatar-image" src="mountain.jpg" alt="avatar"/>
                </div>

                <h2 className="username">User Name</h2>
            </div>
        );
    }
}

export default RouteProfile;