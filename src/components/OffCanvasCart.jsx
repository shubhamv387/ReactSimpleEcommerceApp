import { useState } from 'react';
import { Col, Container, Row, Image, Button, Offcanvas } from 'react-bootstrap';
import { cartItems } from '../constents';

function OffCanvasCart({ name, btn, btnSpan, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const cartItemRemoveHandler = (id) => {
    const cartItem = cartItems.items.filter((item) => item.id === id);

    let updatedCartItems = cartItems.items.filter((item) => item.id !== id);

    let updatedTotalAmount =
      cartItems.totalAmount - cartItem[0].price * cartItem[0].qty;

    let updatedCart = {
      items: updatedCartItems,
      totalAmount: updatedTotalAmount,
    };

    console.log(cartItem);
    console.log(updatedCart);
  };

  return (
    <>
      <Button {...btn} onClick={handleShow}>
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
        <Offcanvas.Body>
          <Container className='d-flex flex-column'>
            <Row className='gap-2 mt-4'>
              {[
                { name: 'Item', colSize: 6 },
                { name: 'Price', colSize: 2 },
                { name: 'Quantity', colSize: 3 },
              ].map((item) => (
                <Col
                  key={item.name}
                  className='d-flex border-black border-bottom'
                  sm={item.colSize}
                >
                  <h5>{item.name}</h5>
                </Col>
              ))}
            </Row>

            {cartItems.items.map((item) => (
              <Row key={item.id} className='gap-2'>
                <Col
                  className='align-items-center d-flex gap-2 border-black border-bottom py-2'
                  sm={6}
                >
                  <Image
                    src={item.imgUrl}
                    alt={item.name}
                    width={55}
                    height={55}
                    className='rounded-1'
                  />
                  <p className='mb-0'>{item.name}</p>
                </Col>

                <Col
                  className='justify-content-center align-items-center d-flex border-black border-bottom py-2'
                  sm={2}
                >
                  <p className='mb-0'>{item.price}</p>
                </Col>

                <Col
                  className='justify-content-between align-items-center d-flex gap-2 border-black border-bottom py-2'
                  sm={3}
                >
                  <p className='mb-0'>{item.qty}</p>
                  <Button
                    size='sm'
                    variant='danger'
                    onClick={() => cartItemRemoveHandler(item.id)}
                  >
                    X
                  </Button>
                </Col>
              </Row>
            ))}
            <h4 className='my-4 align-self-end fw-semibold'>
              Total:{' '}
              <span className='fw-normal fs-5'>${cartItems.totalAmount}</span>
            </h4>
            <Button
              onClick={() => alert('Order placed, Enjoy!')}
              size='lg'
              className='fw-semibold align-self-center'
            >
              PURCHASE
            </Button>
          </Container>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default OffCanvasCart;
