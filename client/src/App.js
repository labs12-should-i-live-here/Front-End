import React from "react";
import { Route } from "react-router-dom";
import "./scss/App.scss";
import Home from "./views/App/Home.js";

function App() {
  return (
    <>
      <Route path="/" component={Home} />
      {/* <Compare/> */}
    </>
  );
}

export default App;
