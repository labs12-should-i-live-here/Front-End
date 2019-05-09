import React from "react";
import { Route } from "react-router-dom";
// import stripeauth from './stripeauth';

export const ProtectedStripe = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        //check if user is prime
        return <Component {...props} />;
      }}
    />
  );
};

{/* <Route
      {...rest}
      render={props => {
        //check if user is prime
        if (stripeauth.isAuthenticated()) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/primeaccess",
                state: {
                  from: props.location
                }
              }}
            />
          );
        }
      }}
    /> */}
