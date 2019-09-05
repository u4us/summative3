import React from 'react';
import { Router, Link, navigate } from '@reach/router';
import RouteDashboard from './RouteDashboard.jsx';
import RouteProductDetails from './RouteProductDetails.jsx';
import RouteAddProduct from './RouteAddProduct.jsx';
import RouteNav from './RouteNav.jsx';
import './App.scss';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      products: [],
      types: [],
      currentUser: null,
    }
  }
  render(){
    return (
      
      <div className="app">
        <header>
            <h2>LOGO</h2>
            <i className="fas fa-bars"></i>
        </header>

        <div className="main">
          <Router>
            <RouteDashboard  path="/"/>
            <RouteNav path="/nav"/>
            <RouteAddProduct path="/products/create"/>
            <RouteProductDetails path="/products/:id"/>
          </Router>
        </div> 
        
        <footer>
            <i className="fas fa-home"></i>
            <i className="fas fa-search"></i>
            <i className="far fa-plus-square plus"></i>
            <i className="far fa-heart"></i>
            <i className="fas fa-user-circle"></i>
        </footer>

    </div>
    );
  }
}

export default App;
