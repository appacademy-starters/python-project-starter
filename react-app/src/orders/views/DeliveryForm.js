import React, { useState } from "react";
import "../order-styles.css";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { FormInputCard } from "../components/FormInputCard";
import { ContactFormTitle } from "../components/ContactFormTitle";

const bodyTxt = "Roundtrip shipping $30";

const deliveryOptions = [
  { id: 1, name: "Step Solution" },
  { id: 2, name: "Client" },
];

export const DeliveryForm = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(selectedOption);
    // history.push("select-product");
  };

  const changeList = (id, checked) => {
    const selected = deliveryOptions.find((option) => option.id === id);
    setSelectedOption(selected.name);
  };
  return (
    <Container fluid>
      <Row>
        <Col />
        <Col xs={6}>
          <ContactFormTitle title='Delivery' bodyTxt={bodyTxt} />
          <Form onSubmit={handleSubmit}>
            <FormInputCard inputLabel='Pick Up / Drop Off by'>
              {deliveryOptions.map(({ id, name }) => (
                <div key={id}>
                  <Form.Check type='radio' id={id}>
                    <Form.Check.Input
                      type='radio'
                      name='delivery'
                      value={id}
                      onChange={() => changeList(id)}
                    />
                    <Form.Check.Label htmlFor={name}>{name}</Form.Check.Label>
                  </Form.Check>
                </div>
              ))}
            </FormInputCard>
          </Form>
        </Col>
        <Col />
      </Row>
      <Row className='mb-4'>
        <Col className='text-center'>
          <Button onClick={handleSubmit} variant='secondary'>
            Submit Order
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
