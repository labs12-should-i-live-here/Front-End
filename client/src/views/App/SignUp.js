import React from "react";
import Navbar from "../../components/Shared/Navbar.js";
import '../../scss/UserForm.scss'

function SignUp() {
  return (
    <div>
    <Navbar/>
      <form className='modal'>
        <input className='input' placeholder="Email"></input>
        <input className='input' placeholder="Username"></input>
        <input className='input' placeholder="Password"></input>
        <button className="options btn">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;