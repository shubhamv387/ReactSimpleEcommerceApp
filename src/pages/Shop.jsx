import React from 'react';
import ProductList from '../components/ProductList';

const Shop = () => {
  return (
    <section
      className='d-flex gap-3 m-auto flex-column justify-content-center align-items-center w-100'
      style={{ maxWidth: '900px' }}
    >
      <ProductList />;
    </section>
  );
};

export default Shop;
