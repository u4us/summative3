import React from 'react';
import {Router, Link, Redirect, navigate} from '@reach/router';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import RouteDashboard from './RouteDashboard.jsx';
import RouteProductDetails from './RouteProductDetails.jsx';
import RouteAddProduct from './RouteAddProduct.jsx';
import RouteUpdateProduct from './RouteUpdateProduct.jsx';
import RouteNav from './RouteNav.jsx';
import RouteLanding from './RouteLanding.jsx';
import RouteLogin from './RouteLogin.jsx';
import RouteSignup from './RouteSignup.jsx';
import RouteProfile from './RouteProfile.jsx';
import RouteUpdateProfile from './RouteUpdateProfile.jsx';
import RouteCategory from './RouteCategory.jsx';

import './App.scss';
import RouteMyFavourites from './RouteMyFavourites.jsx';
import { getSingleUser } from './API.js';

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
    var userId = localStorage.getItem('userId')
    if(userId){
      getSingleUser(userId).then(res => this.setState({currentUser:res.data}))
    }
  }



  setCurrentUser = (user) => {
    this.setState({currentUser:user})
  }

  setLanding = (status) => {
    this.setState({isLanding:status})
  }

  render(){
    var {isLanding, currentUser} = this.state

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
              <RouteProductDetails setCurrentUser={this.setCurrentUser}  currentUser={this.state.currentUser} setLanding={this.setLanding} path="/products/:id"/>
              <RouteUpdateProduct setLanding={this.setLanding} path="/products/:id/edit"/>
              <RouteLanding setCurrentUser={this.setCurrentUser} path="/"/>
              <RouteLogin setCurrentUser={this.setCurrentUser} setLanding={this.setLanding} path="/login"/>
              <RouteSignup setCurrentUser={this.setCurrentUser} setLanding={this.setLanding} path="/users/create"/>

              <RouteUpdateProfile currentUser={this.state.currentUser} setLanding={this.setLanding} path="/users/:id/edit"/>
              <RouteProfile currentUser={this.state.currentUser} setLanding={this.setLanding} path="/users/:id"/>
              
              <RouteCategory setLanding={this.setLanding} path="/nav/:id"/>
              
              {currentUser ? <RouteMyFavourites currentUser={this.state.currentUser} setLanding={this.setLanding} path="/favourites"/> : null}
              <RouteNav currentUser={this.state.currentUser} setLanding={this.setLanding} default />
            </Router>
        </div>

        {
          (isLanding == false) ? ( 
            <footer>
              <Link to="/products"><i className="fas fa-home"></i></Link>
              <i className="fas fa-search"></i>
              <Link to="/products/create"><i className="far fa-plus-square plus"></i></Link>
              <Link to="/favourites" ><i className="far fa-heart"></i></Link>
              {currentUser? <Link to={'/users/'+currentUser.id}><i className="fas fa-user-circle"></i></Link> : null}
            </footer>
          ) :null
        }

    </div>
    );
  }
}

export default App;
