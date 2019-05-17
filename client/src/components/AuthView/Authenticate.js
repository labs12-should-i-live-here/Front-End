import React from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

axios.defaults.baseURL = "changethistourl";

axios.interceptors.request.use(requestConfig => {
  const userId = localStorage.getItem("userId");
  requestConfig.headers.authorization = userId;
  return requestConfig;
});

export default function(Component) {
  return class Authenticated extends React.Component {
    render() {
      const userId = localStorage.getItem("userId");
      const noId = <Redirect to="/" />;

      return <>{userId ? <Component /> : noId}</>;
    }
  };
}
