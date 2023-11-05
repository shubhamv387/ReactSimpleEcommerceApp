import React from 'react';
import MusicList from '../components/MusicList';

const Home = () => {
  return (
    <section
      className='d-flex gap-3 m-auto flex-column justify-content-center align-items-center w-100'
      style={{ maxWidth: '900px' }}
    >
      <h1 className='fs-4 fw-bold'>TOURS</h1>
      <MusicList />
    </section>
  );
};

export default Home;
