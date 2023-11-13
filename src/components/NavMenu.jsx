import { useContext, lazy, Suspense } from 'react';
import '../index.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import OffCanvasCart from './OffCanvasCart';
const OffCanvasCart = lazy(() => import('./OffCanvasCart.jsx'));
import CartContext from '../store/cart-context';
import { NavLink } from 'react-router-dom';
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
          <Nav className='m-auto gap-2 mb-2 mb-lg-auto gap-lg-5 fw-semibold fs-5 text-uppercase'>
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
              <Button
                style={{ width: 'fit-content' }}
                type='button'
                variant='danger'
                onClick={logoutHandler}
              >
                Logout
              </Button>
            )}
          </Nav>
          <Suspense fallback={<p>Loading...</p>}>
            <OffCanvasCart
              placement={'end'}
              name={'Cart'}
              scroll={false}
              btn={{
                variant: 'outline-primary',
                size: 'md',
                text: 'Your Cart',
                className: 'position-relative d-flex gap-1 align-items-center',
              }}
              btnSpan={{ itemsInCart }}
            />
          </Suspense>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavMenu;
