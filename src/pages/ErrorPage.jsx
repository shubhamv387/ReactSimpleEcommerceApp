import React from 'react';
import Footer from '../components/Footer';
import NavMenu from '../components/NavMenu';

const Error = () => {
  return (
    <>
      <NavMenu />
      <main
        className='mb-3 d-flex mx-auto container-xxl p-lg-4 p-sm-3 p-2'
        style={{ marginTop: '4rem', minHeight: 'calc(100vh - 225px)' }}
      >
        <section className='d-flex align-items-center justify-content-center w-100'>
          <div className='d-flex flex-column align-items-center gap-2'>
            <h1>An error occurred!</h1>
            <p className='fs-5'>Could not find this page!</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Error;
