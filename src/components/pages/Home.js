import React from 'react';
import '../../App.css';
import './Pages.css';
import DynamicBackground from '../DynamicBackground';
import Vision from '../Vision';
import AboutUs from '../AboutUs';
import Highlights from '../Highlights';
import Footer from '../Footer';
import Sponsors from './Sponsors';

function Home() {
  return (
    <>
      <DynamicBackground />
      <Vision />
      <AboutUs />
      <Highlights />
      <Sponsors />
      <Footer />
    </>
  );
}

export default Home;
