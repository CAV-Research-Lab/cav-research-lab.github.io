import React from 'react';
import '../../App.css';
import './Pages.css';
import ScrollAnimation from 'react-animate-on-scroll';


function Sponsors() {
    return (
    <>
    <div className="sponsors-section">
        <h1 id="sponsor-title"><span className="orange_underline">Industrial Partners</span></h1>
        <ScrollAnimation animateIn="fadeIn">
        <img className="sponsors-image" src={require('../../images/sponsors.PNG')} alt="CAV-Lab industrial partners" />
        </ScrollAnimation>
    </div>
    </>
    );
  }

  export default Sponsors;
