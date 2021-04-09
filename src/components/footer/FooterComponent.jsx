import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./footerComponentStyle.scss";

export const FooterComponent = () => (
  <Navbar bg="dark" variant="dark" sticky="bottom">
    <Navbar.Brand href="#home"></Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav"></Navbar.Collapse>
    <Nav className="mr-auto">
      {/* <Nav.Link href="#home">Home</Nav.Link> */}
      {/* <Nav.Link href="#Events">Events</Nav.Link> */}
      <Nav.Link href="#Location">Contact Me</Nav.Link>
    </Nav>
  </Navbar>
);
