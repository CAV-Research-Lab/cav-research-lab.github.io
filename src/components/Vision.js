import React from 'react';
import '../App.css';
import './Vision.css';
import YoutubeEmbed from "./YoutubeEmbed";
import ScrollAnimation from 'react-animate-on-scroll';

function Vision() {
    const mystyle = {
    color: "white",
    backgroundColor: "black",/*"#1C1B1B",*/
    padding: "5%"};
  
    return (
      <>
      <div style={mystyle} class="grid-container">
      <ScrollAnimation animateIn="fadeIn">
  
            <div id="grid-item">
              <h1><br></br>The Vision of CAV-Lab for Academic Research</h1>
              <br></br><br></br>
              <p style={{textAlign: "center"}}>To co-exist with all road users in a way that society considers
           them trustworthy and safe. With an interdisciplinary team of
            researchers from engineering, social science, and the humanities,
             CAV-Lab aims to develop a novel highly automated driving platform
              for HAVs of CCAM using explainable and human-centric AI solutions to
               provide them greater situational awareness, which is holistic and
                inclusive of human values, to ensure that the wider anticipated
                 benefits of CCAM are realised.<br></br><br></br>
  
                 The report published by the House of Lords (March’17) highlighted
                  that although CAVs have the potential to lower the number of
                   road fatalities, casualties, and traffic congestion, the
                    eradication, or near eradication, of human error and traffic
                     load will only be realised with full automation. Major
                     international automotive industries believe artificial
                     intelligence will be the bridge between current automated
                     vehicles and fully autonomous vehicles.<br></br>
                  However, the question is: <br></br><br></br></p>
  
                  <h2>CAN WE TRUST AI TO DRIVE US?</h2>
            </div></ScrollAnimation>
            <div class="video_wrapper">
              <YoutubeEmbed embedId="3b9qXX7sG50" />
            </div>
        </div>
      </>
    );
  }

  export default Vision;