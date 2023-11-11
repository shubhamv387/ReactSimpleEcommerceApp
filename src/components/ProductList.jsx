import { productsArr } from '../constents';
import { Row, Container, Col } from 'react-bootstrap';
import ProductModel from './ProductModel';
import OffCanvasCart from './OffCanvasCart';

const ProductList = () => {
  return (
    <>
      <Container>
        <Row className='d-flex g-5 justify-content-center align-items-center'>
          {productsArr.map((product, index) => (
            <ProductModel key={product.id} product={product} index={index} />
          ))}
        </Row>

        <Row>
          <Col className='d-flex justify-content-center mt-5'>
            <OffCanvasCart
              placement={'end'}
              name={'Cart'}
              scroll={false}
              btn={{
                variant: 'secondary',
                size: 'lg',
                text: 'See The Cart',
                className: 'd-flex gap-2 align-items-center',
              }}
              className='offcanvas'
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProductList;
