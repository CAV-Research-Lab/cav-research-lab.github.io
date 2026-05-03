import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import './DynamicBackground.css';
import backgroundVideo from '../images/background_video.mp4';

function DynamicBackground() {
  return (
    <div className='hero-container'>
      <video className='hero-video' src={backgroundVideo} autoPlay loop muted playsInline />
      <div id='company-name'>
        <p className='hero-eyebrow'>Connected Autonomous Research Lab</p>
        <h1>Connected and Autonomous Vehicles Lab</h1>
        <h3>Safe, trustworthy AI for autonomous vehicles and robotics.</h3>
        <div className='hero-actions'>
          <Link className='hero-button hero-button-primary' to='/research'>
            Explore Research
          </Link>
          <Link className='hero-button hero-button-secondary' to='/publications'>
            View Publications
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DynamicBackground;
