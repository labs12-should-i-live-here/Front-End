import React from "react";
import Navbar from "../../components/Shared/Navbar.js";
import StripeBtn from "../../components/StripePayments/StripeBtn.js"
import StripeButton from "../../components/StripePayments/StripeButton.js";


function StripePayment() {
  return (
    <div>
      <Navbar />
      <p>Stripe Checkout - ReactJS</p>
        <StripeBtn />
        <StripeButton />
    </div>
  );
}

export default StripePayment;