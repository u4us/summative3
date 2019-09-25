import React from 'react';
import {getSingleUser} from './API.js';
import {Router, Link, Redirect, navigate} from '@reach/router';

import Nav from './Nav.jsx';
import Backdrop from './Backdrop.jsx';
import UpdateProfile from './UpdateProfile.jsx';

import RouteLanding from './RouteLanding.jsx';
import RouteLogin from './RouteLogin.jsx';
import RouteSignup from './RouteSignup.jsx';
import RouteDashboard from './RouteDashboard.jsx';
import RouteProductDetails from './RouteProductDetails.jsx';
import RouteSearch from './RouteSearch.jsx';
import RouteAddProduct from './RouteAddProduct.jsx';
import RouteUpdateProduct from './RouteUpdateProduct.jsx';
import RouteCategory from './RouteCategory.jsx';
import RouteProfile from './RouteProfile.jsx';
import RouteMyFavourites from './RouteMyFavourites.jsx';
import RouteCart from './RouteCart.jsx';
import RouteOops from './RouteOops.jsx';

import './App.scss';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      products: [],
      types: [],
      currentUser: null,
      isLanding: true,
      navOpen: false,
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
              <div className="bars" onClick={this.handleNavOpenClick}>
                <div className="bar" />
                <div className="bar" />
                <div className="bar" />
              </div>
            </header>
            <Nav currentUser={this.state.currentUser} show={this.state.navOpen} handleNavCloseClick={this.handleNavCloseClick}  />
            <Backdrop show={this.state.navOpen} />
            </>
          ) :null
        }
        <div className="main">
          {/* <UpdateProfile currentUser={this.state.currentUser}/> */}

            <Router>
              <RouteLanding setCurrentUser={this.setCurrentUser} path="/" />
              <RouteLogin setCurrentUser={this.setCurrentUser} setLanding={this.setLanding} path="/login" />
              <RouteSignup setCurrentUser={this.setCurrentUser} setLanding={this.setLanding} path="/users/create" />
              <RouteDashboard setLanding={this.setLanding} path="/products" />
              <RouteSearch setLanding={this.setLanding} path="/search" />
              <RouteAddProduct currentUser={this.state.currentUser} setLanding={this.setLanding} path="/products/create" />
              <RouteProductDetails setCurrentUser={this.setCurrentUser} loadCurrentUserById={this.loadCurrentUserById} currentUser={this.state.currentUser} setLanding={this.setLanding} path="/products/:id" />
              <RouteUpdateProduct setLanding={this.setLanding} path="/products/:id/edit" />
              <RouteCategory setLanding={this.setLanding} path="/product/:id" />
              <RouteProfile currentUser={this.state.currentUser} setLanding={this.setLanding} path="/users/:id" />  
              <RouteMyFavourites currentUser={this.state.currentUser} setLanding={this.setLanding} path="/favourites" />
              <RouteCart setCurrentUser={this.setCurrentUser} currentUser={this.state.currentUser} setLanding={this.setLanding} path="/users/:id/cart" />
              <RouteOops setLanding={this.setLanding} path="/oops"></RouteOops>
            </Router>
        </div>

        {
          (isLanding == false) ? ( 
            <footer>
              <Link to="/products"><i className="fas fa-home"></i></Link>
              <Link to="/search"><i className="fas fa-search"></i></Link>
              {
                (currentUser && currentUser.username !== 'guest') ?
                <Link to="/products/create"><i className="far fa-plus-square plus"></i></Link>  
                : <Link to="/oops"><i className="far fa-plus-square plus"></i></Link>
              }
              {
                (currentUser && currentUser.username !== 'guest') ?
                <Link to="/favourites" ><i className="far fa-heart"></i></Link>  
                : <Link to="/oops"><i className="far fa-heart"></i></Link>
              }             
              {
                (currentUser && currentUser.username !== 'guest') ?
                <Link to={'/users/'+currentUser.id}><i className="fas fa-user-circle"></i></Link>
                : <Link to="/oops"><i className="fas fa-user-circle"></i></Link>
              }
              
            </footer>
          ) :null
        }

    </div>
    );
  }
}

export default App;
