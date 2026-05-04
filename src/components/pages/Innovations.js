import React from 'react';
import '../../App.css';
import './Pages.css';
import Footer from '../Footer';
import agilityCar from '../../images/agility_car.JPG';

export default function Innovations() {

  return (
    <>
      <div className="innovations-body">
        <div className="innovations-container">
          <header className="page-hero">
            <p className="page-eyebrow">Innovation Platform</p>
            <h1>Introducing Agility</h1>
            <p>The future of autonomous robotics at CAV-Lab.</p>
          </header>

          <div className="innovation-media">
            <img className="innovation-hero-image" src={agilityCar} alt="Agility autonomous robot" />
          </div>

          <div className="innovation-content">
            <div>
              <p>
              At CAV-Lab, we are thrilled to introduce our latest innovation, a mobile robot named "Agility". 
              Developed to stand at the forefront of robotics and artificial intelligence, Agility is engineered 
              to redefine the boundaries of autonomous driving and navigation. 
              </p>

              <h3><b>Why Agility?</b></h3>
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

              <h3><b>Core Features</b></h3>
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

              <h3><b>AI-Ready Platform</b></h3>
              <p>
              Agility is designed to be the ideal testbed for CAV-Lab's cutting-edge AI algorithms. Our
               researchers are ceaselessly working on next-gen solutions for autonomous navigation, and Agility
                offers the perfect platform for real-world trials and implementation.
              </p>

              <h3><b>Get Involved</b></h3>
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
