import React from "react";
import '../../scss/UserForm.scss'
import Navbar from "../../components/Shared/Navbar.js";

function SignUp() {
  return (
    <div >
    <Navbar/>
      <form className='main form'>
      <p>SignUp</p>
        <input className='input' placeholder="Username"></input>
        <input className='input' placeholder="Password"></input>
        <input className='input' placeholder="County"></input>
        <button>Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
