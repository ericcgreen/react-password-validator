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
    this.setState({
      email: event.target.value
    })
  }
  handlePassword(event){
    this.setState({
      password: event.target.value
    })
  }
  handleConfirmPassword(event){
    this.setState({
      confirmPassword: event.target.value
    })
  }
  handleSubmit(event){
    event.preventDefault()
    this.handleValidity()
  }
  handleValidity(event){
    if(this.state.password === this.state.confirmPassword){

        alert("Sign up succesful")

    }else{

        alert("Passwords do not match")
      }

  }
  render() {

    return (
      <div className="form">
        <h1>Sign Up</h1>
        <input onChange={(event) => this.handleEmail(event)} type="text" placeholder="email" />
        <input onChange={(event) => this.handlePassword(event)} type="password" placeholder="password" />
        <input onChange={(event) => this.handleConfirmPassword(event)} type="password" placeholder="confirm password" />
        <input type="submit" onClick={(event) => this.handleValidity(event)} value="Submit" />

      </div>
    );
  }
}

export default Validator;
