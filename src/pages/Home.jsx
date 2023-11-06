import React from 'react';
import MusicList from '../components/MusicList';
import Section from '../components/UI/Section';

const Home = () => {
  return (
    <Section>
      <h1 className='fs-4 fw-bold'>TOURS</h1>
      <MusicList />
    </Section>
  );
};

export default Home;
