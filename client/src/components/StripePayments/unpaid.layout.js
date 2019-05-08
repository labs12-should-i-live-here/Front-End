import React from 'react';
import stripeauth from './stripeauth';
import StripeButton from './StripeButton';

export const UnpaidLayout = props => {
    return <div>
        <h1>Prime Access Features</h1>
        <p>Pay with Stripe</p>
        <StripeButton /><br />
        <p>View Prim Features</p>
        <button onClick={
            () => {
                stripeauth.stripelogin(() => {
                    //Login success will direct to Prime layout
                    props.history.push("/primeaccess/prime");
                })
            }
        } >Enter</button>
        </div>
};