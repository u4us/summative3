import React, {Component} from 'react';
import {navigate, Link} from '@reach/router';
import {authenticate} from './API';

class RouteLogin extends Component {

    constructor(props){
		super(props);
		this.state = {
			message:''
        }
        
        this.props.setLanding(true)
    }

    handleFormSubmit = (e) =>{
        e.preventDefault();

        var formData = new FormData(this.form);
        var data = {
            username:formData.get('username-input'),
            password:formData.get('password-input'),
        }
    
        var {setCurrentUser} = this.props
    
        authenticate(data)
        .then(res => {
            var user = res.data
            setCurrentUser(user)
            return user
        })
        .then(user => {
            if(user){
                localStorage.setItem('userId',user.id)
                navigate('/products')
            }else{
                this.setState({message:'Try again'})
            }
        })
    }
    
    render() {
        return (
            <div className="main landing-form">
                <h2>Login</h2>
                <form onSubmit={this.handleFormSubmit} ref={(el) => {this.form = el}}>
                    <div className="form-group">
                    <label htmlFor="name-input">Username</label>
                    <input type="text" className="form-control" name="username-input" id="username-input"/>
                    </div>

                    <div className="form-group">
                    <label htmlFor="name-input">Password</label>
                    <input type="password" className="form-control" name="password-input" id="password-input"/>
                    </div>

                    <div className="button-group">
                        <p>{this.state.message}</p>
                        <button type="submit" className="btn btn-primary">Login</button>
                        <Link className="back" to="/">back</Link>
                    </div>                  
                </form>                  
            </div>
        )
    }
}

export default RouteLogin;
