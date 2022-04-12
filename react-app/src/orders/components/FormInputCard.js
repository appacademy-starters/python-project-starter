import React from "react";
import { Card, Form } from "react-bootstrap";

export const FormInputCard = ({ inputLabel, children }) => {
  return (
    <Card className='mb-3'>
      <Form.Group className='mb-3 p-4' controlId='formBasicEmail'>
        <Form.Label>{inputLabel}</Form.Label>
        {children}
      </Form.Group>
    </Card>
  );
};
