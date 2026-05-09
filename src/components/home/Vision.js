import React from 'react';
import '../../App.css';
import './Vision.css';
import ScrollAnimation from '../shared/ScrollAnimation';

function Vision() {

    return (
      <>
      <div id="vision-grid-container">
        <ScrollAnimation animateIn="fadeIn">
          <div id="vision-content">
            <p className="section-kicker">Research Vision</p>
            <h2>Autonomous systems should be capable, explainable, and worthy of public trust.</h2>
            <p>CAV-Lab envisions a world in which humans and autonomous systems can safely and harmoniously coexist. <br></br><br></br>

            The lab pursues research that makes AI-operated vehicles and robots more understandable, predictable, and acceptable from technical, social, and ethical perspectives. <br></br><br></br>

            Our work combines rigorous engineering, machine learning, simulation, control, and human-centred evaluation to support safer autonomy in real-world environments.
            </p>
          </div>
        </ScrollAnimation>
        </div>
      </>
    );
  }

  export default Vision;
