//import React from "react";
//import Navbar from "../../components/Shared/Navbar.js";
import '../../scss/UserForm.scss'
import Auth from '../../Auth0/Auth'

const auth = new Auth();

function Login() {

  auth.login();
  
}

export default Login;
