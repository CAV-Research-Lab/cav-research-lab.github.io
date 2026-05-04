import React from 'react';
import '../../App.css';
import './Pages.css';
import ScrollAnimation from '../ScrollAnimation';
import sponsorsImage from '../../images/sponsors.PNG';


function Sponsors() {
    return (
    <>
    <div className="sponsors-section">
        <h1 id="sponsor-title"><span className="orange_underline">Industrial Partners</span></h1>
        <ScrollAnimation animateIn="fadeIn">
        <img className="sponsors-image" src={sponsorsImage} alt="CAV-Lab industrial partners" />
        </ScrollAnimation>
    </div>
    </>
    );
  }

  export default Sponsors;
