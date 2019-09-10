import React from 'react';
import { Router, Link, Redirect,navigate } from '@reach/router';
import RouteDashboard from './RouteDashboard.jsx';
import RouteProductDetails from './RouteProductDetails.jsx';
import RouteAddProduct from './RouteAddProduct.jsx';
import RouteUpdateProduct from './RouteUpdateProduct.jsx';
import RouteNav from './RouteNav.jsx';
import RouteLoginNav from './RouteLoginNav.jsx';
import RouteLogin from './RouteLogin.jsx';
import RouteSignup from './RouteSignup.jsx';


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

  setCurrentUser = (user) => {
    this.setState({currentUser:user})
  }

  componentDidMount(){
  }

  render(){
    return (
      
      <div className="app">
        <header>
            <div className="box"/>
            <div className="logo">
              <img src="/newlogo.png" />
            </div>
            <Link to="/nav"><i className="fas fa-bars"></i></Link>
        </header>

        <div className="main">
          <Router>
            <RouteDashboard  path="/"/>
            <RouteNav path="/nav"/>
            <RouteAddProduct path="/products/create"/>
            <RouteProductDetails currentUser={this.state.currentUser} path="/products/:id"/>
            <RouteUpdateProduct path="/products/:id/edit"/>
            <RouteLoginNav path="/auth"/>
            <RouteLogin setCurrentUser={this.setCurrentUser} path="/login"/>
            <RouteSignup path="/users/create"/>
          </Router>
        </div> 
        
        <footer>
          <Link to="/"><i className="fas fa-home"></i></Link>
          <i className="fas fa-search"></i>
          <Link to="/products/create"><i className="far fa-plus-square plus"></i></Link>
          <i className="far fa-heart"></i>
          <Link to="/auth"><i className="fas fa-user-circle"></i></Link>
        </footer>

    </div>
    );
  }
}

export default App;
