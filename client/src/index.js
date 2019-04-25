import React from "react";
import ReactDOM from "react-dom";
import "./scss/reset.scss";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.js";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
