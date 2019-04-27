import React from "react";
import "../../../scss/CompareDeck.scss";
import { NavLink } from "react-router-dom";

function CompareDeck() {
  return (
    <div className="compare-deck">
      <NavLink to="/compare">Compare</NavLink>
    </div>
  );
}

export default CompareDeck;
