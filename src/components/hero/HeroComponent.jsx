import React from "react";
import logo from "../../assets/logo.jpeg";

import "./heroComponentStyle.scss";

export const HeroComponent = () => (
  <div className="hero-container">
    <img src={logo} alt="logo" style={{ width: "95%", height: "90%" }} />
  </div>
);
