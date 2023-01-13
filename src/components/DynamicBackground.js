import React from 'react';
import '../App.css';
import { Button } from './Button';
import './DynamicBackground.css';
//import backgroundImg from'../img-1.jpg'
import background_vid from '../images/background_video.mp4'

function DynamicBackground() {
  return (
    <div className='hero-container'>
      <video src={background_vid} autoPlay loop muted />
      {/*<img src={backgroundImg} /> */}
      <div id='company-name'>
        <h4>CONNECTED AND AUTONOMOUS VEHICLES LAB</h4>
        <h5>AUTOMOTIVE AND ROBOTICS AI RESEARCH</h5>
      </div>
      {/* <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button> 
      </div>*/}
    </div>
  );
}

export default DynamicBackground;
