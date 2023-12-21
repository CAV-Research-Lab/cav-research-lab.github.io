import React from 'react';
import '../../App.css';
import './Pages.css'
import Posts from "../Publications/Posts";
import { GrDocumentPdf } from 'react-icons/gr'
import { AiOutlineArrowDown,AiOutlineArrowUp } from 'react-icons/ai'

import { useRef } from 'react';
import { scroller, animateScroll as scroll } from 'react-scroll'

import Footer from '../Footer';

export default function Publications() {
  function scrollTo(year) {
    scroller.scrollTo(year, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }

  return (
    <>
      <br></br>
      <nav>
        <div style={{ textAlign: "center", fontSize: "1.5rem", paddingLeft: "2rem", paddingRight: "2rem"}}>
          <p> <a className="black" onClick={() => scrollTo("2023")} >2023</a> - <a className="black" onClick={() => scrollTo("2022")} >2022</a> - <a className="black" onClick={() => scrollTo("2021")} >2021</a> - <a className="black" onClick={() => scrollTo("2022")} >2022</a> - <a className="black" onClick={() => scrollTo("2021")} >2021</a> - <a className="black" onClick={() => scrollTo("2020")} >2020</a> - <a className="black" onClick={() => scrollTo("2019")} >2019</a> - <a className="black" onClick={() => scrollTo("2018")} >2018</a> - <a className="black" onClick={() => scrollTo("2017")} >2017</a></p>
          <p><a onClick={() => scroll.scrollToBottom()}><AiOutlineArrowDown/></a></p>
        </div>
      </nav>

      <div class="publication-body">
        <div className="2023" style={{ color: "black", textAlign: "justify", marginLeft: "3%", marginRight: "10%" }}>
          <br></br><br></br>

          <h1><span className="orange_underline">2023</span></h1><br></br>
          <ul style={{ listStyleType: "square" }}>
            
	    <li>Symbolic Imitation Learning: From Black-Box to Explainable Driving Policies. <a href="https://arxiv.org/pdf/2309.16025.pdf"><GrDocumentPdf /></a></li>
	    <li>Explainable and Trustworthy Traffic Sign Detection for Safe Autonomous Driving: An Inductive Logic Programming Approach. <a href="https://arxiv.org/pdf/2309.03215.pdf"><GrDocumentPdf /></a></li>
	    <li>Towards Safe Autonomous Driving Policies using a Neuro-Symbolic Deep Reinforcement Learning Approach. <a href="https://arxiv.org/pdf/2307.01316.pdf"><GrDocumentPdf /></a></li> 
            <li>A Logic-based Compositional Generalisation Approach for Robust Traffic Sign Detection. <a href="https://openreview.net/pdf?id=jfU2Xv84_O"><GrDocumentPdf /></a></li>
            <li>Adaptive PID Control using Deep Reinforcement Learning for Local-Remote Teleoperation with Stochastic Time Delays. <a href="https://arxiv.org/pdf/2305.16979.pdf"><GrDocumentPdf /></a></li>
            <li>Decision Making for Autonomous Driving in Interactive Merge Scenarios via Learning-based Prediction. <a href="https://arxiv.org/pdf/2303.16821.pdf"><GrDocumentPdf /> </a> </li>
            <li>Value Summation: A Novel Scoring Function for MPC-based Model-based Reinforcement Learning. <a href="https://arxiv.org/pdf/2209.08169.pdf"><GrDocumentPdf /></a></li>
	    <li>Hybrid fleet capacitated vehicle routing problem with flexible Monte–Carlo Tree search. <a href="https://www.tandfonline.com/doi/epdf/10.1080/23302674.2022.2102265?needAccess=true"><GrDocumentPdf /> </a> </li>
	    </ul></div>




        <div className="2022" style={{ color: "black", textAlign: "justify", marginLeft: "3%", marginRight: "10%" }}>
          <br></br><br></br>

          <h1><span className='orange_underline'>2022</span></h1><br></br>
          <ul style={{ listStyleType: "square" }}>
            <li> Hybrid fleet capacitated vehicle routing problem with flexible Monte–Carlo Tree search, J. of System Science: Operation & Logistic.  <a href="https://www.tandfonline.com/doi/epdf/10.1080/23302674.2022.2102265?needAccess=true&role=button"><GrDocumentPdf /> </a> </li>
            <li>Stability Analysis with LMI Based Distributed H Controller for Vehicle Platooning under Random Multiple Packet Drop, IEEE Tran. on Int. Transportation Systems. <a href="https://ieeexplore.ieee.org/abstract/document/9868265"><GrDocumentPdf /> </a> </li>
            <li>Planning for Autonomous Driving via Interaction-Aware Probabilistic Action Policies, IEEE ACCESS. <a href="Planning for Autonomous Driving via Interaction-Aware Probabilistic Action Policies, IEEE ACCESS."><GrDocumentPdf /> </a> </li>
            <li>Learning an Interpretable Model for Driver Behavior Prediction with Inductive Biases, IEEE/RSJ International Conference on Intelligent Robots and Systems. <a href="https://ieeexplore.ieee.org/document/9981142"><GrDocumentPdf /> </a> </li>
            <li>Prediction Based Decision Making for Autonomous Highway Driving, IEEE International Conference on Intelligent Transportation Systems (ITSC). <a href="https://ieeexplore.ieee.org/document/9922398"><GrDocumentPdf /> </a> </li>
            <li>Planning for Autonomous Driving via Interaction-Aware Probabilistic Action Policies, IEEE Access. <a href="https://ieeexplore.ieee.org/document/9837917"><GrDocumentPdf /> </a> </li>
            <li>Early Lane Change Prediction for Automated Driving Systems Using Multi-Task Attention-based Convolutional Neural Networks, IEEE Transactions on Intelligent Vehicles. <a href="https://ieeexplore.ieee.org/abstract/document/9740533"><GrDocumentPdf /> </a> </li>
            <li>A fault-tolerant and robust controller using model predictive path integral control for free-flying space robots, Frontiers in Robotics and AI. <a href="https://www.frontiersin.org/articles/10.3389/frobt.2022.1027918/full"><GrDocumentPdf /> </a> </li>
            <li>Probabilistic Meta-Conv1D Driving Energy Prediction for Mobile Robots in Unstructured Terrains, IEEE Access. <a href="https://ieeexplore.ieee.org/document/9902974"><GrDocumentPdf /> </a> </li>
            <li>Meta-Conv1D Energy-Aware Path Planner for Mobile Robots in Unstructured Terrains, International Conference on Robotics and Automation Engineering, 2022 <a href="https://ieeexplore.ieee.org/document/10056177"><GrDocumentPdf /> </a> </li>
            <li>Deep Meta-Learning Energy-Aware Path Planner for Unmanned Ground Vehicles in Unknown Terrains, IEEE Access. <a href="https://ieeexplore.ieee.org/document/9722866"><GrDocumentPdf /> </a> </li>


          </ul></div>

        <div className="2021" style={{ color: "black", textAlign: "justify", marginLeft: "3%", marginRight: "10%" }}>
          <br></br><br></br>

          <h1><span className='orange_underline'>2021</span></h1><br></br>
          <ul style={{ listStyleType: "square" }}>
            <li> Distributed H Controller Design and Robustness Analysis for Vehicle Platooning Under Random Packet Drop, IEEE Tran. on Int. Transportation Systems. <a href="https://ieeexplore.ieee.org/document/9310690"><GrDocumentPdf /> </a> </li>
            <li> Self-adaptive Torque Vectoring Controller Using Reinforcement Learning, IEEE International Conference on Intelligent Transportation Systems (ITSC). <a href="https://ieeexplore.ieee.org/document/9564494"><GrDocumentPdf /> </a> </li>
            <li> Adversarial Mixture Density Networks: Learning to Drive Safely from Collision Data, Conference on Intelligent Transportation Systems (ITSC). <a href="https://arxiv.org/abs/2107.04485"><GrDocumentPdf /> </a> </li>
            <li> ARC: Adversarially Robust Control Policies for Autonomous Vehicles, Conference on Intelligent Transportation Systems (ITSC). <a href="https://ieeexplore.ieee.org/document/9564579"><GrDocumentPdf /> </a> </li>
            <li> Self-adaptive Torque Vectoring Controller Using Reinforcement Learning, Conference on Intelligent Transportation Systems (ITSC). <a href="https://ieeexplore.ieee.org/document/9564494"><GrDocumentPdf /> </a> </li>
            <li> Weakly Supervised Reinforcement Learning for Autonomous Highway Driving via Virtual Safety Cages, Journal of Sensors. <a href="https://www.mdpi.com/1424-8220/21/6/2032"><GrDocumentPdf /> </a> </li>
            <li> A Comparative Study of Ego-centric and Cooperative Perception for Lane Change Prediction in Highway Driving Scenarios, ROBOVIS. <a href="https://pdfs.semanticscholar.org/e278/ef8885e6e40cbce0990f36e42d7a61c45ada.pdf"><GrDocumentPdf /> </a> </li>
            <li>Autonomous Robots for Space: Trajectory Learning and Adaptation Using Imitation, Frontiers in Robotics and AI. <a href="https://www.frontiersin.org/articles/10.3389/frobt.2021.638849/full"><GrDocumentPdf /> </a> </li>
            <li>Deep Learning Traversability Estimator for Mobile Robots in Unstructured Environments, TAROS. <a href="https://arxiv.org/abs/2105.10937"><GrDocumentPdf /> </a> </li>
            <li>Task-based AD-Hoc Teamwork with Adversary, TAROS. <a href="https://dlnext.acm.org/doi/10.1007/978-3-030-89177-0_8"><GrDocumentPdf /> </a> </li>
            <li>Multi-Sensor Fault Detection, Identification, Isolation and Health Forecasting for Autonomous Vehicles, Journal of Sensors. <a href="https://www.mdpi.com/1424-8220/21/7/2547"><GrDocumentPdf /> </a> </li>
            <li>A Novel Fault Detection, Identification and Prediction Approach for Autonomous Vehicle Controllers Using SVM, Automotive Innovation. <a href="https://link.springer.com/article/10.1007/s42154-021-00138-0"><GrDocumentPdf /> </a> </li>
          </ul></div>

        <div className="2020" style={{ color: "black", textAlign: "justify", marginLeft: "3%", marginRight: "10%" }}>
          <br></br><br></br>

          <h1><span className='orange_underline'>2020</span></h1><br></br>
          <ul style={{ listStyleType: "square" }}>
            <li> Integral MRAC With Bounded Switching Gain for Vehicle Lateral Tracking, IEEE Tran. on Control System Technology. <a href="https://ieeexplore.ieee.org/abstract/document/9210869"><GrDocumentPdf /> </a> </li>
            <li> Cooperative Perception for 3D Object Detection in Driving Scenarios Using Infrastructure Sensors, IEEE Tran. on Int. Transportation Systems. <a href="https://ieeexplore.ieee.org/document/9228884"><GrDocumentPdf /> </a> </li>
            <li> Distributed Controller Design for Vehicle Platooning under Packet Drop Scenario, IEEE International Conference on Intelligent Transportation Systems (ITSC). <a href="https://ieeexplore.ieee.org/document/9294254"><GrDocumentPdf /> </a> </li>
            <li> Training Adversarial Agents to Exploit Weaknesses in Deep Control Policies, IEEE International Conference on Robotics and Automation (ICRA). <a href="https://ieeexplore.ieee.org/document/9197351"><GrDocumentPdf /> </a> </li>
            <li> A Survey of Deep Learning Applications to Autonomous Vehicle Control, IEEE Transactions on Intelligent Transportation Systems. <a href="https://ieeexplore.ieee.org/document/8951131"><GrDocumentPdf /> </a> </li>
            <li> Lane-Change Initiation and Planning Approach for Highly Automated Driving on Freeways, IEEE 92nd Vehicular Technology Conference (VTC2020-Fall). <a href="https://ieeexplore.ieee.org/document/9348630"><GrDocumentPdf /> </a> </li>
            <li> Conv1D Energy-Aware Path Planner for Mobile Robots in Unstructured Environments, International Conference on Robotics and Automation (ICRA). <a href="https://ieeexplore.ieee.org/document/9560771"><GrDocumentPdf /> </a> </li>

          </ul></div>

        <div className="2019" style={{ color: "black", textAlign: "justify", marginLeft: "3%", marginRight: "10%" }}>
          <br></br><br></br>

          <h1><span className='orange_underline'>2019</span></h1><br></br>
          <ul style={{ listStyleType: "square" }}>
            <li> Trajectory Planning for Autonomous High-Speed Overtaking in Structured Environments Using Robust MPC, IEEE Transactions on Intelligent Transportation Systems. <a href="https://ieeexplore.ieee.org/document/8734145"><GrDocumentPdf /> </a> </li>
            <li> Towards connected autonomous driving: review of use-cases, Vehicle system dynamics. <a href="https://www.tandfonline.com/doi/abs/10.1080/00423114.2018.1492142?journalCode=nvsd20"><GrDocumentPdf /> </a> </li>
            <li> Integrated Trajectory Planning and Torque Vectoring for Autonomous Emergency Collision Avoidance, IEEE Intelligent Transportation Systems Conference (ITSC). <a href="https://ieeexplore.ieee.org/document/8917495"><GrDocumentPdf /> </a> </li>
            <li> Adaptive Control and Robust MPC for Linearising Longitudinal Vehicle Dynamics for Platooning Applications, The IAVSD International Symposium on Dynamics of Vehicles on Roads and Tracks. <a href="https://link.springer.com/chapter/10.1007/978-3-030-38077-9_122"><GrDocumentPdf /> </a> </li>
            <li> Cooperative Object Classification for Driving Applications, IEEE Intelligent Vehicles Symposium (IV). <a href="https://ieeexplore.ieee.org/abstract/document/8813811"><GrDocumentPdf /> </a> </li>
            <li> A Survey on 3D Object Detection Methods for Autonomous Driving Applications, IEEE Transactions on Intelligent Transportation Systems. <a href="https://ieeexplore.ieee.org/document/8621614"><GrDocumentPdf /> </a> </li>
            <li> Safe Deep Neural Network-Driven Autonomous Vehicles Using Software Safety Cages, International Conference on Intelligent Data Engineering and Automated Learning. <a href="https://link.springer.com/chapter/10.1007/978-3-030-33617-2_17"><GrDocumentPdf /> </a> </li>
            <li> End-to-end Reinforcement Learning for Autonomous Longitudinal Control Using Advantage Actor-Critic with Temporal Context, IEEE Intelligent Transportation Systems Conference (ITSC). <a href="https://ieeexplore.ieee.org/document/8917387"><GrDocumentPdf /> </a> </li>
            <li> Deep Learning for Autonomous Vehicle Control: Algorithms, State-of-the-Art, and Future Prospects", Morgan & Claypool Publishers. <a href="https://link.springer.com/book/10.1007/978-3-031-01502-1"><GrDocumentPdf /> </a> </li>
            <li> Ground-Based High-DOF AI And Robotics Demonstrator for In-Orbit Space Optical Telescope Assembly, Congress IAC. <a href="https://openresearch.surrey.ac.uk/esploro/outputs/conferencePresentation/Ground-Based-High-DOF-AI-And-Robotics-Demonstrator/99514606202346"><GrDocumentPdf /> </a> </li>

          </ul></div>

        <div className='2018' style={{ color: "black", textAlign: "justify", marginLeft: "3%", marginRight: "10%" }}>
          <br></br><br></br>

          <h1><span className='orange_underline'>2018</span></h1><br></br>
          <ul style={{ listStyleType: "square" }}>
            <li>Trajectory planning and tracking for autonomous overtaking: State-of-the-art and future prospects, Annual Reviews in Control. <a href="https://www.sciencedirect.com/science/article/abs/pii/S136757881730130X/"><GrDocumentPdf /> </a> </li>
            <li> Cloud-Assisted Distributed Control System Architecture for Platooning, 21st International Conference on Intelligent Transportation Systems (ITSC), 2018 <a href="https://ieeexplore.ieee.org/document/8569295"><GrDocumentPdf /> </a> </li>
            <li> Trajectory Planning for Autonomous High-Speed Overtaking using MPC with Terminal Set Constraints, 21st International Conference on Intelligent Transportation Systems (ITSC). <a href="https://ieeexplore.ieee.org/abstract/document/8569529"><GrDocumentPdf /> </a> </li>
            <li> On a Fully Self-Organizing Vehicle Platooning Supported by Cloud Computing, Fifth International Conference on Internet of Things: Systems, Management and Security. <a href="https://ieeexplore.ieee.org/document/8554517"><GrDocumentPdf /> </a> </li>
            <li> On the Experimental Analysis of Integral Sliding Modes for Yaw Rate and Sideslip Control of an Electric Vehicle with Multiple Motors, Journal of Automotive Technology. <a href="https://link.springer.com/article/10.1007/s12239-018-0078-0"><GrDocumentPdf /> </a> </li>
            <li> A gain scheduled robust linear quadratic regulator for vehicle direct yaw moment Control, Journal of Mechatronics. <a href="https://www.sciencedirect.com/science/article/pii/S0957415818300138"><GrDocumentPdf /> </a> </li>
            <li> A Survey of the State-of-the-Art Localization Techniques and Their Potentials for Autonomous Vehicle Applications, IEEE Intelligent Transportation Systems <a href="https://ieeexplore.ieee.org/document/8306879"><GrDocumentPdf /> </a> </li>

          </ul></div>

        <div className="2017" style={{ color: "black", textAlign: "justify", marginLeft: "3%", marginRight: "10%" }}>
        <br></br><br></br>

          <h1><span className='orange_underline'>2017</span></h1><br></br>
          <ul style={{ listStyleType: "square" }}>
            <li> Torque Distribution Strategies for Energy-Efficient Electric Vehicles With Multiple Drivetrains, Journal of Dynamic Systems, Measurement and Control. <a href="https://asmedigitalcollection.asme.org/dynamicsystems/article-abstract/139/12/121004/474436/Torque-Distribution-Strategies-for-Energy?redirectedFrom=fulltext"><GrDocumentPdf /> </a> </li>
            <li> Energy efficient torque vectoring for electric vehicles with multiple drivetrains, Vehicle Dynamics and Control Seminar. <a href="https://openresearch.surrey.ac.uk/esploro/outputs/conferencePresentation/Energy-efficient-torque-vectoring-for-electric-vehicles-with-multiple-drivetrains/99512466502346"><GrDocumentPdf /> </a> </li>

          </ul></div>
        <br></br><br></br>

      </div>
      <div style={{ textAlign: "center", fontSize: "1.5rem" }}>
          <p> <a className="black" onClick={() => scrollTo("2023")} >2023</a> - <a className="black" onClick={() => scrollTo("2022")} >2022</a> - <a className="black" onClick={() => scrollTo("2021")} >2021</a> - <a className="black" onClick={() => scrollTo("2022")} >2022</a> - <a className="black" onClick={() => scrollTo("2021")} >2021</a> - <a className="black" onClick={() => scrollTo("2020")} >2020</a> - <a className="black" onClick={() => scrollTo("2019")} >2019</a> - <a className="black" onClick={() => scrollTo("2018")} >2018</a> - <a className="black" onClick={() => scrollTo("2017")} >2017</a></p>
          <p><a onClick={() => scroll.scrollToTop()}><AiOutlineArrowUp/></a></p>

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
