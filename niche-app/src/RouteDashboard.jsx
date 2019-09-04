import React from 'react';
import './App.scss';

class RouteDashboard extends React.Component{

    render(){
        return(
            <div className="main dashboard">
                <div className="dash-items">
                    <div className="dash-item">
                        <img className="dash-image" src="rose.jpg" alt="snail"/>
                    </div>
                    <div className="dash-item">
                        <img className="dash-image" src="rose.jpg" alt="snail"/>
                    </div>
                    <div className="dash-item">
                        <img className="dash-image" src="rose.jpg" alt="snail"/>
                    </div>
                    <div className="dash-item">
                        <img className="dash-image" src="rose.jpg" alt="snail"/>
                    </div>
                    <div className="dash-item">
                        <img className="dash-image" src="rose.jpg" alt="snail"/>
                    </div>
                    <div className="dash-item">
                        <img className="dash-image" src="rose.jpg" alt="snail"/>
                    </div>    
                </div>        
            </div>
        );
    }
}

export default RouteDashboard;