import React from "react";
import Card from "react-bootstrap/Card";

export const ContactFormTitle = ({ title, bodyTxt }) => {
  return (
    <Card className='mb-3'>
      <Card.Header className='bg-secondary'>{title}</Card.Header>
      <Card.Body className='p-2'>
        <Card.Text>{bodyTxt}</Card.Text>
      </Card.Body>
    </Card>
  );
};
