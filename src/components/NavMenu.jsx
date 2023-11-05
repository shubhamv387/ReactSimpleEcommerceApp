import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import OffCanvasCart from './OffCanvasCart';
import CartContext from '../store/cart-context';

const NavMenu = () => {
  const cartCtx = useContext(CartContext);

  const itemsInCart = cartCtx.items.reduce(
    (curNum, item) => curNum + item.qty,
    0
  );

  return (
    <Navbar fixed='top' expand='lg' className='bg-body-tertiary'>
      <Container>
        <Navbar.Brand className='fs-3 fw-semibold' href='#home'>
          The Generics
        </Navbar.Brand>
        <Navbar.Toggle className='me-4' aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='m-auto gap-lg-5 fw-semibold fs-5 text-uppercase'>
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href='#store'>Store</Nav.Link>
            <Nav.Link href='#about'>About</Nav.Link>
          </Nav>
          <OffCanvasCart
            placement={'end'}
            name={'Cart'}
            scroll={false}
            btn={{
              variant: 'outline-primary',
              size: 'md',
              text: 'Cart',
              className: 'position-relative',
            }}
            btnSpan={{ itemsInCart }}
          ></OffCanvasCart>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavMenu;
