import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Compare } from "styled-icons/material/Compare";

const BlackCompare = styled(Compare)`
  color: black;
  height: 35px;
  width: 35px;
  border-radius: 6px;
  :hover {
    background: rgb(224, 224, 224);
  }
  cursor: pointer;
`;

export default function Compare3() {
  return (
    <>
      <header>
        <h2>Compare</h2>
        <Link exact to="/compare">
          <BlackCompare />
        </Link>
      </header>
    </>
  );
}
