import React from 'react';
import {Router, Link, Redirect, navigate} from '@reach/router';

import Nav from './Nav.jsx';
import Backdrop from './Backdrop.jsx';

import RouteLanding from './RouteLanding.jsx';
import RouteLogin from './RouteLogin.jsx';
import RouteSignup from './RouteSignup.jsx';
import RouteDashboard from './RouteDashboard.jsx';
import RouteProductDetails from './RouteProductDetails.jsx';
import RouteSearch from './RouteSearch.jsx';
import RouteAddProduct from './RouteAddProduct.jsx';
import RouteUpdateProduct from './RouteUpdateProduct.jsx';
import RouteCategory from './RouteCategory.jsx';
import RouteMyFavourites from './RouteMyFavourites.jsx';

import './App.scss';
import { getSingleUser } from './API.js';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      products: [],
      types: [],
      currentUser: null,
      isLanding: true,
      navOpen: false
    }
  }

  componentDidMount(){
    var userId = localStorage.getItem('userId')
    if(userId){
      this.loadCurrentUserById(userId)
    }
  }

  loadCurrentUserById = (id) => {
    getSingleUser(id).then(res => this.setState({currentUser:res.data}))
  }

  setCurrentUser = (user) => {
    this.setState({currentUser:user})
  }

  setLanding = (status) => {
    this.setState({isLanding:status})
  }

  handleNavOpenClick = () => {
    this.setState((prevState) => {
      return {navOpen: !prevState.navOpen}
    })
  }

  handleNavCloseClick = () => {
    this.setState({navOpen: false})
  }

  render(){
    var {isLanding, currentUser} = this.state

    return (
      
      <div className="app">
        {
          (isLanding == false) ? ( 
            <>
            <header>
              <div className="box" />
              <img className="logo" src="/logo_dark.png" />
              <i className="fas fa-bars" onClick={this.handleNavOpenClick}></i>
            </header>
            <Nav currentUser={this.state.currentUser} show={this.state.navOpen} handleNavCloseClick={this.handleNavCloseClick} />
            <Backdrop show={this.state.navOpen} />
            </>
          ) :null
        }
        <div className="main">

            <Router>
              <RouteLanding setCurrentUser={this.setCurrentUser} path="/" />
              <RouteLogin setCurrentUser={this.setCurrentUser} setLanding={this.setLanding} path="/login" />
              <RouteSignup setCurrentUser={this.setCurrentUser} setLanding={this.setLanding} path="/users/create" />
              <RouteDashboard setLanding={this.setLanding} path="/products" />
              <RouteSearch setLanding={this.setLanding} path="/search" />
              <RouteAddProduct currentUser={this.state.currentUser} setLanding={this.setLanding} path="/products/create" />
              <RouteProductDetails loadCurrentUserById={this.loadCurrentUserById} currentUser={this.state.currentUser} setLanding={this.setLanding} path="/products/:id" />
              <RouteUpdateProduct setLanding={this.setLanding} path="/products/:id/edit" />
              <RouteCategory path="/product/:id" />
              
              {currentUser ? <RouteMyFavourites currentUser={this.state.currentUser} setLanding={this.setLanding} path="/favourites" /> : null}
            </Router>
        </div>

        {
          (isLanding == false) ? ( 
            <footer>
              <Link to="/products"><i className="fas fa-home"></i></Link>
              <Link to="/search"><i className="fas fa-search"></i></Link>
              <Link to="/products/create"><i className="far fa-plus-square plus"></i></Link>
              <Link to="/favourites" ><i className="far fa-heart"></i></Link>
              <Link to="/user"><i className="fas fa-user-circle"></i></Link>
            </footer>
          ) :null
        }

    </div>
    );
  }
}

export default App;
