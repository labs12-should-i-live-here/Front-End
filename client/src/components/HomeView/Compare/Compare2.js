import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Compare } from "styled-icons/material/Compare";
import { ArrowRight } from "styled-icons/feather/ArrowRight";

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

const ArrowBlue = styled(ArrowRight)`
  color: black;
  height: 20px;
  width: 20px;
  border-radius: 6px;
  padding-left: 5px;
`;

export default function Compare3() {
  //pulsing icon when addresses on store
  return (
    <>
      <header>
        <h2>Compare</h2>
        <div className="link">
          <p>
            click to compare these locations on map! <ArrowBlue />
          </p>

          <Link exact to="/compare">
            <BlackCompare />
          </Link>
        </div>
      </header>
    </>
  );
}
