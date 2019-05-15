import React, { useReducer } from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import connect from 'react-redux';

export default class StripeButton extends React.Component {
  constructor(props) {
    super(props);

    this.onToken = this.onToken.bind(this);
  }
  //Send payment token
  onToken(token, user) {
    console.log("onToken", token);

    //LINKS----------------------------
    //cors fix
    //https://cors-anywhere.herokuapp.com/
    //https://labs12.herokuapp.com/payment
    //http://localhost:4200/payment
    //make sure URL is changed!!

    axios
      .post("https://labs12.herokuapp.com/payment", { stripeToken: token.id })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log("Payment Pending", error);
      });



    axios
      .put("https://labs12.herokuapp.com/register", { user: user.id})
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log("Payment Pending", error);
      });
  }

  render() {
    return (
      // ...
      <StripeCheckout
        token={this.onToken}
        //PUBLIC KEY
        stripeKey="pk_test_ZfyG33epFTMVYfrxae9mKHSt00mvxhcKAo"
      />
    );
  }
}
// export default StripeButton;

// payment auth theory-----------------------------

// if false

// trigger the payment function
// post id: 'cus_F4BZqUAYIWXLCT' to our user.stripeid null
// post to stripe asking for
// payment status
// status: 'active',

// if true
// user.stripeid true
