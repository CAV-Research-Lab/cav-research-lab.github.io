import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import './DynamicBackground.css';
import backgroundVideo from '../../assets/images/home/background_video.m4v';
import backgroundPoster from '../../assets/images/home/background_video_poster.jpg';

function DynamicBackground() {
  return (
    <div className='hero-container'>
      <video className='hero-video' src={backgroundVideo} poster={backgroundPoster} autoPlay loop muted playsInline />
      <div id='company-name'>
        <p className='hero-eyebrow'>Cognitive Autonomous Vehicles Research Lab</p>
        <h1>CAV-Lab</h1>
        <h3>Advancing safe, trustworthy autonomy for intelligent vehicles and robotic systems.</h3>
        <div className='hero-actions'>
          <Link className='hero-button hero-button-primary' to='/research'>
            Explore Research
          </Link>
          <Link className='hero-button hero-button-secondary' to='/impact'>
            View Impact
          </Link>
        </div>
        <dl className='hero-proof'>
          <div>
            <dt>2016</dt>
            <dd>Established at the University of Surrey</dd>
          </div>
          <div>
            <dt>£15M+</dt>
            <dd>Research portfolio across public and industry programmes</dd>
          </div>
          <div>
            <dt>70+</dt>
            <dd>Selected publications, patents, books, and policy contributions</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}

export default DynamicBackground;
