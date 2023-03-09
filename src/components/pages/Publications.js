import React from 'react';
import '../../App.css';
import './Pages.css'
import Posts from "../Publications/Posts";

import Footer from '../Footer';

export default function Publications() {
  return (
    <>
      <div class="black" style={{ height: "100%", fontSize: "1.5rem" }}>
        <br></br><br></br>
        <div style={{ color: "black", textAlign: "left", marginLeft: "3%" }}>
          <h1><span className="orange_underline">2023</span></h1><br></br>
          <ul style={{ listStyleType: "square" }}>
            <li>Explainable Traffic Sign Detection for Safe Autonomous Driving: an Inductive Logic Programming Approach, under review.</li>

            <li>A Resilient Traffic Sign Detection Method for Safe Autonomous Driving Using Logic-Based Learning, IEEE/RSJ International Conference on Intelligent Robots and Systems, under review.</li>
            <li>Adaptive PID Control using Deep Reinforcement Learning for Local-Remote Teleoperation with Stochastic Time Delays, IEEE/RSJ International Conference on Intelligent Robots and Systems, under review.</li>
            <li>Value Summation: A Novel Scoring Function for MPC-based Model-based Reinforcement Learning, under review.</li>
          </ul></div>
        <br></br><br></br>


        <div style={{ color: "black", textAlign: "left", marginLeft: "3%" }}>
          <h1><span className='orange_underline'>2022</span></h1><br></br>
          <ul style={{ listStyleType: "square" }}>
            <li>Hybrid fleet capacitated vehicle routing problem with flexible Monte–Carlo Tree search, J. of System Science: Operation & Logistic.</li>
            <li>Stability Analysis with LMI Based Distributed H Controller for Vehicle Platooning under Random Multiple Packet Drop, IEEE Tran. on Int. Transportation Systems.</li>
            <li>Planning for Autonomous Driving via Interaction-Aware Probabilistic Action Policies, IEEE ACCESS.</li>
            <li>Learning an Interpretable Model for Driver Behavior Prediction with Inductive Biases, IEEE/RSJ International Conference on Intelligent Robots and Systems.</li>
            <li>Prediction Based Decision Making for Autonomous Highway Driving, IEEE International Conference on Intelligent Transportation Systems (ITSC).</li>
            <li>Planning for Autonomous Driving via Interaction-Aware Probabilistic Action Policies, IEEE Access.</li>
            <li>Early Lane Change Prediction for Automated Driving Systems Using Multi-Task Attention-based Convolutional Neural Networks, IEEE Transactions on Intelligent Vehicles.</li>
            <li>A fault-tolerant and robust controller using model predictive path integral control for free-flying space robots, Frontiers in Robotics and AI.</li>
            <li>Probabilistic Meta-Conv1D Driving Energy Prediction for Mobile Robots in Unstructured Terrains, IEEE Access.</li>
            <li>Meta-Conv1D Energy-Aware Path Planner for Mobile Robots in Unstructured Terrains, International Conference on Robotics and Automation Engineering, 2022</li>
            <li>Deep Meta-Learning Energy-Aware Path Planner for Unmanned Ground Vehicles in Unknown Terrains, IEEE Access.</li>


          </ul></div>
        <br></br><br></br>

        <div style={{ color: "black", textAlign: "left", marginLeft: "3%" }}>
          <h1><span className='orange_underline'>2021</span></h1><br></br>
          <ul style={{ listStyleType: "square" }}>
            <li> Distributed H Controller Design and Robustness Analysis for Vehicle Platooning Under Random Packet Drop, IEEE Tran. on Int. Transportation Systems.</li>
            <li> Self-adaptive Torque Vectoring Controller Using Reinforcement Learning, IEEE International Conference on Intelligent Transportation Systems (ITSC).</li>
            <li> Adversarial Mixture Density Networks: Learning to Drive Safely from Collision Data, Conference on Intelligent Transportation Systems (ITSC).</li>
            <li> ARC: Adversarially Robust Control Policies for Autonomous Vehicles, Conference on Intelligent Transportation Systems (ITSC).</li>
            <li> Self-adaptive Torque Vectoring Controller Using Reinforcement Learning, Conference on Intelligent Transportation Systems (ITSC).</li>
            <li> Weakly Supervised Reinforcement Learning for Autonomous Highway Driving via Virtual Safety Cages, Journal of Sensors.</li>
            <li> A Comparative Study of Ego-centric and Cooperative Perception for Lane Change Prediction in Highway Driving Scenarios, ROBOVIS.</li>
            <li>Autonomous Robots for Space: Trajectory Learning and Adaptation Using Imitation, Frontiers in Robotics and AI.</li>
            <li>Deep Learning Traversability Estimator for Mobile Robots in Unstructured Environments, TAROS.</li>
            <li>Task-based AD-Hoc Teamwork with Adversary, TAROS.</li>
            <li>Multi-Sensor Fault Detection, Identification, Isolation and Health Forecasting for Autonomous Vehicles, Journal of Sensors.</li>
            <li>A Novel Fault Detection, Identification and Prediction Approach for Autonomous Vehicle Controllers Using SVM, Automotive Innovation.</li>
          </ul></div>
        <br></br><br></br>

        <div style={{ color: "black", textAlign: "left", marginLeft: "3%" }}>
          <h1><span className='orange_underline'>2020</span></h1><br></br>
          <ul style={{ listStyleType: "square" }}>
            <li> Integral MRAC With Bounded Switching Gain for Vehicle Lateral Tracking, IEEE Tran. on Control System Technology.</li>
            <li> Cooperative Perception for 3D Object Detection in Driving Scenarios Using Infrastructure Sensors, IEEE Tran. on Int. Transportation Systems.</li>
            <li> Distributed Controller Design for Vehicle Platooning under Packet Drop Scenario, IEEE International Conference on Intelligent Transportation Systems (ITSC).</li>
            <li> Training Adversarial Agents to Exploit Weaknesses in Deep Control Policies, IEEE International Conference on Robotics and Automation (ICRA).</li>
            <li> A Survey of Deep Learning Applications to Autonomous Vehicle Control, IEEE Transactions on Intelligent Transportation Systems.</li>
            <li> Lane-Change Initiation and Planning Approach for Highly Automated Driving on Freeways, IEEE 92nd Vehicular Technology Conference (VTC2020-Fall).</li>
            <li> Conv1D Energy-Aware Path Planner for Mobile Robots in Unstructured Environments, International Conference on Robotics and Automation (ICRA).</li>

          </ul></div>
        <br></br><br></br>

        <div style={{ color: "black", textAlign: "left", marginLeft: "3%" }}>
          <h1><span className='orange_underline'>2019</span></h1><br></br>
          <ul style={{ listStyleType: "square" }}>
            <li> Trajectory Planning for Autonomous High-Speed Overtaking in Structured Environments Using Robust MPC, IEEE Transactions on Intelligent Transportation Systems.</li>
            <li> Towards connected autonomous driving: review of use-cases, Vehicle system dynamics.</li>
            <li> Integrated Trajectory Planning and Torque Vectoring for Autonomous Emergency Collision Avoidance, IEEE Intelligent Transportation Systems Conference (ITSC).</li>
            <li> Adaptive Control and Robust MPC for Linearising Longitudinal Vehicle Dynamics for Platooning Applications, The IAVSD International Symposium on Dynamics of Vehicles on Roads and Tracks.</li>
            <li> Cooperative Object Classification for Driving Applications, IEEE Intelligent Vehicles Symposium (IV).</li>
            <li> A Survey on 3D Object Detection Methods for Autonomous Driving Applications, IEEE Transactions on Intelligent Transportation Systems.</li>
            <li> Safe Deep Neural Network-Driven Autonomous Vehicles Using Software Safety Cages, International Conference on Intelligent Data Engineering and Automated Learning.</li>
            <li> End-to-end Reinforcement Learning for Autonomous Longitudinal Control Using Advantage Actor-Critic with Temporal Context, IEEE Intelligent Transportation Systems Conference (ITSC).</li>
            <li> Deep Learning for Autonomous Vehicle Control: Algorithms, State-of-the-Art, and Future Prospects", Morgan & Claypool Publishers.</li>
            <li> Ground-Based High-DOF AI And Robotics Demonstrator for In-Orbit Space Optical Telescope Assembly, Congress IAC.</li>

          </ul></div>
        <br></br><br></br>

        <div style={{ color: "black", textAlign: "left", marginLeft: "3%" }}>
          <h1><span className='orange_underline'>2018</span></h1><br></br>
          <ul style={{ listStyleType: "square" }}>
            <li>Trajectory planning and tracking for autonomous overtaking: State-of-the-art and future prospects, Annual Reviews in Control.</li>
            <li> Cloud-Assisted Distributed Control System Architecture for Platooning, 21st International Conference on Intelligent Transportation Systems (ITSC), 2018</li>
            <li> Trajectory Planning for Autonomous High-Speed Overtaking using MPC with Terminal Set Constraints, 21st International Conference on Intelligent Transportation Systems (ITSC).</li>
            <li> On a Fully Self-Organizing Vehicle Platooning Supported by Cloud Computing, Fifth International Conference on Internet of Things: Systems, Management and Security.</li>
            <li> On the Experimental Analysis of Integral Sliding Modes for Yaw Rate and Sideslip Control of an Electric Vehicle with Multiple Motors, Journal of Automotive Technology.</li>
            <li> A gain scheduled robust linear quadratic regulator for vehicle direct yaw moment Control, Journal of Mechatronics.</li>
            <li> A Survey of the State-of-the-Art Localization Techniques and Their Potentials for Autonomous Vehicle Applications, IEEE Intelligent Transportation Systems</li>

          </ul></div>
        <br></br><br></br>

        <div style={{ color: "black", textAlign: "left", marginLeft: "3%" }}>
          <h1><span className='orange_underline'>2017</span></h1><br></br>
          <ul style={{ listStyleType: "square" }}>
          <li> Cooperative automation through the cloud: The CARMA project, Proceedings of 12th ITS European Congress.</li>
          <li> Torque Distribution Strategies for Energy-Efficient Electric Vehicles With Multiple Drivetrains, Journal of Dynamic Systems, Measurement and Control.</li>
          <li> Energy efficient torque vectoring for electric vehicles with multiple drivetrains, Vehicle Dynamics and Control Seminar.</li>

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

            </li><br></br>
            <li>
              M. Yildirim, S. Mozaffari, L. McCutcheon, M. Dianati, and S. Fallah,
              “Prediction based decision making for autonomous highway driving”,
              arXiv:2209.02106, 2022.
            </li>

          </ul>
          <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        </div>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>

      </div>

*/
