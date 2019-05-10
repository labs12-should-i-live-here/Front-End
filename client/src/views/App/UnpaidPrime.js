import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import Navbar from "../../components/Shared/Navbar.js";
import { UnpaidLayout } from "../../components/StripePayments/unpaid.layout.js";
import { PrimeLayout } from "../../components/StripePayments/prime.layout.js";
import { ProtectedStripe } from "../../components/StripePayments/protectedstripe.route";
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

export const UnpaidPrime = () => {
  return (
    <Title>
      <Navbar />
      <Route exact path="/primeaccess" component={UnpaidLayout} />
      <ProtectedStripe
        exact
        path="/primeaccess/prime"
        component={PrimeLayout}
      />
    </Title>
  );
};
