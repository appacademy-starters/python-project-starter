import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../order-styles.css";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { useForm } from "../../hooks/useForm";
import { FormInputCard } from "../components/FormInputCard";
import { ContactFormTitle } from "../components/ContactFormTitle";
import { useDispatch, useSelector } from "react-redux";
import { setCustomer } from "../../store/orders";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";

const bodyTxt = `if this is your first time filling out an order on our new form please fill out your contact details so we can  update your profile.`;

export const ContactForm = () => {
  const [address, setAddress] = useState(null);
  const history = useHistory();
  const customer = useSelector((state) => state.orders.customer);
  const dispatch = useDispatch();
  const [formValues, handleInputChange, reset] = useForm(customer);
  const { fullName, company, email, phoneNumber, unit, zipCode } = formValues;

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(setCustomer({ ...formValues, address }));
    reset();
    history.push("select-product");
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
              <GooglePlacesAutocomplete
                apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
                selectProps={{
                  address,
                  onChange: setAddress,
                  isClearable: true,
                }}
                onLoadFailed={(error) =>
                  console.error("Could not inject Google script", error)
                }
              />
            </FormInputCard>
            <FormInputCard inputLabel='Apartment, unit, suite, or floor #'>
              <Form.Control
                className='custom-input'
                type='text'
                placeholder='Your answer'
                value={unit}
                name='unit'
                onChange={handleInputChange}
              />
            </FormInputCard>
            <FormInputCard inputLabel='Zip Code'>
              <Form.Control
                className='custom-input'
                type='text'
                placeholder='Your answer'
                value={zipCode}
                name='zipCode'
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
            onClick={() => history.push("/new-order")}
            variant='secondary'
            className='float-end'
          >
            Back to start
          </Button>
        </Col>
        <Col xs={6} />
        <Col>
          <Button onClick={(event) => handleSubmit(event)} variant='secondary'>
            Next: Choose Products
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
