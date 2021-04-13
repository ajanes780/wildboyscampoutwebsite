import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import "./footerComponentStyle.scss";

export const FooterComponent = () => (
  <Navbar bg="dark" variant="dark" sticky="bottom">
    <Navbar.Brand as={Link} to="./">
      The Wild Boys Campout{" "}
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav"></Navbar.Collapse>
    <Nav className="mr-auto">
      {/* <Nav.Link href="#home">Home</Nav.Link> */}
      {/* <Nav.Link href="#Events">Events</Nav.Link> */}
      <Nav.Link as={Link} to="/contactme">
        Contact
      </Nav.Link>
    </Nav>
  </Navbar>
);
