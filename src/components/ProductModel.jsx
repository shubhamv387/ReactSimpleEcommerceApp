import React from 'react';
import { Col, Button, Card, CardHeader, CardBody } from 'react-bootstrap';
import Rating from './Rating';

const ProductModel = ({ product, index }) => {
  let classes = `d-flex justify-content-center ${
    index % 2 === 0 ? 'justify-content-md-end' : 'justify-content-md-start'
  }`;

  return (
    <Col md='6' className={classes}>
      <Card style={{ width: '18rem' }}>
        <CardHeader className='d-flex gap-2 flex-column align-items-center'>
          <h4>{product.title}</h4>
          <img className='w-100' src={product.imageUrl} alt={product.title} />
        </CardHeader>
        <CardBody className='d-flex justify-content-between align-items-center'>
          <p className='d-flex mb-0 fw-bold fs-5'>$ {product.price}</p>
          <Rating className='rating' value={product.rating} />
          <Button size='sm' variant='primary'>
            ADD TO CART
          </Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ProductModel;
