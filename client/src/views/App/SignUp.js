import React from "react";
import '../../scss/UserForm.scss'

function SignUp() {
  return (
    <div className='main'>
      <p>SignUp</p>
      <form className='form'>
        <input className='input' placeholder="Username"></input>
        <input className='input' placeholder="Password"></input>
        <input className='input' placeholder="Zipcode"></input>
        <button>Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
