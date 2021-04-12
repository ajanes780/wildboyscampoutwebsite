import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import "./newsletterComponentStyle.scss";
import { db } from "../../firebase/firebaseUtiils.";
import { ModalComponent } from "../modal/ModalComponent";

export const NewsletterComponent = (e) => {
  const [email, setEmail] = useState({ email: "" });

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("newsletter")
      .add({
        email: email,
      })
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
    e.target.reset();
    setShow(true);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log("this is name and value ", name, value);
    setEmail((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="wrapper">
      <h3>Big Things Coming Don't Miss Out</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <InputGroup.Prepend>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              name="email"
              onChange={handleChange}
              label="email"
              required
            />
            <Button id="mybtn" variant="warning" type="submit">
              Submit
            </Button>
          </InputGroup.Prepend>
          <Form.Text className="text-muted">
            We will never share your email with anyone else
          </Form.Text>
        </Form.Group>
      </Form>
      {show ? (
        <ModalComponent
          onClick={handleClose}
          show={show}
          onHide={handleClose}
        />
      ) : null}
    </div>
  );
};
