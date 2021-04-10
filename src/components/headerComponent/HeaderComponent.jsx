import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./headerComponentStyle.scss";

export const HeaderComponent = () => (
  <Navbar
    bg="dark"
    variant="dark"
    sticky="top"
    style={{ marginBottom: "10px" }}
  >
    <Navbar.Brand href="#home">The Wild Boys Campout </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav"></Navbar.Collapse>
    <Nav className="mr-auto">
      <Nav.Link href="#Location">Sign up for the Newsletter</Nav.Link>
    </Nav>
  </Navbar>
);
