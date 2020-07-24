import React from "react";
import "./Header.scss";

function Header(props) {
  return (
    <div className="Header">
      <div>Header</div>
      <button onClick={props.addCard}>Add Card</button>
      <button onClick={props.sortCard}>Sort Cards</button>
    </div>
  );
}

export default Header;
