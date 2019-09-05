import React from 'react';
import { Router, Link, Redirect,navigate } from '@reach/router';
import RouteDashboard from './RouteDashboard.jsx';
import RouteProductDetails from './RouteProductDetails.jsx';
import RouteAddProduct from './RouteAddProduct.jsx';
import RouteUpdateProduct from './RouteUpdateProduct.jsx';
import RouteNav from './RouteNav.jsx';
import './App.scss';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      products: [],
      types: [],
      // currentUser: null,
    }
  }

  render(){
    return (
      
      <div className="app">
        <header>
            <div className="box"/>
            <h2>LOGO</h2>
            <Link to="/nav"><i className="fas fa-bars"></i></Link>
        </header>

        <div className="main">
          <Router>
            <RouteDashboard  path="/"/>
            <RouteNav path="/nav"/>
            <RouteAddProduct path="/products/create"/>
            <RouteProductDetails path="/products/:id"/>
<<<<<<< HEAD
            <RouteUpdateProduct path="/products/:id/update"/>
=======
            <RouteUpdateProduct path="/products/:id/edit"/>
>>>>>>> d7986dd7d68c53014d7fba749a9933cfbb4d1d43
          </Router>
        </div> 
        
        <footer>
        <Link to="/"><i className="fas fa-home"></i></Link>
            <i className="fas fa-search"></i>
        <Link to="/products/create"><i className="far fa-plus-square plus"></i></Link>
            <i className="far fa-heart"></i>
            <i className="fas fa-user-circle"></i>
        </footer>

    </div>
    );
  }
}

export default App;
