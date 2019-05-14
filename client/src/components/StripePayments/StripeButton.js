import React, { useReducer } from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";


export default class StripeButton extends React.Component {
  constructor(props) {
    super(props);

    this.onToken = this.onToken.bind(this);
  }
//Send payment token
  onToken(token) {
    console.log("onToken", token);
    //https://labs12.herokuapp.com/payment
    //http://localhost:4200/payment
    //make sure URL is changed!!
  //   fetch("https://labs12.herokuapp.com/payment", {
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify({
  //       stripeToken: token.id
  //     })
  //   })
  //   //callback token
  //     .then(res => res.json())
  //     .then(json => {
  //       console.log("json");
  //       console.log(json);
  //     });
    axios
      .post("https://labs12.herokuapp.com/payment", {stripeToken: token.id})
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log("Payment Pending", error);
      });
  };
  

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

// payment 

// if false

// trigger the payment function
// post id: 'cus_F4BZqUAYIWXLCT' to our user.stripeid null
// post to stripe asking for
// payment status
// status: 'active',


// if true 
// user.stripeid true

