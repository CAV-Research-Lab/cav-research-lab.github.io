import React from 'react';
import '../App.css';
import './Pages.css';
import DynamicBackground from '../components/home/DynamicBackground';
import Vision from '../components/home/Vision';
import AboutUs from '../components/home/AboutUs';
import Highlights from '../components/home/Highlights';
import Footer from '../components/layout/Footer';
import Sponsors from '../components/home/Sponsors';

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
