import React from 'react';
import '../App.css';
import './Vision.css';
import YoutubeEmbed from "./YoutubeEmbed";
import ScrollAnimation from 'react-animate-on-scroll';

function Vision() {
    const mystyle = {
    color: "white",
    backgroundColor: "#333333",/*"#1C1B1B",*/
    padding: "5%"};
  
    return (
      <>
      <div style={mystyle} id="vision-grid-container">
      <ScrollAnimation animateIn="fadeIn">
  
            <div id="grid-item">
              <p style={{textAlign: "center"}}>CAV-Lab envisions a world in which 
              humans and autonomous systems are capable of safely and harmoniously 
              co-existing together. <br></br><br></br>

              CAV-Lab pursue research that makes self-driving cars and robots operated 
              by artificial intelligence understandable, predictable and acceptable to 
              humans from both social and ethical perspective.  <br></br><br></br>

              Join us in building a brighter, smarter, and safer future with autonomous 
              systems.
                 <br></br><br></br></p>

            </div></ScrollAnimation>
            <div class="video_wrapper">
              <YoutubeEmbed embedId="3b9qXX7sG50" />
            </div>
        </div>
      </>
    );
  }

  export default Vision;