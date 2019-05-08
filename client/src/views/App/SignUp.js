import React from "react";
import Navbar from "../../components/Shared/Navbar.js";
import '../../scss/SignUp.scss'
import { Link } from "react-router-dom";
// import HUE from '@material-ui/core/colors/HUE';
import Button from '@material-ui/core/Button';
import blue from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/red';
import purple from '@material-ui/core/colors/red';


import styled from 'styled-components';
var Red = styled.p`text-align:center;`

const primary = blue[600];
const accent = green[400];
const secondAccent = purple[800];

class SignUp extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      credentials: {
        email: "",
        username: "",
        password: "",
      }
    };
  }

  onChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  //needs to be integrated with a sign up function
  onSubmit = e => {
    e.preventDefault();
    this.props.signUp(this.state.credentials);
  };

  render(){
  return (
  <>
    <div>
    <Navbar/>
    {/* email */}
      <form className='modal' onSubmit={this.onSubmit}>
        <input className='input' placeholder="Email"
        value={this.state.credentials.name}
        type="email" onChange={this.onChange}></input>
    {/* username */}
        <input className='input' placeholder="Username"
        value={this.state.credentials.username}
        type="text"
        onChange={this.onChange}></input>
    {/* password */}
        <input className='input' placeholder="Password"
        value={this.state.credentials.password}
        type="password"
        onChange={this.onChange}></input>
        <Button variant="outlined" className="Button">
          Sign Up
        </Button>
      </form>
      <Red>
      Already a member? <Link to="/login">Log In</Link>
      </Red>
    </div>
  </>
  );}
}

export default SignUp;