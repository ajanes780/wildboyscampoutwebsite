import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import "./headerComponentStyle.scss";
import twitter from "../../assets/twitter.png";
import instagram from "../../assets/instagram.png";
import email from "../../assets/email.png";
import facebook from "../../assets/facebook.png";

export const HeaderComponent = () => {
  const [isActive, setActive] = useState("");

  const handleClick = () => {
    setActive(!isActive);
  };

  return (
    <Navbar
      bg="dark"
      variant="dark"
      sticky="top"
      style={{ marginBottom: "10px" }}
    >
      <Navbar.Brand as={Link} to="./">
        The Wild Boys Campout{" "}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav"></Navbar.Collapse>
      <Nav className="mr-auto">
        <div
          className={`${isActive ? "active" : ""} toggle`}
          onClick={handleClick}
        />
        <div className={`${isActive ? "active" : ""} navigation `}>
          <ul>
            <li>
              <Link to="/">
                <h3 onClick={handleClick}>Home</h3>
              </Link>
            </li>
            <li>
              <Link to="/contest">
                <h3 onClick={handleClick}>Contest</h3>
              </Link>
            </li>
            <li>
              <Link to="/store">
                <h3 onClick={handleClick}>Store</h3>
              </Link>
            </li>
            <li>
              <Link to="/friendsofTWBCO">
                <h3 onClick={handleClick}>Friends</h3>
              </Link>
            </li>
            <li>
              <Link to="/contactme">
                <h3 onClick={handleClick}>Contact</h3>
              </Link>
            </li>
          </ul>
          <div className="social-bar">
            <ul>
              <li>
                <a href="https://facebook.com">
                  <img src={facebook} target="_blank" alt="" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com">
                  <img src={twitter} target="_blank" alt="" />
                </a>
              </li>
              <li>
                <a href="https://instagram.com">
                  <img src={instagram} target="_blank" alt="" />
                </a>
              </li>
            </ul>
            <a href="mailto:you@email.com" className="email-icon">
              <img src={email} alt="" className="email-icon" />
            </a>
          </div>
        </div>
      </Nav>
    </Navbar>
  );
};
