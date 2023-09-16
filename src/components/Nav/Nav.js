import React from "react";
import pokeball from "../../img/pokeball.png";
import "./Style.css";
const Nav = () => {
  return (
    <div className="nav">
      <img src={pokeball} alt="logo" className="logo" />
    </div>
  );
};

export default Nav;
