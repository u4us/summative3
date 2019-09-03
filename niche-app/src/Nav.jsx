import React from 'react';
import './App.scss';

class Nav extends React.Component{

    render(){
        return(
            <div className="main nav">
                <div className="nav-container">
                    <div className="category">category</div>
                    <div className="category">category</div>
                    <div className="category">category</div>
                    <div className="category">category</div>
                    <div className="sell-item">
                        <div className="sell">sell an item</div>
                        <i className="fas fa-plus"></i>
                    </div>          
                </div>
            </div>
        );
    }
}

export default Nav;