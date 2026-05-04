import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import './DynamicBackground.css';
import backgroundVideo from '../images/background_video.m4v';
import backgroundPoster from '../images/background_video_poster.jpg';

function DynamicBackground() {
  return (
    <div className='hero-container'>
      <video className='hero-video' src={backgroundVideo} poster={backgroundPoster} autoPlay loop muted playsInline />
      <div id='company-name'>
        <p className='hero-eyebrow'>Connected Autonomous Vehicles Research Lab</p>
        <h1>CAV-Lab</h1>
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
