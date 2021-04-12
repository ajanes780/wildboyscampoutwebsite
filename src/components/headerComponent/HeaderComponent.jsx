import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import "./headerComponentStyle.scss";

export const HeaderComponent = () => (
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
      <Nav.Link as={Link} to="/contactme">
        Contact
      </Nav.Link>
    </Nav>
  </Navbar>
);
