import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./headerComponentStyle.scss";

export const HeaderComponent = () => (
  <Navbar bg="dark" variant="dark" sticky="top">
    <Navbar.Brand href="#home">Wild Boys</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav"></Navbar.Collapse>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#Events">Events</Nav.Link>
      <Nav.Link href="#Location">Contests</Nav.Link>
    </Nav>
  </Navbar>
);
