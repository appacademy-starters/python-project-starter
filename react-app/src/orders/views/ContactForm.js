import React from "react";
import { useHistory } from "react-router-dom";
import "../order-styles.css";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { useForm } from "../../hooks/useForm";
import { FormInputCard } from "../components/FormInputCard";
import { ContactFormTitle } from "../components/ContactFormTitle";

const initialForm = {
  fullName: "",
  company: "",
  email: "",
  phoneNumber: "",
  address: "",
};

const bodyTxt = `if this is your first time filling out an order on our new form please fill out your contact details so we can  update your profile.`;

export const ContactForm = () => {
  const history = useHistory();
  const [formValues, handleInputChange, reset] = useForm(initialForm);
  const { fullName, company, email, phoneNumber, address } = formValues;

  const handleSubmit = (event) => {
    event.preventDefault();
    reset();
  };
  return (
    <Container fluid>
      <Row>
        <Col />
        <Col xs={6}>
          <ContactFormTitle title='Contact Details' bodyTxt={bodyTxt} />
          <Form onSubmit={handleSubmit}>
            <FormInputCard inputLabel='Full Name'>
              <Form.Control
                className='custom-input'
                type='text'
                placeholder='Your answer'
                value={fullName}
                name='fullName'
                onChange={handleInputChange}
              />
            </FormInputCard>
            <FormInputCard inputLabel='Company'>
              <Form.Control
                className='custom-input'
                type='text'
                placeholder='Your answer'
                value={company}
                name='company'
                onChange={handleInputChange}
              />
            </FormInputCard>
            <FormInputCard inputLabel='Contact E-mail (if different)'>
              <Form.Control
                className='custom-input'
                type='text'
                placeholder='Your answer'
                value={email}
                name='email'
                onChange={handleInputChange}
              />
            </FormInputCard>
            <FormInputCard inputLabel='Phone Number'>
              <Form.Control
                className='custom-input'
                type='text'
                placeholder='Your answer'
                value={phoneNumber}
                name='phoneNumber'
                onChange={handleInputChange}
              />
            </FormInputCard>
            <FormInputCard inputLabel='Address, City, State, Zip Code'>
              <Form.Control
                className='custom-input'
                type='text'
                placeholder='Your answer'
                value={address}
                name='address'
                onChange={handleInputChange}
              />
            </FormInputCard>
          </Form>
        </Col>
        <Col />
      </Row>
      <Row className='mb-4'>
        <Col>
          <Button
            onClick={() => history.push("new-order")}
            variant='secondary'
            className='float-end'
          >
            Back to start
          </Button>
        </Col>
        <Col xs={6} />
        <Col>
          <Button
            onClick={() => history.push("select-product")}
            variant='secondary'
          >
            Next: Choose Products
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
