import React from "react";
import Navbar from "../Shared/Navbar.js";
import StripeButton from "./StripeButton.js";



function StripePayment() {
  return (
    <div>
      <Navbar />
      <p>Stripe Checkout - ReactJS</p>
        <StripeButton />
    </div>
  );
}

export default StripePayment;