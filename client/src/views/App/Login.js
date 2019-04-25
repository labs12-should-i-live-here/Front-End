import React from "react";
import '../../scss/UserForm.scss'

function Login() {
  return (
    <div className='main'>
      <p>Login</p>
      <form className='form'>
        <input className='input' placeholder="Username"></input>
        <input className='input' placeholder="Password"></input>
        <button>Log in</button>
      </form>
    </div>
  );
}

export default Login;
