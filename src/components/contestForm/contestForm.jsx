import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import "./contestFromStyle.scss";
import { db } from "../../firebase/firebaseUtiils.";
import { ContestModalComponent } from "../contestForm/contestModel/contestModel";

export const ContestComponent = (e) => {
  const [state, setState] = useState({ email: "", instagramName: "" });
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("Contest")
      .add({
        email: state.email,
        instagramName: state.instagramName,
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
    setState((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="wrapper-contest">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>

          <Form.Control
            type="email"
            placeholder="Enter your email"
            name="email"
            onChange={handleChange}
            label="email"
            required
          />
          <Form.Label>Instagram Name</Form.Label>
          <Form.Control
            type="txt"
            placeholder="Instagram name"
            name="instagramName"
            onChange={handleChange}
            label="instagramName"
            required
          />
          <Button id="contestBtn" variant="warning" type="submit">
            Submit
          </Button>

          <Form.Text className="text-muted">
            *Contest runs till may 15 2021 <br /> We will never share your email
            with anyone else
          </Form.Text>
        </Form.Group>
      </Form>
      {show ? (
        <ContestModalComponent
          onClick={handleClose}
          show={show}
          onHide={handleClose}
        />
      ) : null}
    </div>
  );
};
