import { lazy, Suspense } from 'react';
// import Navbar from './NavMenu';
const NavMenu = lazy(() => import('./NavMenu.jsx'));
import { useLocation } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { BsFillPlayFill } from 'react-icons/bs';

const Header = () => {
  const { pathname } = useLocation();

  return (
    <header className='position-relative'>
      <Suspense fallback={<p>Loading...</p>}>
        <NavMenu />
      </Suspense>
      <div
        className='d-flex flex-column w-100 justify-content-center align-items-center  bg-secondary text-white py-4'
        style={{ marginTop: '4rem' }}
      >
        <h1 className='mb-4 display-1 fw-semibold'>The Generics</h1>
        {pathname === '/' && (
          <>
            <Button
              className='fs-4 mx-auto my-4 text-white bg-transparent px-4 py-2 rounded-0'
              style={{ border: '1px solid #56CCF2' }}
            >
              Get our Latest Album
            </Button>
            <Button
              className='fs-4 d-flex rounded-circle p-3 mx-auto bg-transparent'
              style={{ border: '2px solid #56CCF2', color: '#56CCF2' }}
            >
              <BsFillPlayFill size={35} />
            </Button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
