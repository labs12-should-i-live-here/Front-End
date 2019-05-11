import React from "react";
import NavbarB from "../../components/Shared/NavbarB.js";
import "../../scss/Pricing.scss";

export default function Pricing() {
  return (
    <>
      <NavbarB />
      <div className="main-pricing">
        <div className="left">
          <h3>Easy Pricing</h3>
        </div>
        <div className="details">
          <div className="free">
            <h2>Free</h2>
            <div className="cost">$0 / month</div>
          </div>
          <div className="pro">
            <h2>Pro</h2>
            <div className="cost">$2 / month</div>
          </div>
        </div>
      </div>
    </>
  );
}
