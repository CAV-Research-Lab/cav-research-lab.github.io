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
                    <h2 id="team-title"><span>Meet the Team</span></h2> <br></br>
                    <img class="circular--square" src={require('../../images/saber_fallah.jpeg')}/>
                    <h3 className='team-name'>Saber Fallah</h3>
                    <p class="teamText">The director of CAV-Lab and associate professor in
                        safe AI and autonomy.
                    </p>
                </div>
                <div className='phd-first-row'>
                    <div className='team-card'>
                        <img class="circular--square" src={require('../../images/old_images/img-1.jpg')}/>
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
                            Ensuring Safe Platooning: An Analysis of Cooperative Adaptive Cruise 
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
                </div>
                <div className='alumni'>
                    <h2 id='alumni-title'>Alumni</h2>
                    <h4>Post Doctoral Research Fellows:</h4>
                    <ul>
                        <li>Post Doc 1 - Thesis Title)</li>
                        <li>Post Doc 2 - Thesis Title)</li>
                        <li>Post Doc 3 - Thesis Title)</li>
                    </ul>
                    <h4>PhD Researchers:</h4>
                    <ul>
                        <li>PhD Researcher 1 - Thesis Title)</li>
                        <li>PhD Researcher 2 - Thesis Title)</li>
                        <li>Phd Researcher 3 - Thesis Title)</li>
                    </ul>
                    <h4>Visiting Scholars:</h4>
                    <ul>
                        <li>Scholar 1 - Work Summary)</li>
                        <li>Schoalr 2 - Work Summary)</li>
                        <li>Scholar 3 - Work Summary)</li>
                    </ul>
                </div>
            </div>
        </>
    );
}
