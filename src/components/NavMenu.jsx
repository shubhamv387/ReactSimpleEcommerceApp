import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import OffCanvasCart from './OffCanvasCart';
import CartContext from '../store/cart-context';
import { NavLink } from 'react-router-dom';
import '../index.css';
import { Button } from 'react-bootstrap';
import AuthContext from '../store/auth-context';
import { toast } from 'react-toastify';

const NavMenu = () => {
  const cartCtx = useContext(CartContext);
  const authCtx = useContext(AuthContext);

  // console.log(cartCtx.items);

  const itemsInCart = cartCtx.items.reduce(
    (curNum, item) => curNum + item.qty,
    0
  );

  const logoutHandler = () => {
    authCtx.logout();
    toast.success('logged out!', { position: 'bottom-right' });
  };

  return (
    <Navbar fixed='top' expand='lg' className='bg-body-tertiary'>
      <Container>
        <Navbar.Brand className='fs-3 fw-semibold'>The Generics</Navbar.Brand>
        <Navbar.Toggle className='me-4' aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='m-auto gap-lg-5 fw-semibold fs-5 text-uppercase'>
            <NavLink
              className='text-decoration-none text-secondary d-flex align-items-center'
              to='/'
            >
              Home
            </NavLink>
            {authCtx.isLoggedIn && (
              <NavLink
                className='text-decoration-none text-secondary d-flex align-items-center'
                to='/store'
              >
                Store
              </NavLink>
            )}
            <NavLink
              className='text-decoration-none text-secondary d-flex align-items-center'
              to='/about'
            >
              About
            </NavLink>
            <NavLink
              className='text-decoration-none text-secondary d-flex align-items-center'
              to='/contact'
            >
              Contact
            </NavLink>

            {!authCtx.isLoggedIn && (
              <>
                <NavLink
                  className='text-decoration-none text-secondary d-flex align-items-center'
                  to='/login'
                >
                  Login
                </NavLink>
                <NavLink
                  className='text-decoration-none text-secondary d-flex align-items-center'
                  to='/register'
                >
                  Register
                </NavLink>
              </>
            )}
            {authCtx.isLoggedIn && (
              <Button type='button' variant='danger' onClick={logoutHandler}>
                Logout
              </Button>
            )}
          </Nav>
          <OffCanvasCart
            placement={'end'}
            name={'Cart'}
            scroll={false}
            btn={{
              variant: 'outline-primary',
              size: 'md',
              text: 'Cart',
              className: 'position-relative d-flex gap-1 align-items-center',
            }}
            btnSpan={{ itemsInCart }}
          ></OffCanvasCart>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavMenu;
