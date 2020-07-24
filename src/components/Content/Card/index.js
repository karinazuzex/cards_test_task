import React, { useState } from "react";

import "./Card.scss";

function Card(props) {
  return (
    <div className="Card">
      {props.num}
      <span onClick={props.removeCard(props.id)}>×</span>
    </div>
  );
}

export default Card;
