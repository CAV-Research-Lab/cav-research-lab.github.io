 import React from 'react';
import '../../App.css';
import './Pages.css';
// import Cards from '../Cards';
import DynamicBackground from '../DynamicBackground';
import Vision from '../Vision';
import AboutUs from '../AboutUs';
import Footer from '../Footer';
import Team from './Team';
import Sponsors from './Sponsors';



function Home() {
  return (
    <>
      <DynamicBackground />
      <Vision />
      <AboutUs />
      <Team />
      <Sponsors />
      <Footer />
    </>
  );
}
//<Cards />

export default Home;