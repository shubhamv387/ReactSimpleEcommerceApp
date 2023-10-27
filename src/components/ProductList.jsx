import React from 'react';
import { productsArr } from '../constents';
import { Row, Container, Button, Col } from 'react-bootstrap';
import ProductModel from './ProductModel';

const ProductList = () => {
  return (
    <Container>
      <Row className='d-flex g-5 justify-content-center align-items-center'>
        {productsArr.map((product, index) => (
          <ProductModel key={product.id} product={product} index={index} />
        ))}
      </Row>

      <Row>
        <Col className='d-flex justify-content-center mt-5'>
          <Button variant='secondary' size='lg' type='button'>
            See The Cart
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductList;
