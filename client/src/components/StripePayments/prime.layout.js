import React from "react";
import stripeauth from './stripeauth'

export const PrimeLayout = props => {
  return (
    <div>
      <p>Prime Layout</p>
      <button onClick={
            () => {
                stripeauth.stripelogout(() => {
                    //Login success will direct to Prime layout
                    props.history.push("/primeaccess");
                })
            }
        } >Exit</button>
    </div>
  );
};
