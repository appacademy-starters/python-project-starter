import React from "react";
import { useHistory } from "react-router-dom";
import "../order-styles.css";
import { Card, Col, Container, Form, Row, Button } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { useForm } from "../../hooks/useForm";
import { FormInputCard } from "../components/FormInputCard";
import { FormTitleCard } from "../components/FormTitleCard";

const arrayProduct = [
  {
    src: "https://via.placeholder.com/250",
    alt: "",
    title: "vinyl",
    description: "stari-noses",
  },
  {
    src: "https://via.placeholder.com/250",
    alt: "",
    title: "engineered wood",
    description: "stari-noses",
  },
  {
    src: "https://via.placeholder.com/250",
    alt: "",
    title: "mouldings",
    description: "",
  },
  {
    src: "https://via.placeholder.com/250",
    alt: "",
    title: "whiteriser",
    description: "",
  },
];

export const SelectProduct = () => {
  const history = useHistory();

  return (
    <Container fluid>
      <Row>
        <Col />
        <Col xs={6}>
          <Card className='mb-3'>
            <Card.Header className='bg-secondary'>Select a Product</Card.Header>
            <Card.Body className='p-0'>
              {arrayProduct.map((product, index) => (
                <>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                  <img
                    src={product.src}
                    class='img-thumbnail'
                    alt={product.alt}
                  />
                  {/* <span className='p-5'></span> */}
                </>
              ))}
            </Card.Body>
          </Card>
        </Col>
        <Col />
      </Row>
    </Container>
  );
};
