import React from "react";
import Navbar from "../../components/Shared/Navbar.js";
import '../../scss/UserForm.scss'
import { Link } from "react-router-dom";

import styled from 'styled-components';
var Red = styled.p`text-align:center;`

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      credentials: {
        email: "",
        password: ""
      }
    };
  };

  onChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };
//need to create function for log in
  onSubmit = e => {
    e.preventDefault();
    this.props.login(this.state.credentials);
  };

  render(){
  return (
  <>
    <div>
    <Navbar/>
      <form className='modal' onSubmit={this.onSubmit}>
      {/* email */}
        <input className='input' placeholder="Email" 
          type="text" onChange={this.onChange} 
          value={this.state.credentials.email}></input>
      {/* password */}
        <input className='input' placeholder="Password"
        type="password" onChange={this.onChange}></input>
        <button type="submit" className="options btn">Log in</button>
      </form>
      <Red>
      Not a Member? <Link to="/register">Join Now</Link>
      </Red>
    </div>
  </>
  );}
}

export default Login;
