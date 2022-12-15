import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import DynamicBackground from '../DynamicBackground';
import Footer from '../Footer';

function Home() {
  return (
    <>
      <DynamicBackground />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
