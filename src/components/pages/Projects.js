import React from 'react';
import Posts from "../Projects/Posts";
import '../../App.css';
import './Pages.css';

import Footer from '../Footer';




export default function Projects() {

  return (
    <>
      <div class="black" style={{ height: "100%", fontSize: "1.5rem" }}>
        <br></br><br></br>
        <div class="grid-container">

          <div class="grid-item">
            <div style={{ color: "black", textAlign: "left", marginLeft: "3%" }}>
              <h1><span className="orange_underline">CARMA: Secure Cloud-based Distributed Control Systems for Connected Autonomous Cars</span></h1><br></br>
              <p>
                CARMA research project was initiated in 2016 with initial funding from EPSRC and Jaguar Land Rover.
                The project aims to integrate off-board vehicle information into on-board vehicle control systems using cloud,
                5G communication technologies, AI, and distributed optimal control theories. The goal is to improve vehicle perception and expand the information horizon,
                while addressing issues such as sensor limitations, real-time decision-making, and line of sight. The expected outcome is the development of safer and faster
                autonomous vehicles, which will represent the next generation of autonomous technologies. To achieve this goal, the research team of CAV-Lab designed a novel
                distributed control architecture that combines the power of AI and distributed control systems, with the notion of autonomous systems. We developed a new control
                platform, which enables the cost-effective deployment of autonomous features and ultimately the realisation of connected and fully autonomous cars. Additionally,
                we created a cloud-assisted learning control system, which allows the next generation of autonomous cars to perform challenging manoeuvres, such as overtaking,
                in high-speed and uncertain conditions. We also developed an AI-enabled interactive decision-making system to improve the safe operation of autonomous vehicles
                in highly dynamic and interactive driving scenarios. Overall, this research project seeks to advance the state-of-the-art in autonomous vehicle technology by
                leveraging cloud computing, 5G communication technologies, and cutting-edge AI and distributed optimal control theories. The ultimate goal is to create safer
                and faster autonomous vehicles that can operate in a variety of challenging driving scenarios.
              </p>
              {/* <ul style={{ listStyleType: "square" }}>
              <li>Project 1</li>
              <li>Project 2</li>
              <li>Project 3</li>
            </ul> */}
            </div></div>
          <br></br><br></br>
          <div class="grid-item">
            <p>image 1</p>
          </div>

          <div style={{ color: "black", textAlign: "left", marginLeft: "3%" }}>
            <h1><span className='orange_underline'>Socio-Drive: Cognitive Learning of Scoial Norms for Human-like Autonomous Driving</span></h1><br></br>
            <p>
              Socio-Drive research project was launched in 2017 with initial funding from EPSRC and Jaguar Land Rover. The aim here is to enhance the trust of AI-enabled autonomous
              vehicles by public. In this project, the backbone of our research is Deep Reinforcement Learning (DRL) which combines artificial neural networks with a framework of
              reinforcement learning. DRL offers a comprehensive framework for studying the interplay among learning, representation, and decision making, offering to the sciences
              and researchers a new set of research tools and a wide range of novel research hypotheses. DRL borrows ideas not only from nature but also from our psychology
              making a bridge between technology and humans. However, there is a concern about the trustworthiness and interpretability of DRL and its application to autonomous
              vehicles from society. A precise answer to this concern will require understanding both what responsibility and trust mean for autonomous vehicles and its makers
              and operators, and of how the design and operation of an autonomous vehicle can be undertaken to enable responsibility and trust. I have recently built a core
              research team at the University of Surrey to answer these questions. The team includes colleagues from the Faculty of Arts and Human Sciences who are experts
              in interpreting human values (e.g. legality, ethics and privacy) and phycology as well as the Faculty of Engineering and Physical Sciences who are experts in
              artificial intelligence and robotic systems. The ultimate goal of this project is to enable DRL to learn how to make decisions for autonomous driving as a
              responsible human driver does.
            </p>
            {/* <ul style={{ listStyleType: "square" }}>
            <li>Project 1</li>
            <li>Project 2</li>
            <li>Project 3</li>
          </ul> */}
          </div>
          <br></br><br></br>

          <div class="grid-item">
            <p>image 2</p>
          </div>

          <div style={{ color: "black", textAlign: "left", marginLeft: "3%" }}>
            <h1><span className='orange_underline'>FAIR-Robots: Future AI Research for Robots</span></h1><br></br>
            <p>
              FAIR-Robots project was launched in 2017 when w`e received initial funding from EPSRC and UKRI as part of the larger FAIR-SPACE Hub project. The project is a
              collaboration between leading experts from academia, industry, and governments, with the aim of pushing the boundaries of AI robotics and enabling robots to
              operate safely in hazardous and extreme environments such as space and nuclear plants. During this project, we developed novel control and navigation
              algorithms using state-of-the-art machine learning and AI techniques, to empower the next generation of robots to perform tasks autonomously and safely.
              Our work focused specifically on addressing the challenges of safe and resilient operation of tele-operated robotic systems under random communication
              time-delays, autonomous operation of manipulators in free-gravity conditions, and energy management of robotic systems with limited energy resources for
              remote exploration. The outcome of FAIR-Robots is reliable and robust robotic systems capable of operating effectively in hazardous and extreme environments,
              where human access is restricted.`
            </p>


          </div>
        <br></br><br></br>

        <div class="grid-item">
          <p>image 3</p>
        </div>


          <div style={{ color: "black", textAlign: "left", marginLeft: "3%" }}>
            <h1><span className='orange_underline'>I-Aware: Intelligent Situational Awareness for Safety Enhancement of Autonomous Vehicle</span></h1><br></br>
            <p>
              Situational awareness is crucial for safe autonomous driving as it allows the vehicle to perceive, understand, and respond to the environment and potential hazards
              around it. It involves the continuous monitoring and assessment of the road, traffic, weather, and other factors that may affect the vehicle's operation. With a
              high level of situational awareness, an autonomous vehicle can make informed decisions and adjust its behaviour to ensure the safety of its passengers and other
              road users. Without situational awareness, an autonomous vehicle may not be able to accurately identify and respond to hazards, increasing the risk of accidents
              and injuries. Therefore, it is essential to develop advanced sensor systems and algorithms that enable autonomous vehicles to achieve a high degree of situational
              awareness and operate safely in complex environments.
            </p>
          </div>
          <br></br><br></br>

        <div class="grid-item">
          <p>image 4</p>
        </div>
        </div>
        </div>
      {/* Add some blank vertical space to the bottom of page */}
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br> 

      <Footer />
    </>
  );
}


/*
<div style={{ color: "white", textAlign: "left", marginLeft: "3%" }}>
        <h1><span>CARMA</span></h1>
        <p>A short description detailing what the theme is about </p></div>
          <br></br><br></br>
        <div className="container">
          <Posts filterTheme="CARMA"/>
        </div>


        <div style={{ color: "white", textAlign: "left", marginLeft: "3%" }}>
        <h1><span>SocioDrive</span></h1>
        <p>A short description detailing what the theme is about </p></div>          <br></br><br></br>
          <div className="container">
          <Posts filterTheme="SocioDrive"/>
        </div>

        <div style={{ color: "white", textAlign: "left", marginLeft: "3%" }}>
        <h1><span>FAIR-Robot</span></h1>
        <p>A short description detailing what the theme is about </p></div>          <br></br><br></br>
          <div className="container">
          <Posts filterTheme="FAIR-Robot"/>
        </div>

        <div style={{ color: "white", textAlign: "left", marginLeft: "3%" }}>
        <h1><span>SatCAV</span></h1>
        <p>A short description detailing what the theme is about </p></div>          <br></br><br></br>
          <div className="container">
          <Posts filterTheme="SatCAV"/>
        </div>
*/
