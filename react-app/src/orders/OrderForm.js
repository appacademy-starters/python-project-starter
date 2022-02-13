import React from "react";
import "./order-styles.css";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { FormInputCard } from "./components/FormInputCard";
import { FormTitleCard } from "./components/FormTitleCard";

export const OrderForm = () => {
  return (
    <Container fluid>
      <Row>
        <Col />
        <Col xs={6}>
          <FormTitleCard />
          <Form>
            <FormInputCard inputLabel='Email'>
              <Form.Control
                className='custom-input'
                type='email'
                placeholder='Enter email'
              />
            </FormInputCard>
            <FormInputCard inputLabel='Company'>
              <Form.Control
                className='custom-input'
                type='text'
                placeholder='Your nswer'
              />
            </FormInputCard>
            <FormInputCard inputLabel='Is this your first order on our new platform?'>
              <div className='d-flex d-flex justify-content-evenly'>
                <Button variant='dark' size='lg'>
                  Yes, take me to add my
                  <br /> contact details
                </Button>
                <Button variant='dark' size='lg'>
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
