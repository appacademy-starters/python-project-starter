import React from "react";
import Card from "react-bootstrap/Card";

export const FormTitleCard = () => {
  return (
    <Card className='mb-3'>
      <Card.Header className='bg-secondary'></Card.Header>
      <Card.Body className='p-0'>
        <h1 className='border-bottom px-4'>Order Request Form</h1>
        <h1>&nbsp;</h1>
      </Card.Body>
    </Card>
  );
};
