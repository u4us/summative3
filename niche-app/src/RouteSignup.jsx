import React, {Component} from 'react';
import {addUser} from './API';
import {navigate} from '@reach/router';


class RouteSignup extends Component {
  handleFormSubmit = (e) => {
    e.preventDefault();

    var formData = new FormData(this.form);
    var data ={
      username: formData.get('username-input'),
      password: formData.get('password-input'),
      email: formData.get('email-input'),
    }
    var {setCurrentUser} = this.props

    addUser(data)
    .then(res=>{
      var user = res.data
      setCurrentUser(user)
      return user
    })
    .then(user => {
          localStorage.setItem('userId',user.id)
          navigate('/products')
    })
  }

  render(){
    return (
      <div class="main landing-form">
        <h2>Register</h2>
        <form onSubmit={this.handleFormSubmit} ref={(el) => {this.form = el}}>
          {/* <div className="form-group">
            <label htmlFor="name-input">Name</label>
            <input type="text" className="form-control" name="name-input" id="name-input" placeholder="Enter name"/>
          </div> */}
          <div className="form-group">
            <label htmlFor="name-input">Username</label>
            <input type="text" className="form-control" name="username-input" id="username-input"/>
          </div>

          <div className="form-group">
            <label htmlFor="name-input">Password</label>
            <input type="password" className="form-control" name="password-input" id="password-input"/>
          </div>

          <div className="form-group">
            <label htmlFor="name-input">Email</label>
            <input type="email" className="form-control" name="email-input" id="email-input"/>
          </div>

          <button type="submit" className="btn btn-primary">Register</button>
        </form>
      </div>
    );
  }
}

export default RouteSignup;
