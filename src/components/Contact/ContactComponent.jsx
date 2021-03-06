import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { ModalComponent } from "../modal/ModalComponent";
import { db } from "../../firebase/firebaseUtiils.";
import "./contactComponentStyle.scss";

export const ContactComponent = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    tel: "",
    text: "",
  });
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newDate = new Date();
    db.collection("mail")
      .add({
        to: "zacsullivanyt@gmail.com",
        message: {
          subject: "There was an inquiry on your website ",
          text: `New Email from ${state.name} \n Phone Number ${state.tel} \n Email ${state.email}\n\n ${state.message}\n Sent on ${newDate} `,
        },
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
    console.log("this is event.target ", name, value);
    setState((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <>
      <h1> Want To Get In Touch ? </h1>
      <div className="wrapper-form">
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Full Name"
              name="name"
              label="name"
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              name="email"
              label="email"
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="tel"
              placeholder="Phone Number"
              name="tel"
              label="tel"
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              type="text"
              placeholder="Message Here"
              name="message"
              label="message"
              onChange={handleChange}
              rows="5"
              minLength="10"
              required
            />
          </Form.Group>
          <Button id="mybtn" variant="warning" type="submit">
            Submit
          </Button>
        </Form>
        {show ? (
          <ModalComponent
            onClick={handleClose}
            show={show}
            onHide={handleClose}
          />
        ) : null}
      </div>
    </>
  );
};
