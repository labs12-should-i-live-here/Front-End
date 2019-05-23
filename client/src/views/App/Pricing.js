import "animate.css";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { CheckCircle } from "styled-icons/boxicons-regular/CheckCircle";
import { Blocked } from "styled-icons/icomoon/Blocked";
import { AccountCircle } from "styled-icons/material/AccountCircle";
import { PrimitiveDot } from "styled-icons/octicons/PrimitiveDot";
import { DeleteOutline } from "styled-icons/typicons/DeleteOutline";
import NavbarB from "../../components/Shared/NavbarB.js";
import "../../scss/Pricing.scss";
import NavbarNotAuthed from "../../components/Shared/NavbarAuthed.js";

const AccountRed = styled(AccountCircle)`
  color: #f24336;
  height: 30px;
  width: 30px;
  padding-left: 10px;
  @media (max-width: 500px) {
    padding-left: 3px;
  }
`;

const BlockedWhite = styled(Blocked)`
  color: white;
  height: 25px;
  width: 25px;
  padding-left: 10px;
  @media (max-width: 500px) {
    padding-left: 3px;
  }
`;

const BlackDelete = styled(DeleteOutline)`
  color: black;
  height: 35px;
  width: 35px;
`;

const Arrow = styled(PrimitiveDot)`
  color: gray;
  height: 15px;
  width: 15px;
  padding-right: 10px;
  @media (max-width: 500px) {
    padding-right: 3px;
  }
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
  @media (max-width: 500px) {
    padding-left: 3px;
  }
`;

export default function Pricing() {
  return (
    <>
      {localStorage.getItem("isLoggedIn") ? <NavbarB /> : <NavbarNotAuthed />}

      <h1 className="title">Pricing</h1>
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
              Compare
            </p>
          </div>
          <div className="label">
            <p>
              <Arrow />
              Compare count
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
            <h2>
              <span>None</span>
              <BlockedWhite />
            </h2>
            <div className="label-2">$0 / month</div>
            <div className="label-2">
              Unlimited <Link to="/">Continue</Link>
            </div>
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
              <span>Free</span> <AccountRed />
            </h2>
            <div className="label-2">$0 / month</div>
            <div className="label-2">
              Unlimited{" "}
              {localStorage.getItem("isLoggedIn") ? (
                <p className="plan">Current</p>
              ) : (
                <Link to="/login" className="animated tada">
                  Join now
                </Link>
              )}
            </div>
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
              <span>Pro</span> <AccountBlue />
            </h2>
            <div className="label-2">$2 / month</div>
            <div className="label-2">
              Unlimited
              <Link to="/login" className="animated tada">
                Join now
              </Link>
            </div>
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
