import React from "react";
import NavbarB from "../../components/Shared/NavbarB.js";
import "../../scss/Pricing.scss";
import styled from "styled-components";
import { AccountCircle } from "styled-icons/material/AccountCircle";
import { CheckCircle } from "styled-icons/boxicons-regular/CheckCircle";
import { LongArrowAltRight } from "styled-icons/fa-solid/LongArrowAltRight";
import { DeleteOutline } from "styled-icons/typicons/DeleteOutline";

const AccountRed = styled(AccountCircle)`
  color: #f24336;
  height: 30px;
  width: 30px;
  padding-left: 10px;
`;

const BlackDelete = styled(DeleteOutline)`
  color: black;
  height: 35px;
  width: 35px;
`;

const Arrow = styled(LongArrowAltRight)`
  color: gray;
  height: 30px;
  width: 30px;
  padding: 0 20px;
`;

const BlackCheck = styled(CheckCircle)`
  color: black;
  height: 30px;
  width: 30px;
`;

const AccountBlue = styled(AccountCircle)`
  color: #2e86ab;
  height: 30px;
  width: 30px;
  padding-left: 10px;
`;

export default function Pricing() {
  return (
    <>
      <NavbarB />
      <div className="main-pricing">
        <div className="left">
          <h3>Easy Pricing</h3>
          <div className="label">
            <p>
              <Arrow /> Cost
            </p>
          </div>
          <div className="label">
            <p>
              <Arrow />
              Usage
            </p>
          </div>
          <div className="label">
            <p>
              <Arrow />
              Comparisons
            </p>
          </div>
          <div className="label">
            <p>
              <Arrow />
              Comparison count
            </p>
          </div>
          <div className="label">
            <p>
              <Arrow />
              Saved Pins
            </p>
          </div>
          <div className="label">
            <p>
              <Arrow />
              Saved Pin Count
            </p>
          </div>
          <div className="label">
            <p>
              <Arrow />
              Home location
            </p>
          </div>
          <div className="label">
            <p>
              <Arrow />
              Prediction Updates
            </p>
          </div>
        </div>
        <div className="details">
          <div className="no-account">
            <h2>No Account</h2>
            <div className="label-2">$0 / month</div>
            <div className="label-2">Unlimited</div>
            <div className="label-2">
              <BlackCheck />
            </div>
            <div className="label-2">2 max</div>
            <div className="label-2">
              <BlackDelete />
            </div>
            <div className="label-2">0</div>
            <div className="label-2">
              <BlackDelete />
            </div>
            <div className="label-2">
              <BlackCheck />
            </div>
          </div>
          <div className="free">
            <h2>
              Free <AccountRed />
            </h2>
            <div className="label-2">$0 / month</div>
            <div className="label-2">Unlimited</div>
            <div className="label-2">
              <BlackCheck />
            </div>
            <div className="label-2">2 max</div>
            <div className="label-2">
              <BlackCheck />
            </div>
            <div className="label-2">5</div>
            <div className="label-2">
              <BlackCheck />
            </div>
            <div className="label-2">
              <BlackCheck />
            </div>
          </div>
          <div className="pro">
            <h2>
              Pro <AccountBlue />
            </h2>
            <div className="label-2">$2 / month</div>
            <div className="label-2">Unlimited</div>
            <div className="label-2">
              <BlackCheck />
            </div>
            <div className="label-2">5 max</div>

            <div className="label-2">
              <BlackCheck />
            </div>
            <div className="label-2">Unlimited</div>
            <div className="label-2">
              <BlackCheck />
            </div>
            <div className="label-2">
              <BlackCheck />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
