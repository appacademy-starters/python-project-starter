import React, { useState } from "react";
import "./order-styles.css";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { FormInputCard } from "./components/FormInputCard";
import { FormTitleCard } from "./components/FormTitleCard";
import { useForm } from "../hooks/useForm";

const initialForm = {
  company: "",
  email: "",
};

const newClientAction = (formValues) => {
  alert("new-client");
  console.log(formValues);
};
const recurrentClientAction = (formValues) => {
  alert("recurrent-client");
  console.log(formValues);
};

export const OrderFormView = () => {
  const [formValues, handleInputChange, reset] = useForm(initialForm);
  const { company, email } = formValues;
  const [clientType, setClientType] = useState("recurrent-client");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (clientType === "new-client") {
      newClientAction(formValues);
      return;
    }
    recurrentClientAction(formValues);
    reset();
  };
  return (
    <Container fluid>
      <Row>
        <Col />
        <Col xs={6}>
          <FormTitleCard />
          <Form onSubmit={handleSubmit}>
            <FormInputCard inputLabel='Email'>
              <Form.Control
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
                className='custom-input'
                type='text'
                placeholder='Your Answer'
                value={company}
                name='company'
                onChange={handleInputChange}
              />
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
