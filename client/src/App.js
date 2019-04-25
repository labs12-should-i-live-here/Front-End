import React from "react";
import { Route } from "react-router-dom";
import "./scss/App.scss";
import Home from "./views/App/Home.js";
import SignUp from "./views/App/SignUp.js";
import Login from "./views/App/Login.js";
import Compare from "./views/App/Compare.js";

function App() {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route path="/register" component={SignUp} />
      <Route path="/login" component={Login} />
      <Route path="/compare" component={Compare} />
    </>
  );
}

export default App;
