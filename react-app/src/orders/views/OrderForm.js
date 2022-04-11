import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../order-styles.css";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { useForm } from "../../hooks/useForm";
import { FormInputCard } from "../components/FormInputCard";
import { FormTitleCard } from "../components/FormTitleCard";

import { useDispatch, useSelector } from "react-redux";
import { setCustomer } from "../../store/orders";

export const OrderForm = () => {
  const dispatch = useDispatch();
  const customer = useSelector((state) => state.orders.customer);
  const history = useHistory();
  const [formValues, handleInputChange, reset] = useForm(customer);
  const { company, email } = formValues;
  const [clientType, setClientType] = useState("recurrent-client");
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();
      if (clientType === "new-client") {
        history.push("new-client");
        return;
      }
      history.push("select-product");
      dispatch(setCustomer(formValues));
      reset();
    }
    setValidated(true);
  };
  return (
    <Container fluid>
      <Row>
        <Col />
        <Col xs={6}>
          <FormTitleCard />
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <FormInputCard inputLabel='Email'>
              <Form.Control
                required
                className='custom-input'
                type='email'
                placeholder='Enter email'
                value={email}
                name='email'
                onChange={handleInputChange}
              />
            </FormInputCard>
            <FormInputCard inputLabel='Company'>
              <Form.Control
                required
                minLength='2'
                className='custom-input'
                type='text'
                placeholder='Your Answer'
                value={company}
                name='company'
                onChange={handleInputChange}
              />
              <Form.Control.Feedback type='invalid'>
                Must be min Two Characters Long or more.
              </Form.Control.Feedback>
            </FormInputCard>
            <FormInputCard inputLabel='Is this your first order on our new platform?'>
              <div className='d-flex d-flex justify-content-evenly'>
                <Button
                  type='submit'
                  variant='dark'
                  size='lg'
                  onClick={() => setClientType("new-client")}
                >
                  Yes, take me to add my
                  <br /> contact details
                </Button>
                <Button
                  onClick={() => setClientType("recurrent-client")}
                  type='submit'
                  variant='dark'
                  size='lg'
                >
                  No, take me to start
                  <br /> my order
                </Button>
              </div>
            </FormInputCard>
          </Form>
        </Col>
        <Col />
      </Row>
    </Container>
  );
};
