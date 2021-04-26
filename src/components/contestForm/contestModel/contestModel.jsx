import React from "react";
import { Modal, Button } from "react-bootstrap";

export const ContestModalComponent = ({ onClick, show, onHide }) => {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Body>Good Luck !</Modal.Body>
      <Modal.Footer>
        <Button id="mybtn" variant="warning" onClick={onClick}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
