import React from 'react';
import '../../App.css';
import './Pages.css'
import Posts from "../Publications/Posts";
import {GrDocumentPdf} from 'react-icons/gr'
import { useRef } from 'react';

import Footer from '../Footer';

export default function Publications() {
  const targetRef = useRef(null);

  const scrollToTarget = () => {
    targetRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
    <nav>
    <div style={{textAlign: "center"}}>
    <a href="#target" onClick={scrollToTarget}>2018</a>
    </div>
    </nav>

      <div class="black" style={{ height: "100%", fontSize: "1.3rem" }}>
        <br></br><br></br>
        <div style={{ color: "black", textAlign: "left", marginLeft: "3%" }}>
          <h1><span className="orange_underline">2023</span></h1><br></br>
          <ul style={{ listStyleType: "square" }}>
            <li>Explainable Traffic Sign Detection for Safe Autonomous Driving: an Inductive Logic Programming Approach, under review. <a href="https://www.google.co.uk/"><GrDocumentPdf /> </a> </li>

            <li>A Resilient Traffic Sign Detection Method for Safe Autonomous Driving Using Logic-Based Learning, IEEE/RSJ International Conference on Intelligent Robots and Systems, under review. <a href="https://www.google.co.uk/"><GrDocumentPdf /> </a> </li>
            <li>Adaptive PID Control using Deep Reinforcement Learning for Local-Remote Teleoperation with Stochastic Time Delays, IEEE/RSJ International Conference on Intelligent Robots and Systems, under review. <a href="https://www.google.co.uk/"><GrDocumentPdf /> </a> </li>
            <li>Value Summation: A Novel Scoring Function for MPC-based Model-based Reinforcement Learning, under review. <a href="https://www.google.co.uk/"><GrDocumentPdf /> </a> </li>
          </ul></div>
        <br></br><br></br>


        <div style={{ color: "black", textAlign: "left", marginLeft: "3%" }}>
          <h1><span className='orange_underline'>2022</span></h1><br></br>
          <ul style={{ listStyleType: "square" }}>
            <li> Hybrid fleet capacitated vehicle routing problem with flexible Monte–Carlo Tree search, J. of System Science: Operation & Logistic.  <a href="https://www.google.co.uk/"><GrDocumentPdf /> </a> </li>
            <li>Stability Analysis with LMI Based Distributed H Controller for Vehicle Platooning under Random Multiple Packet Drop, IEEE Tran. on Int. Transportation Systems. <a href="https://www.google.co.uk/"><GrDocumentPdf /> </a> </li>
            <li>Planning for Autonomous Driving via Interaction-Aware Probabilistic Action Policies, IEEE ACCESS. <a href="https://www.google.co.uk/"><GrDocumentPdf /> </a> </li>
            <li>Learning an Interpretable Model for Driver Behavior Prediction with Inductive Biases, IEEE/RSJ International Conference on Intelligent Robots and Systems. <a href="https://www.google.co.uk/"><GrDocumentPdf /> </a> </li>
            <li>Prediction Based Decision Making for Autonomous Highway Driving, IEEE International Conference on Intelligent Transportation Systems (ITSC). <a href="https://www.google.co.uk/"><GrDocumentPdf /> </a> </li>
            <li>Planning for Autonomous Driving via Interaction-Aware Probabilistic Action Policies, IEEE Access. <a href="https://www.google.co.uk/"><GrDocumentPdf /> </a> </li>
            <li>Early Lane Change Prediction for Automated Driving Systems Using Multi-Task Attention-based Convolutional Neural Networks, IEEE Transactions on Intelligent Vehicles. <a href="https://www.google.co.uk/"><GrDocumentPdf /> </a> </li>
            <li>A fault-tolerant and robust controller using model predictive path integral control for free-flying space robots, Frontiers in Robotics and AI. <a href="https://www.google.co.uk/"><GrDocumentPdf /> </a> </li>
            <li>Probabilistic Meta-Conv1D Driving Energy Prediction for Mobile Robots in Unstructured Terrains, IEEE Access. <a href="https://www.google.co.uk/"><GrDocumentPdf /> </a> </li>
            <li>Meta-Conv1D Energy-Aware Path Planner for Mobile Robots in Unstructured Terrains, International Conference on Robotics and Automation Engineering, 2022 <a href="https://www.google.co.uk/"><GrDocumentPdf /> </a> </li>
            <li>Deep Meta-Learning Energy-Aware Path Planner for Unmanned Ground Vehicles in Unknown Terrains, IEEE Access. <a href="https://www.google.co.uk/"><GrDocumentPdf /> </a> </li>


          </ul></div>
        <br></br><br></br>

        <div style={{ color: "black", textAlign: "left", marginLeft: "3%" }}>
          <h1><span className='orange_underline'>2021</span></h1><br></br>
          <ul style={{ listStyleType: "square" }}>
            <li> Distributed H Controller Design and Robustness Analysis for Vehicle Platooning Under Random Packet Drop, IEEE Tran. on Int. Transportation Systems. <a href="https://www.google.co.uk/"><GrDocumentPdf /> </a> </li>
            <li> Self-adaptive Torque Vectoring Controller Using Reinforcement Learning, IEEE International Conference on Intelligent Transportation Systems (ITSC). <a href="https://www.google.co.uk/"><GrDocumentPdf /> </a> </li>
            <li> Adversarial Mixture Density Networks: Learning to Drive Safely from Collision Data, Conference on Intelligent Transportation Systems (ITSC). <a href="https://www.google.co.uk/"><GrDocumentPdf /> </a> </li>
            <li> ARC: Adversarially Robust Control Policies for Autonomous Vehicles, Conference on Intelligent Transportation Systems (ITSC). <a href="https://www.google.co.uk/"><GrDocumentPdf /> </a> </li>
            <li> Self-adaptive Torque Vectoring Controller Using Reinforcement Learning, Conference on Intelligent Transportation Systems (ITSC). <a href="https://www.google.co.uk/"><GrDocumentPdf /> </a> </li>
            <li> Weakly Supervised Reinforcement Learning for Autonomous Highway Driving via Virtual Safety Cages, Journal of Sensors. <a href="https://www.google.co.uk/"><GrDocumentPdf /> </a> </li>
            <li> A Comparative Study of Ego-centric and Cooperative Perception for Lane Change Prediction in Highway Driving Scenarios, ROBOVIS. <a href="https://www.google.co.uk/"><GrDocumentPdf /> </a> </li>
            <li>Autonomous Robots for Space: Trajectory Learning and Adaptation Using Imitation, Frontiers in Robotics and AI. <a href="https://www.google.co.uk/"><GrDocumentPdf /> </a> </li>
            <li>Deep Learning Traversability Estimator for Mobile Robots in Unstructured Environments, TAROS. <a href="https://www.google.co.uk/"><GrDocumentPdf /> </a> </li>
            <li>Task-based AD-Hoc Teamwork with Adversary, TAROS. <a href="https://www.google.co.uk/"><GrDocumentPdf /> </a> </li>
            <li>Multi-Sensor Fault Detection, Identification, Isolation and Health Forecasting for Autonomous Vehicles, Journal of Sensors. <a href="https://www.google.co.uk/"><GrDocumentPdf /> </a> </li>
            <li>A Novel Fault Detection, Identification and Prediction Approach for Autonomous Vehicle Controllers Using SVM, Automotive Innovation. <a href="https://www.google.co.uk/"><GrDocumentPdf /> </a> </li>
          </ul></div>
        <br></br><br></br>

        <div style={{ color: "black", textAlign: "left", marginLeft: "3%" }}>
          <h1><span className='orange_underline'>2020</span></h1><br></br>
          <ul style={{ listStyleType: "square" }}>
            <li> Integral MRAC With Bounded Switching Gain for Vehicle Lateral Tracking, IEEE Tran. on Control System Technology. <a href="https://www.google.co.uk/"><GrDocumentPdf /> </a> </li>
            <li> Cooperative Perception for 3D Object Detection in Driving Scenarios Using Infrastructure Sensors, IEEE Tran. on Int. Transportation Systems. <a href="https://www.google.co.uk/"><GrDocumentPdf /> </a> </li>
            <li> Distributed Controller Design for Vehicle Platooning under Packet Drop Scenario, IEEE International Conference on Intelligent Transportation Systems (ITSC). <a href="https://www.google.co.uk/"><GrDocumentPdf /> </a> </li>
            <li> Training Adversarial Agents to Exploit Weaknesses in Deep Control Policies, IEEE International Conference on Robotics and Automation (ICRA). <a href="https://www.google.co.uk/"><GrDocumentPdf /> </a> </li>
            <li> A Survey of Deep Learning Applications to Autonomous Vehicle Control, IEEE Transactions on Intelligent Transportation Systems. <a href="https://www.google.co.uk/"><GrDocumentPdf /> </a> </li>
            <li> Lane-Change Initiation and Planning Approach for Highly Automated Driving on Freeways, IEEE 92nd Vehicular Technology Conference (VTC2020-Fall). <a href="https://www.google.co.uk/"><GrDocumentPdf /> </a> </li>
            <li> Conv1D Energy-Aware Path Planner for Mobile Robots in Unstructured Environments, International Conference on Robotics and Automation (ICRA). <a href="https://www.google.co.uk/"><GrDocumentPdf /> </a> </li>

          </ul></div>
        <br></br><br></br>

        <div style={{ color: "black", textAlign: "left", marginLeft: "3%" }}>
          <h1><span className='orange_underline'>2019</span></h1><br></br>
          <ul style={{ listStyleType: "square" }}>
            <li> Trajectory Planning for Autonomous High-Speed Overtaking in Structured Environments Using Robust MPC, IEEE Transactions on Intelligent Transportation Systems. <a href="https://www.google.co.uk/"><GrDocumentPdf /> </a> </li>
            <li> Towards connected autonomous driving: review of use-cases, Vehicle system dynamics. <a href="https://www.google.co.uk/"><GrDocumentPdf /> </a> </li>
            <li> Integrated Trajectory Planning and Torque Vectoring for Autonomous Emergency Collision Avoidance, IEEE Intelligent Transportation Systems Conference (ITSC). <a href="https://www.google.co.uk/"><GrDocumentPdf /> </a> </li>
            <li> Adaptive Control and Robust MPC for Linearising Longitudinal Vehicle Dynamics for Platooning Applications, The IAVSD International Symposium on Dynamics of Vehicles on Roads and Tracks. <a href="https://www.google.co.uk/"><GrDocumentPdf /> </a> </li>
            <li> Cooperative Object Classification for Driving Applications, IEEE Intelligent Vehicles Symposium (IV). <a href="https://www.google.co.uk/"><GrDocumentPdf /> </a> </li>
            <li> A Survey on 3D Object Detection Methods for Autonomous Driving Applications, IEEE Transactions on Intelligent Transportation Systems. <a href="https://www.google.co.uk/"><GrDocumentPdf /> </a> </li>
            <li> Safe Deep Neural Network-Driven Autonomous Vehicles Using Software Safety Cages, International Conference on Intelligent Data Engineering and Automated Learning. <a href="https://www.google.co.uk/"><GrDocumentPdf /> </a> </li>
            <li> End-to-end Reinforcement Learning for Autonomous Longitudinal Control Using Advantage Actor-Critic with Temporal Context, IEEE Intelligent Transportation Systems Conference (ITSC). <a href="https://www.google.co.uk/"><GrDocumentPdf /> </a> </li>
            <li> Deep Learning for Autonomous Vehicle Control: Algorithms, State-of-the-Art, and Future Prospects", Morgan & Claypool Publishers. <a href="https://www.google.co.uk/"><GrDocumentPdf /> </a> </li>
            <li> Ground-Based High-DOF AI And Robotics Demonstrator for In-Orbit Space Optical Telescope Assembly, Congress IAC. <a href="https://www.google.co.uk/"><GrDocumentPdf /> </a> </li>

          </ul></div>
        <br></br><br></br>

        <div id="target" ref={targetRef} style={{ color: "black", textAlign: "left", marginLeft: "3%" }}>
          <h1><span className='orange_underline'>2018</span></h1><br></br>
          <ul style={{ listStyleType: "square" }}>
            <li>Trajectory planning and tracking for autonomous overtaking: State-of-the-art and future prospects, Annual Reviews in Control. <a href="https://www.google.co.uk/"><GrDocumentPdf /> </a> </li>
            <li> Cloud-Assisted Distributed Control System Architecture for Platooning, 21st International Conference on Intelligent Transportation Systems (ITSC), 2018 <a href="https://www.google.co.uk/"><GrDocumentPdf /> </a> </li>
            <li> Trajectory Planning for Autonomous High-Speed Overtaking using MPC with Terminal Set Constraints, 21st International Conference on Intelligent Transportation Systems (ITSC). <a href="https://www.google.co.uk/"><GrDocumentPdf /> </a> </li>
            <li> On a Fully Self-Organizing Vehicle Platooning Supported by Cloud Computing, Fifth International Conference on Internet of Things: Systems, Management and Security. <a href="https://www.google.co.uk/"><GrDocumentPdf /> </a> </li>
            <li> On the Experimental Analysis of Integral Sliding Modes for Yaw Rate and Sideslip Control of an Electric Vehicle with Multiple Motors, Journal of Automotive Technology. <a href="https://www.google.co.uk/"><GrDocumentPdf /> </a> </li>
            <li> A gain scheduled robust linear quadratic regulator for vehicle direct yaw moment Control, Journal of Mechatronics. <a href="https://www.google.co.uk/"><GrDocumentPdf /> </a> </li>
            <li> A Survey of the State-of-the-Art Localization Techniques and Their Potentials for Autonomous Vehicle Applications, IEEE Intelligent Transportation Systems <a href="https://www.google.co.uk/"><GrDocumentPdf /> </a> </li>

          </ul></div>
        <br></br><br></br>

        <div style={{ color: "black", textAlign: "left", marginLeft: "3%" }}>
          <h1><span className='orange_underline'>2017</span></h1><br></br>
          <ul style={{ listStyleType: "square" }}>
          <li> Cooperative automation through the cloud: The CARMA project, Proceedings of 12th ITS European Congress. <a href="https://www.google.co.uk/"><GrDocumentPdf /> </a> </li>
          <li> Torque Distribution Strategies for Energy-Efficient Electric Vehicles With Multiple Drivetrains, Journal of Dynamic Systems, Measurement and Control. <a href="https://www.google.co.uk/"><GrDocumentPdf /> </a> </li>
          <li> Energy efficient torque vectoring for electric vehicles with multiple drivetrains, Vehicle Dynamics and Control Seminar. <a href="https://www.google.co.uk/"><GrDocumentPdf /> </a> </li>

          </ul></div>
        <br></br><br></br>

      </div>
      <Footer />
    </>
  );
}
/*
      <div class="PublicationsBody">


        <div class="info">
          <ul>
            <li>
              M. Raisi, A. Noohian, L. Mccutcheon, and S. Fallah,
              “Value Summation: A novel Scoring Function for MPC-based Model-based reinforcement learning”,
              arXiv:2209.08169, 2022.

             <a href="https://www.google.co.uk/"><GrDocumentPdf /> </a> </li><br></br>
            <li>
              M. Yildirim, S. Mozaffari, L. McCutcheon, M. Dianati, and S. Fallah,
              “Prediction based decision making for autonomous highway driving”,
              arXiv:2209.02106, 2022.
             <a href="https://www.google.co.uk/"><GrDocumentPdf /> </a> </li>

          </ul>
          <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        </div>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>

      </div>

*/
