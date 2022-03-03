import React from "react";
import { Col, Container, ListGroup, Row, Button, Badge } from "react-bootstrap";
import { useSelector } from "react-redux";
// import { useLocation } from "react-router-dom";

export const OrderReview = () => {
  const customer = useSelector((state) => state.orders.customer);
  const orderCart = useSelector((state) => state.orders.orderCart);
  // const { state: shippingDetails } = useLocation();
  // const orderDetails = useSelector((state) => state.orders.orderDetails);

  const detailTitle = (key) => {
    const splitted = key.split(/(?=[A-Z])/);
    return splitted
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const renderCustomerDetails = (key, value) => {
    if (value === "" || value === undefined) return;
    return (
      <ListGroup.Item key={key}>{`${detailTitle(key)} : ${
        value || "n/a"
      }`}</ListGroup.Item>
    );
  };

  return (
    <Container fluid>
      <Row>
        <Col />
        <Col xs={6}>
          <h2>Customer Details</h2>
          <ListGroup>
            {Object.entries(customer).map(([key, value]) =>
              renderCustomerDetails(key, value)
            )}
          </ListGroup>
          <Row className='mt-4 ' />
          <h2>Product Details</h2>
          <ListGroup as='ul'>
            {orderCart.map((item) => (
              <ListGroup.Item
                key={item.id}
                as='li'
                className='d-flex justify-content-between align-items-start'
              >
                <div className='ms-2 me-auto'>
                  <div className='fw-bold'>{item.product}</div>
                  {item.productModel}
                </div>
                <Badge bg='dark' pill>
                  {item.quantity}
                </Badge>
              </ListGroup.Item>
            ))}
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
