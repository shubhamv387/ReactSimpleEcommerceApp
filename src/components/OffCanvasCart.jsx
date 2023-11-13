import { useContext, useState } from 'react';
import { Col, Container, Row, Image, Button, Offcanvas } from 'react-bootstrap';
import CartContext from '../store/cart-context';
import { RiShoppingCartFill } from 'react-icons/ri';

function OffCanvasCart({ name, btn, btnSpan, ...props }) {
  const cartCtx = useContext(CartContext);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const orderHandler = () => {
    cartCtx.order(cartCtx.items);
  };

  const cartItemRemoveHandler = (id, _id) => {
    cartCtx.removeItem(id, _id);
  };

  return (
    <>
      <Button {...btn} onClick={handleShow}>
        <RiShoppingCartFill />
        {btn.text}
        {btnSpan && (
          <span className='position-absolute top-0 start-100 translate-middle badge rounded-5 bg-success'>
            {btnSpan.itemsInCart}
          </span>
        )}
      </Button>

      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton style={{ background: '#ccc' }}>
          <Offcanvas.Title className='w-100 fs-3 fw-bold text-center'>
            {name}
          </Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body className='d-flex'>
          {cartCtx.items.length > 0 ? (
            <Container className='d-flex flex-column'>
              <Row className='gap-2 mt-4'>
                {[
                  { name: 'Item', colSize: 6 },
                  { name: 'Price', colSize: 2 },
                  { name: 'Quantity', colSize: 3 },
                ].map((item, index) => (
                  <Col
                    key={index}
                    className='d-flex border-black border-bottom'
                    xs={item.colSize}
                  >
                    <h5>{item.name}</h5>
                  </Col>
                ))}
              </Row>

              {cartCtx.items.map((item) => (
                <Row key={item._id} className='gap-2'>
                  <Col
                    className='align-items-center d-flex gap-2 border-black border-bottom py-2'
                    xs={6}
                  >
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      width={55}
                      height={55}
                      className='rounded-1'
                    />
                    <p className='mb-0'>{item.title}</p>
                  </Col>

                  <Col
                    className='justify-content-center align-items-center d-flex border-black border-bottom py-2'
                    xs={2}
                  >
                    <p className='mb-0'>${item.price}</p>
                  </Col>

                  <Col
                    className='justify-content-between align-items-center d-flex gap-2 border-black border-bottom py-2'
                    xs={3}
                  >
                    <p className='mb-0'>{item.qty}</p>
                    <Button
                      size='sm'
                      variant='danger'
                      onClick={() => cartItemRemoveHandler(item.id, item._id)}
                    >
                      X
                    </Button>
                  </Col>
                </Row>
              ))}
              <h4 className='my-4 align-self-end fw-semibold'>
                Total:{' '}
                <span className='fw-normal fs-5'>
                  {`$${cartCtx.totalAmount.toFixed(2)}`}
                </span>
              </h4>

              <Button
                onClick={orderHandler}
                size='lg'
                className='fw-semibold align-self-center'
              >
                PURCHASE
              </Button>
            </Container>
          ) : (
            <h3 className='mt-3 m-auto'>Empty Cart!</h3>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default OffCanvasCart;
