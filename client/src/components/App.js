import React, { useState, useEffect } from "react";
import "../scss/App.scss";
import axios from "axios";
import Callback from '../views/App/Auth/Callback/Callback'; // Auth0 callback
import Auth from '../views/App/Auth/Auth'; // import Auth0 - content that can be used in App.js stored in authControls.js

// move authControls content to this file? Ex: https://github.com/labs11-ad-network/labs11-adNetwork-FE/blob/master/src/App.js

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