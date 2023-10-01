import React from 'react';
import Posts from "../Projects/Posts";
import '../../App.css';
import './Pages.css';

import Footer from '../Footer';




export default function Innovations() {

  return (
    <>
      <div class="innovations-body">
        <br></br><br></br>
        <div class="innovations-container">
          <h1><span className="orange_underline">Introducing "Agility" – The Future of Autonomous Robotics at CAV-Lab</span></h1>
          <div class="grid-item">
            <img style={{paddingTop: "4rem", paddingBottom: "1rem", height: "clamp(35rem, 70%, 43rem)", width: "clamp(25rem, 80%, 75rem)"}} class="project-img" src={require('../../images/agility_car.JPG')} />
          </div>

          <div class="grid-item">
            <div style={{ color: "black", textAlign: "justify", marginLeft: "3%" }}>
              <p style={{paddingLeft: "3%", paddingRight: "3%", paddingBottom: "2rem", paddingTop: "1rem"}}>
              At CAV-Lab, we are thrilled to introduce our latest innovation, a mobile robot named "Agility". 
              Developed to stand at the forefront of robotics and artificial intelligence, Agility is engineered 
              to redefine the boundaries of autonomous driving and navigation. 
              </p>

              <h3 style={{textAlign: "left"}}><b>Why Agility?</b></h3>
              <ul>
                <li><b>Seamless Integration:</b> Agility seamlessly integrates state-of-the-art hardware and software, 
                  creating a harmonious synergy that takes robotics to the next level.</li>
              </ul>
              <ul>
                <li><b>Remote Operation:</b> Functioning both remotely and autonomously, this robot is versatile enough 
                to adapt to a multitude of environments and applications.</li>
              </ul>
              <ul>
                <li><b>High-End Components:</b> Equipped with lidar, camera, RTK-GPS, and a high-resolution IMU, Agility
                 is poised to capture detailed, real-world data with unparalleled precision.</li>
              </ul>
              <ul>
                <li><b>Powerful Computing:</b> With its Nvidia Jetson T2Xi computing platform, Agility possesses the
                 computational power to implement intricate algorithms, making it not just a robot but a highly
                  intelligent agent.</li>
              </ul>

              <h3 style={{textAlign: "left"}}><b>Core Features</b></h3>
              <ul>
                <li><b>Advanced Lidar Technology:</b> Provides a 360-degree environmental awareness, crucial for
                 precise navigation and collision avoidance.</li>
              </ul>
              <ul>
                <li><b>High-Resolution Camera:</b> Equipped for detailed visual capture and analysis, supporting
                 intricate image-based tasks and machine learning capabilities.</li>
              </ul>
              <ul>
                <li><b>RTK-GPS:</b> Real-Time Kinematic GPS ensures accurate positional data, even in the most
                 challenging terrains.</li>
              </ul>
              <ul>
                <li><b>IMU (Inertial Measurement Unit):</b> Offers real-time orientation and accelerations,
                 crucial for dynamic manoeuvring and stability.</li>
              </ul>

              <h3 style={{textAlign: "left"}}><b>AI-Ready Platform</b></h3>
              <p>
              Agility is designed to be the ideal testbed for CAV-Lab's cutting-edge AI algorithms. Our
               researchers are ceaselessly working on next-gen solutions for autonomous navigation, and Agility
                offers the perfect platform for real-world trials and implementation.
              </p>

              <h3 style={{textAlign: "left"}}><b>Get Involved</b></h3>
              <p>
              For enquiries and partnership opportunities, please reach out to us. We're always eager to 
              collaborate and push the frontiers of what's possible.
              </p>



            </div>
          </div>

          
        </div>
        </div>
      <Footer />
    </>
  );
}

