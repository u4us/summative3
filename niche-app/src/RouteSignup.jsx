import React, {Component} from 'react';

class RouteSignup extends Component {
  handleFormSubmit = (e) => {
  }

  render(){
    return (
      <div class="main">
        <h3>Register</h3>
        <form onSubmit={this.handleFormSubmit} ref={(el) => {this.form = el}}>
          {/* <div className="form-group">
            <label htmlFor="name-input">Name</label>
            <input type="text" className="form-control" name="name-input" id="name-input" placeholder="Enter name"/>
          </div> */}
          <div className="form-group">
            <label htmlFor="name-input">Username</label>
            <input type="text" className="form-control" name="username-input" id="username-input" placeholder="Enter username"/>
          </div>

          <div className="form-group">
            <label htmlFor="name-input">Password</label>
            <input type="password" className="form-control" name="password-input" id="password-input" placeholder="Enter password"/>
          </div>

          <div className="form-group">
            <label htmlFor="name-input">Email</label>
            <input type="email" className="form-control" name="email-input" id="email-input" placeholder="Enter email"/>
          </div>


          <button type="submit" className="btn btn-primary">Register</button>
        </form>
      </div>
    );
  }
}

export default RouteSignup;
