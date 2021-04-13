import React from "react";
import { HeroComponent } from "../components/hero/HeroComponent";
import { Button, Card } from "react-bootstrap";
import logo from "../assets/logo.jpeg";
import "./storePageStyle.scss";

export const StorePage = () => {
  return (
    <>
      <HeroComponent />
      <h1>Coming Soon</h1>
      <div className="wrapper-store">
        <Card style={{ width: "18rem", margin: "10px" }}>
          <Card.Img variant="top" src={logo} Style={{ Height: "100px" }} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="warning">Buy Me</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem", margin: "10px" }}>
          <Card.Img variant="top" src={logo} Style={{ Height: "100px" }} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="warning">Buy Me</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem", margin: "10px" }}>
          <Card.Img variant="top" src={logo} Style={{ Height: "100px" }} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="warning">Buy Me</Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};
