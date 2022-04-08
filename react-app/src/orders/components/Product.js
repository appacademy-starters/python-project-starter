import React from "react";
import { Card, Button, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import Image from 'react-bootstrap/Image'

export const Product = ({ src, alt, title, description, handleClick }) => {
  return (
    <Col className='d-grid justify-content-around mb-2 mt-2'>
      <Card className='text-center' style={{ width: "15rem" }}>
        <Card.Body className='m-4 rounded border border-dark'>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Image src={src} className='rounded mx-auto d-block img-fluid' alt={alt} />
        </Card.Body>
        <Button className='m-2' variant='dark' onClick={handleClick}>
          Select
        </Button>
      </Card>
    </Col>
  );
};

Product.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  handleClick: PropTypes.func,
};
