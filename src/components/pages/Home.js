 import React from 'react';
import '../../App.css';
import './Pages.css';
// import Cards from '../Cards';
import DynamicBackground from '../DynamicBackground';
import Vision from '../Vision';
import Footer from '../Footer';
import Team from './Team';


function Home() {
  return (
    <>
      <DynamicBackground />
      <Vision />
      <Team />
      <Footer />
    </>
  );
}
//<Cards />

export default Home;