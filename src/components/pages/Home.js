 import React from 'react';
import '../../App.css';
import './Pages.css';
// import Cards from '../Cards';
import DynamicBackground from '../DynamicBackground';
import Vision from '../Vision';
import Footer from '../Footer';


function Home() {
  return (
    <>
      <DynamicBackground />
      <Vision />
      <Footer />
    </>
  );
}
//<Cards />

export default Home;