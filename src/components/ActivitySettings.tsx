import React from "react";
import { TemplateActivityType } from "../types/Template";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Offcanvas from "react-bootstrap/Offcanvas";

export const ActivitySettings: React.FC<{ activity: TemplateActivityType }> = ({
  activity,
}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <a style={{ cursor: "pointer" }} onClick={handleShow}>
        ⏣
      </a>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{activity.Type}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Form>
            {Object.keys(activity.Properties).map((key) => {
              const value = activity.Properties[key];
              const printableValue: string =
                typeof value == "string" ? value : JSON.stringify(value);
              return (
                <Form.Group key={key} className="mb-3" controlId={key}>
                  <Form.Label>{key}</Form.Label>
                  <Form.Control value={printableValue} readOnly />
                </Form.Group>
              );
            })}
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
