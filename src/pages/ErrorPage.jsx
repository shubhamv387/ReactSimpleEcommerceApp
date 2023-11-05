import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Error = () => {
  return (
    <>
      <Header />
      <main className='my-3 d-flex mx-auto container-xxl p-lg-4 p-sm-3 p-2'>
        <section className='d-flex align-items-center justify-content-center w-100'>
          <h1>Page Not Found!</h1>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Error;
