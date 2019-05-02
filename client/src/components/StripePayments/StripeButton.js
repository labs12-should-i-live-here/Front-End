import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import axios from "axios";

export default class StripeButton extends React.Component {
  onToken = token => {
    const body = {
      amount: 999,
      token: token
  };
  axios
      .post("https://livesafe.netlify.com/payment", body)
      // .post("http://localhost:4200/payment", body)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log("Payment Pending", error);
      });
  }

  // ...

  render() {
    return (
      // ...
      <StripeCheckout
        token={this.onToken}
        stripeKey="pk_test_ZfyG33epFTMVYfrxae9mKHSt00mvxhcKAo"
      />
    )
  }
}