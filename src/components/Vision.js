import React from 'react';
import '../App.css';
import './Vision.css';
import YoutubeEmbed from "./YoutubeEmbed";
import ScrollAnimation from 'react-animate-on-scroll';

function Vision() {

    return (
      <>
      <div id="vision-grid-container">
      <ScrollAnimation animateIn="fadeIn">
  
            <div id="grid-item">
              <p>CAV-Lab envisions a world in which 
              humans and autonomous systems are capable of safely and harmoniously 
              co-existing together. <br></br><br></br>

              CAV-Lab pursue research that makes self-driving cars and robots operated 
              by artificial intelligence understandable, predictable and acceptable to 
              humans from both social and ethical perspective.  <br></br><br></br>

              Join us in building a brighter, smarter, and safer future with autonomous 
              systems.
                 <br></br><br></br></p>

            </div></ScrollAnimation>
            <div id="video_wrapper">
              <YoutubeEmbed embedId="gxI3J9OArMY" />
            </div>
        </div>
      </>
    );
  }

  export default Vision;