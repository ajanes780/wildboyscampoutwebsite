import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

import "./cardComponentStyle.scss";

export const CardComponent = ({
  image,
  title,
  bio,
  onClick,
  buttonMsg,
  linkUrl,
}) => {
  const history = useHistory();
  return (
    <Card id="store-card" style={{ width: "18rem", margin: "10px" }}>
      <Card.Img variant="top" src={image} Style={{ Height: "100px" }} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{bio}</Card.Text>
        <Button
          onClick={() => history.push(linkUrl)}
          id="mybtn"
          variant="warning"
        >
          <Link to={linkUrl}>{buttonMsg}</Link>
        </Button>
      </Card.Body>
    </Card>
  );
};
