import React from "react";
import Navbar from "../../components/Shared/Navbar.js";
import '../../scss/UserForm.scss'

function Login() {
  return (
    <div>
    <Navbar/>
      <form className='modal'>
        <input className='input' placeholder="Email"></input>
        <input className='input' placeholder="Password"></input>
        <button className="options btn">Log in</button>
      </form>
    </div>
  );
}

export default Login;
