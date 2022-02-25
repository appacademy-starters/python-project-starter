import React, { useState } from "react";
import "../order-styles.css";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { FormInputCard } from "../components/FormInputCard";
import { ContactFormTitle } from "../components/ContactFormTitle";

import { useSelector } from "react-redux";

const bodyTxt = "Roundtrip shipping $30";

const deliveryOptions = [
  { id: 1, name: "Step Solution" },
  { id: 2, name: "Client" },
  { id: 3, name: "Rush 24 hour - Pick Up Option $90" },
];

export const DeliveryForm = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const customer = useSelector((state) => state.orders.customer);
  const orderDetails = useSelector((state) => state.orders.orderDetails);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `Confirm Your Order: ${JSON.stringify({
        customer,
        orderDetails,
        shipping: selectedOption,
      })}`
    );
    console.log(selectedOption);
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
          <Form autocomplete='off' onSubmit={handleSubmit}>
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
