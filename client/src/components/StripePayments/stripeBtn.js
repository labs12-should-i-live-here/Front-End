import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
const stripeBtn = () => {
  const publishableKey = "pk_test_ZfyG33epFTMVYfrxae9mKHSt00mvxhcKAo";
   
  const onToken = token => {
    const body = {
      amount: 999,
      token: token
  };
  //Use this URL for local test
  //   https://labs12.herokuapp.com/payment
  axios
      .post("http://localhost:4200/payment", body)
      .then(response => {
        console.log(response);
        alert("Payment Success");
      })
      .catch(error => {
        console.log("Error in Transmission", error);
        alert("Payment Pending");
      });
  };
  return (
    <StripeCheckout
      label="Go Premium" //Component button text
      name="Geo Ranger" //Modal Header
      description="Upgrade to a premium account today."
      panelLabel="Go Premium" //Submit button in modal
      amount={999} //Amount in cents $9.99
      token={onToken}
      stripeKey={publishableKey}
      billingAddress={false}
    />
  );
};
export default stripeBtn;