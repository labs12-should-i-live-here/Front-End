import React from "react";

import { NavigateBefore } from "styled-icons/material/NavigateBefore";
import { NavigateNext } from "styled-icons/material/NavigateNext";
import "../../scss/Home2.scss";
import styled from "styled-components";

const BlackLeft = styled(NavigateBefore)`
  color: grey;
  height: 35px;
  width: 35px;
  border-radius: 6px;
  :hover {
    background: rgb(224, 224, 224);
  }
  cursor: pointer;
`;
const BlackRight = styled(NavigateNext)`
  color: black;
  height: 35px;
  width: 35px;
  border-radius: 6px;
  :hover {
    background: rgb(224, 224, 224);
  }
  cursor: pointer;
`;

export default function Charts() {
  //change type to dynamic + icons
  return (
    <>
      <header>
        <h2>Charts</h2>
        <h3>
          Type: <span>Bar</span>
        </h3>
        <div className="toggle">
          <BlackLeft />
          <BlackRight />
        </div>
      </header>
    </>
  );
}
