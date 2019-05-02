import React from "react";
import Navbar from "../../components/Shared/Navbar.js";
import StripeButton from "../../components/StripePayments/StripeButton.js";



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