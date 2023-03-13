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
              <iframe className="vision-video"
              src={`https://www.youtube.com/embed/gxI3J9OArMY`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"/>
            </div>
        </div>
      </>
    );
  }

  export default Vision;