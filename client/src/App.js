import React, { useState, useEffect } from "react";
import "./App.scss";
import axios from "axios";

function App() {
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

    <div className="App">
      <p>{test}</p>
    </div>
  );
}

export default App;
