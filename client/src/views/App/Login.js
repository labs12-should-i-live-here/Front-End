import React from "react";
import Navbar from "../../components/Shared/Navbar.js";
import '../../scss/UserForm.scss'

function Login() {
  return (
    <div>
    <Navbar/>
      <form className='main form'>
      <p>Login</p>
        <input className='input' placeholder="Username"></input>
        <input className='input' placeholder="Password"></input>
        <button>Log in</button>
      </form>
    </div>
  );
}

export default Login;
