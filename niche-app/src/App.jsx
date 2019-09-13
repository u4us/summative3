import React from 'react';
import {Router, Link, Redirect,navigate} from '@reach/router';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import RouteDashboard from './RouteDashboard.jsx';
import RouteProductDetails from './RouteProductDetails.jsx';
import RouteAddProduct from './RouteAddProduct.jsx';
import RouteUpdateProduct from './RouteUpdateProduct.jsx';
import RouteNav from './RouteNav.jsx';
import RouteLanding from './RouteLanding.jsx';
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
      isLanding: true
    }
  }

  componentDidMount(){
  }

  setCurrentUser = (user) => {
    this.setState({currentUser:user})
  }

  setLanding = (status) => {
    this.setState({isLanding:status})
  }

  render(){
    var {isLanding} = this.state
    return (
      
      <div className="app">
        {
          (isLanding == false) ? ( 
            <header>
              <div className="box"/>
              <img className="logo" src="/newlogo.png" />
              <Link to="/nav"><i className="fas fa-bars"></i></Link>
          </header>
          ) :null
        }
       

        <div className="main">
          <Router>
            <RouteDashboard setLanding={this.setLanding} path="/products"/>
            <RouteNav currentUser={this.state.currentUser} setLanding={this.setLanding} path="/nav"/>
            <RouteAddProduct currentUser={this.state.currentUser} setLanding={this.setLanding} path="/products/create"/>
            <RouteProductDetails currentUser={this.state.currentUser} setLanding={this.setLanding} path="/products/:id"/>
            <RouteUpdateProduct setLanding={this.setLanding} path="/products/:id/edit"/>
            <RouteLanding setCurrentUser={this.setCurrentUser}path="/"/>
            <RouteLogin setCurrentUser={this.setCurrentUser} setLanding={this.setLanding} path="/login"/>
            <RouteSignup setLanding={this.setLanding} path="/users/create"/>
          </Router>
        </div> 

        {
          (isLanding == false) ? ( 
            <footer>
              <Link to="/products"><i className="fas fa-home"></i></Link>
              <i className="fas fa-search"></i>
              <Link to="/products/create"><i className="far fa-plus-square plus"></i></Link>
              <i className="far fa-heart"></i>
              <i className="fas fa-user-circle"></i>
            </footer>
          ) :null
        }
        


    </div>
    );
  }
}

export default App;
