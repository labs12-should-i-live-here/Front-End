import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../scss/Navbar.scss";
import axios from "axios";
// import Auth from '../../src/views/App/Auth/Auth';

function Navbar() {
  const [test, setTest] = useState("");

  useEffect(() => {
    const url = "https://labs12.herokuapp.com/";
    axios
      .get(url)
      .then(res => {
        setTest(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  return (
    // this is a test for E2E sake
    // links for dev ease

    <div className="Navbar">
    <nav className="nav-left">
      <Link to="/">home</Link>
      <Link to="/compare">compare</Link>
      </nav><nav className="nav-right">
      <Link to="/register">register</Link>
      <Link to="/login">login</Link>
      </nav>
      {/* <p>{test}</p> */}
    </div>
  );
}

export default Navbar;
