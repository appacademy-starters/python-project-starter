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
  const [validated, setValidated] = useState(false);
  const [nextAction, setNextAction] = useState("shipping_details");

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
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
        dispatch(
          setOrderCart({
            ...formValues,
            productModel,
            product: currentProduct?.title,
          })
        );
        return;
      }
      dispatch(
        setOrderCart({
          ...formValues,
          productModel,
          product: currentProduct?.title,
        })
      );
      arrayProduct.forEach((product) => (product.styles = ""));
      history.push("/select-product");
    }
    setValidated(true);
  };

  const [currentProduct, setCurrentProduct] = useState(null);

  useEffect(() => {
    const product = arrayProduct.find((product) => product.id === productId);
    setCurrentProduct(product);
  }, [productId]);

  if (!currentProduct) return "Loading";
  return (
    <Container fluid>
      <Form
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        className='p-4'
      >
        <Row>
          <Col />
          <Col md={5}>
            <Card className='mb-3'>
              <Card.Header className='bg-secondary'>
                {currentProduct.title}
              </Card.Header>

              <Form.Label>PO#/ Job Name</Form.Label>
              <Form.Control
                required
                minLength='2'
                className='custom-input'
                type='text'
                placeholder='Your answer'
                value={poJobName}
                name='poJobName'
                onChange={handleInputChange}
              />
              <Form.Control.Feedback type='invalid'>
                Must be min Two Characters Long or more.
              </Form.Control.Feedback>

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

            <FormInputCard inputLabel='Quantity'>
              <Form.Control
                required
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
                required
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
                  onClick={() => setNextAction("add_more_products")}
                >
                  Yes, add more products
                </Button>
                <Button type='submit' variant='dark' size='lg'>
                  No, i'm finished
                </Button>
              </div>
            </FormInputCard>
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
      </Form>
    </Container>
  );
};
