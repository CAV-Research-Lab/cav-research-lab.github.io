import React from 'react';
import '../App.css';
import './DynamicBackground.css';
import backgroundVideo from '../images/background_video.mp4';

function DynamicBackground() {
  return (
    <div className='hero-container'>
      <video src={backgroundVideo} autoPlay loop muted />
      <div id='company-name'>
        <h1>CONNECTED AND AUTONOMOUS VEHICLES LAB</h1>
        <h3>AUTOMOTIVE AND ROBOTICS AI RESEARCH</h3>
      </div>
    </div>
  );
}

export default DynamicBackground;
