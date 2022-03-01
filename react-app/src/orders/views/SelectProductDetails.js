import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import "../order-styles.css";
import { Card, Col, Container, Row, Button, Form } from "react-bootstrap";
import { arrayProduct } from "../products";

import { Product } from "../components/Product";
import { FormTitleCard } from "../components/FormTitleCard";
import { FormInputCard } from "../components/FormInputCard";
import { useForm } from "../../hooks/useForm";

import { useDispatch, useSelector } from "react-redux";
import { setOrderCart, setOrderDetails } from "../../store/orders";

export const SelectProductDetails = () => {
  const orderDetails = useSelector((state) => state.orders.orderDetails);
  const [productModel, setProductModel] = useState(null);
  const dispatch = useDispatch();
  const history = useHistory();
  let { productId } = useParams();

  const [formValues, handleInputChange, reset] = useForm(orderDetails);
  const { notes, quantity, poJobName } = formValues;

  const handleSubmit = (event, nextAction) => {
    event.preventDefault();
    dispatch(
      setOrderDetails({
        ...formValues,
        productModel,
        product: currentProduct?.title,
      })
    );
    reset();
    if (nextAction === "shipping_details") {
      history.push("/product-order/delivey");
      return;
    }
    dispatch(
      setOrderCart({
        ...formValues,
        productModel,
        product: currentProduct?.title,
      })
    );
    history.push("/select-product");
  };

  const [currentProduct, setCurrentProduct] = useState(null);

  useEffect(() => {
    const product = arrayProduct.find((product) => product.id === productId);
    setCurrentProduct(product);
  }, [productId]);

  if (!currentProduct) return "Loading";
  return (
    <Container fluid>
      <Row>
        <Col />
        <Col md={5}>
          <Card className='mb-3'>
            <Card.Header className='bg-secondary'>
              {currentProduct.title}
            </Card.Header>
            <Form onSubmit={handleSubmit} className='p-4'>
              <Form.Label>PO#/ Job Name</Form.Label>
              <Form.Control
                className='custom-input'
                type='text'
                placeholder='Your answer'
                value={poJobName}
                name='poJobName'
                onChange={handleInputChange}
              />
            </Form>
            <Row xs={2}>
              {arrayProduct.map((product) => (
                <Product
                  key={product.title}
                  {...product}
                  styles={product.styles}
                  handleClick={() => {
                    setProductModel(product.title);
                    arrayProduct.map((_product) =>
                      _product.id === product.id
                        ? (_product.styles = "text-white bg-dark")
                        : (_product.styles = "")
                    );
                  }}
                />
              ))}
            </Row>
          </Card>
        </Col>
        <Col md={6}>
          <FormTitleCard />
          <Form onSubmit={handleSubmit}>
            <FormInputCard inputLabel='Quantity'>
              <Form.Control
                className='custom-input'
                type='number'
                placeholder='Your quantity'
                value={quantity}
                name='quantity'
                onChange={handleInputChange}
              />
            </FormInputCard>
            <FormInputCard inputLabel={currentProduct.notesLabel}>
              <Form.Control
                as='textarea'
                rows={3}
                className='custom-input'
                placeholder='Your Answer'
                value={notes}
                name='notes'
                onChange={handleInputChange}
              />
            </FormInputCard>
            <FormInputCard inputLabel='Do you need to order anything else?'>
              <div className='d-flex d-flex justify-content-evenly'>
                <Button
                  type='submit'
                  variant='dark'
                  size='lg'
                  onClick={(event) => handleSubmit(event, "add_more_products")}
                >
                  Yes, add more products
                </Button>
                <Button
                  type='submit'
                  variant='dark'
                  size='lg'
                  onClick={(event) => {
                    handleSubmit(event, "shipping_details");
                  }}
                >
                  No, i'm finished
                </Button>
              </div>
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
        <Col />
      </Row>
    </Container>
  );
};
