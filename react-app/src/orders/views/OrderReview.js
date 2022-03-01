import React from "react";
import { Col, Container, ListGroup, Row, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

export const OrderReview = () => {
  const customer = useSelector((state) => state.orders.customer);
  const orderDetails = useSelector((state) => state.orders.orderDetails);
  const { state: shippingDetails } = useLocation();

  const detailTitle = (key) => {
    const splitted = key.split(/(?=[A-Z])/);
    return splitted
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <Container fluid>
      <Row>
        <Col />
        <Col xs={6}>
          <h2>Customer Details</h2>
          <ListGroup>
            {Object.entries(customer).map(([key, value]) => {
              return (
                <ListGroup.Item key={key}>{`${detailTitle(key)} : ${
                  value || "n/a"
                }`}</ListGroup.Item>
              );
            })}
          </ListGroup>
          <Row className='mt-4 ' />
          <h2>Product Details</h2>
          <ListGroup>
            {Object.entries({ ...orderDetails, shipping: shippingDetails }).map(
              ([key, value]) => (
                <ListGroup.Item key={key}>{`${detailTitle(key)} : ${
                  value || "n/a"
                }`}</ListGroup.Item>
              )
            )}
          </ListGroup>
        </Col>
        <Col />
      </Row>
      <Row className='mt-4'>
        <Col className='text-center'>
          <Button
            onClick={() =>
              alert(
                "Thank you for your order! You will be recieving an invoice and order status shortly"
              )
            }
            variant='secondary'
          >
            Submit Order
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
