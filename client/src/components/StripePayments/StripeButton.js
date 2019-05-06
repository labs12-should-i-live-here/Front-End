import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

//Version 1 ------------------------------------------------------------------------------
// const StripeButton = () => {
//   const publishableKey = "pk_test_ZfyG33epFTMVYfrxae9mKHSt00mvxhcKAo";

//   const onToken = token => {
//     const body = {
//       amount: 999,
//       token: token
//   };
//   axios
//     //   .post("https://livesafe.netlify.com/payment", body)
//       .post("http://localhost:4200/payment", body)
//       .then(response => {
//         console.log(response);
//       })
//       .catch(error => {
//         console.log("Payment Pending", error);
//       });
//   };
//   return (
//     <StripeCheckout
//       label="Go Premium" //Component button text
//       name="Business LLC" //Modal Header
//       description="Upgrade to a premium account today."
//       panelLabel="Go Premium" //Submit button in modal
//       amount={999} //Amount in cents $9.99
//       token={onToken}
//       stripeKey={publishableKey}
//       billingAddress={false}
//     />
//   );
// };
// export default StripeButton;

//Version 2 ----------------------------------------------------------------------------
// export default class StripeButton extends React.Component {
//   onToken = token => {
//     const body = {
//       amount: 999,
//       token: token
//   };
//   axios
//     //   .post("https://livesafe.netlify.com/payment", body)
//       .post("http://localhost:4200/payment", body)
//       .then(response => {
//         console.log(response);
//       })
//       .catch(error => {
//         console.log("Payment Pending", error);
//       });
//   }

//   // ...

//   render() {
//     return (
//       // ...
//       <StripeCheckout
//         token={this.onToken}
//         stripeKey="pk_test_ZfyG33epFTMVYfrxae9mKHSt00mvxhcKAo"
//       />
//     )
//   }
// }

//Version 3-------------------------------------------------------------------------------------
export default class StripeButton extends React.Component {
  constructor(props) {
    super(props);

    this.onToken = this.onToken.bind(this);
  }

  onToken(token) {
    console.log("onToken", token);
    //https://labs12.herokuapp.com/payment
    //http://localhost:4200/payment
    fetch("https://labs12.herokuapp.com/payment", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        stripeToken: token.id
      })
    })
      .then(res => res.json())
      .then(json => {
        console.log("json");
        console.log(json);
      });
  }

  render() {
    return (
      // ...
      <StripeCheckout
        token={this.onToken}
        stripeKey="pk_test_ZfyG33epFTMVYfrxae9mKHSt00mvxhcKAo"
      />
    );
  }
}

// export default StripeButton;
