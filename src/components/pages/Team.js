import React from 'react';
import '../../App.css';
import './Pages.css';
import Footer from '../Footer';
import ScrollAnimation from 'react-animate-on-scroll';

export default function Team() {
    return (
        <>
            <div class="team-body">
                <div class="founder-card">
                    {/* <h2 id="team-title"><span>Meet the Team</span></h2> <br></br> */}
                    <img class="circular--square" src={require('../../images/saber_fallah.jpeg')}/>
                    <h3 className='team-name'>Saber Fallah</h3>
                    <p class="teamText">The director of CAV-Lab and associate professor in
                        safe AI and autonomy.
                    </p>
                </div>
                <div className='phd-first-row'>
                    <div className='team-card'>
                        <img class="circular--square" src={require('../../images/luc_mccutcheon.jpg')}/>
                        <h3 className='team-name'>Luc <br/>McCutcheon</h3>
                        <p class="teamText">
                            Focused on applying state-of-the-art Reinforcement Learning
                            algorithms to the task of teleoperated control.
                        </p>
                    </div>
                    <div className='team-card'>
                        <img class="circular--square" src={require('../../images/old_images/img-1.jpg')}/>
                        <h3 className='team-name'>Vinal <br/>Asodia</h3>
                        <p class="teamText">
                            End-to-End Decision Making for Emergency Braking using 
                            Deep Reinforcement Learning.
                        </p>
                    </div>
                    <div className='team-card'>
                        <img class="circular--square" src={require('../../images/mustafa_yildirim.png')}/>
                        <h3 className='team-name'>Mustafa <br/>Yilirim</h3>
                        <p class="teamText">
                            Intelligent Decision-Making Method for Autonomous Driving Using 
                            Reinforcement Learning.
                        </p>
                    </div>
                    <div className='team-card'>
                        <img class="circular--square" src={require('../../images/old_images/img-1.jpg')}/>
                        <h3 className='team-name'>Maxim <br/>Tyshkovsky</h3>
                        <p class="teamText">
                            Focused on applying state-of-the-art Reinforcement  
                            algorithms to the task of teleoperated control.
                        </p>
                    </div>
                </div>
                <div className='phd-second-row'>
                    <div className='team-card'>
                        <img class="circular--square" src={require('../../images/barkin_dagda.png')}/>
                        <h3 className='team-name'>Barkin <br/>Dagda</h3>
                        <p class="teamText">
                            Self-Supervised Vision Based Localization of Autonomous 
                            Vehicles using Satellite Imagery.
                        </p>
                    </div>
                    <div className='team-card'>
                        <img class="circular--square" src={require('../../images/glen_mason.jpg')}/>
                        <h3 className='team-name'>Glen <br/>Mason</h3>
                        <p class="teamText">
                            Analysis of Cooperative Adaptive Cruise 
                            Control Controller in Connected and Automated Vehicles under 
                            Communication Disruption.
                        </p>
                    </div>
                    <div className='team-card'>
                        <img class="circular--square" src={require('../../images/old_images/img-1.jpg')}/>
                        <h3 className='team-name'>Iman <br/>Sharifi</h3>
                        <p class="teamText">
                            Focused on applying state-of-the-art Reinforcement Learning
                            algorithms to the task of teleoperated control.
                        </p>
                    </div>
                    <div className='team-card'>
                        <img class="circular--square" src={require('../../images/old_images/img-1.jpg')}/>
                        <h3 className='team-name'>Erfan <br/>Aminhatamy</h3>
                        <p class="teamText">
                            Learning-based Robust Model Predictive Control using 
                            Safe Reinforcement Learning.
                        </p>
                    </div>
                </div>
                <div className='alumni'>
                    <h2 id='alumni-title'>Alumni</h2>
                    <h4>Post Doctoral Research Fellows:</h4>
                    <ul className='alumni-list'>
                        <li>Dr Ashith Rajendra, Model-based reinforcement 
                            learning control of multi-link space robot,</li>
                        <li>Dr Saeid Safavi, Predictive fault detection 
                            for autonomous vehicles,</li>
                        <li>Dr Elnaz Shafipour, Multi-agent ad-hoc task 
                            allocation,</li>
                        <li>Dr Fatina Basmadji, Satellite collision risk 
                            prediction,</li>
                        <li>Dr Zeeshan Barbar, Multi-objective task 
                            optimization for autonomous vehicles,</li>
                        <li>Dr Kaushik Halder, Distributed H∞ Controller 
                            for Vehicle Platooning under Random Multiple 
                            Packet Drop,</li>
                        <li>Dr Umberto Montanaro, Cloud-aided distributed 
                            control systems for connected autonomous cars</li>
                    </ul>
                    <h4>PhD Researchers:</h4>
                    <ul className='alumni-list'>
                        <li>Zahra Chaghazardi, “Resilient Traffic Sign Detection Method 
                            for Safe Autonomous Driving Using Logic-Based Learning”, 
                            Jan 2022-present,</li>
                        <li>Thomas Babier, “State estimation for non-cooperative space robots 
                            used for active debris removal”, Jan. 2019-June 2022,</li>
                        <li>Marco Visca, “Vision-based Reinforcement Learning Control of Autonomous 
                            Vehicles”, Oct. 2018-Dec. 2022,</li>
                        <li>Eduardo Arnold, “Cooperative Visual Percetion at the Edge of Cloud”, 
                            Nov. 2017- Dec. 2021,</li>
                        <li>Sampo Kuutti, “Autonomous Vehicle Motion Control using Deep Learning”, 
                            Oct. 2017- April 2021,</li>
                        <li>Shayan Taherian, “Intelligent Automated Braking System for Heavy Duty 
                            Vehicles”, May 2017-Nov. 2020,</li>
                        <li>Shilp Dixit, “Fault-tolerant Cooperative Cruise Control with Autonomous 
                            Overtaking”, Oct. 2016 - Nov. 2019,</li>
                        <li>Young Wang, “Optimal Torque-vectoring Control Design for In-wheel Electric 
                            Vehicles”, Jan. 2015-Feb. 2019,</li>
                        <li>Johan Theunissen, “Development of active vehicle suspension systems using 
                            driver’s emotional metrics”, March 2015-Feb. 2019.</li>
                    </ul>
                    <h4>Research Associates:</h4>
                    <ul className='alumni-list'>
                        <li>Mehran Raeisi, “Robust Controller using Model Predictive Path Integral 
                            Control”, 2021 - 2023</li>
                        <li>Amirhossein Nohian, “Effective MPC-Based Reinforcement Learning Systems 
                            for Robotics”, 2021-2023</li>
                        <li>Hossein Hamid, “Autonomous Decision Support for Space System Monitoring”, 
                            2019-2020</li>
                        <li>Tatiana Farcas, “Autonomous Decision Support for Space System Monitoring”, 
                            2019 - 2020</li>
                    </ul>
                </div>
            </div>
        </>
    );
}
