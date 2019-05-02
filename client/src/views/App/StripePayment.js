import React from "react";
import Navbar from "../../components/Shared/Navbar.js";

import StripeBtn from '../../components/StripePayments/StripeBtn.js';



function StripePayment() {
  return (
    <div>
      <Navbar />
      <p>Stripe Checkout - ReactJS</p>
        <StripeBtn />
    </div>
  );
}

export default StripePayment;