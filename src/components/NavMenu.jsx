import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavMenu = () => {
  return (
    <Navbar fixed='top' expand='lg' className='bg-body-tertiary'>
      <Container>
        <Navbar.Brand className='fs-3 fw-semibold' href='#home'>
          The Generics
        </Navbar.Brand>
        <Navbar.Toggle className='me-4' aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='m-auto gap-lg-5 fw-semibold fs-5 text-uppercase'>
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#link'>Store</Nav.Link>
            <Nav.Link href='#link'>About</Nav.Link>
          </Nav>
          <button className='btn btn-outline-primary position-relative mt-3 mt-lg-auto'>
            Cart{' '}
            <span className='position-absolute top-0 start-100 translate-middle badge rounded-5 bg-success'>
              99+
            </span>
          </button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavMenu;
