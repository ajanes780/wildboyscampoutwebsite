import React from "react";
import { Modal, Button } from "react-bootstrap";

export const ModalComponent = ({ onClick, show, onHide }) => {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Body>You will hear from us soon</Modal.Body>
      <Modal.Footer>
        <Button variant="warning" onClick={onClick}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
