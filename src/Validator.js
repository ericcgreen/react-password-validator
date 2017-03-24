import React, { Component } from 'react';
import "./Validator.css";

class Validator extends Component {
  constructor(props){
    super(props)
    this.state={
      email: '',
      password: '',
      confirmPassword: '',
      valid: true
    }
  }

  handleEmail(event){
    this.State({
      email: event.target.value
    })
  }
  handlePassword(event){
    this.State({
      password: event.target.value
    })
  }
  handleConfirmPassword(event){
    this.State({
      confirmPassword: event.target.value
    })
  }
  
  render() {
    return (
      <div className="form">
        <h1>Sign Up</h1>
        <input type="text" placeholder="email" />
        <input type="password" placeholder="password" />
        <input type="password" placeholder="confirm password" />
        <input type="submit" value="Submit" />
      </div>
    );
  }
}

export default Validator;
