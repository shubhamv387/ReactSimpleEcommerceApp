import React from 'react';
import Navbar from './NavMenu';

const Header = () => {
  return (
    <header className='position-relative'>
      <Navbar />
      <div
        className='d-flex w-100 justify-content-center align-items-center py-5 bg-secondary text-white'
        style={{ marginTop: '4rem' }}
      >
        <h1>The Generics</h1>
      </div>
    </header>
  );
};

export default Header;
