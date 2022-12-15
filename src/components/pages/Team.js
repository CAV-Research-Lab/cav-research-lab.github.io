import React from 'react';
import '../../App.css';
import './Pages.css';
import Footer from '../Footer';

export default function Team() {
    return (
        <>
            <div class="TeamBody">

                <br></br><br></br>
                <h1 className='team'>CAV-Lab Team</h1>
                <br></br><br></br>

                <div className="info" style={{ margin: "5%", marginTop: "2%" }}>
                    <h2>CAV-Lab Staff</h2><br></br>

                    <table>
                        <th width="25%"><img src={require('../../images/old_images/img-1.jpg')} style={{ width: "50%", height: "50%" }} /></th>
                        <th width="25%"><img src={require('../../images/old_images/img-1.jpg')} style={{ width: "50%", height: "50%" }} /></th>
                        <th width="25%"><img src={require('../../images/old_images/img-1.jpg')} style={{ width: "50%", height: "50%" }} /></th>
                        <th width="25%"><img src={require('../../images/old_images/img-1.jpg')} style={{ width: "50%", height: "50%" }} /></th>

                        <tr><th>
                            <h3>Saber Fallah</h3>
                            <p class="info">Dr. Fallah founded the CAV-Lab for connectivity and automation research in 2015
                                and since then has worked
                            </p></th>
                            <th><br></br><br></br>
                                <h3>Luc McCutcheon</h3><br></br>
                                <p>
                                    As second year PhD student, Luc's work has focused on applying state-of-the-art Reinforcement Learning
                                    algorithms to the task of teleoperated control. Luc joined the team directly from a bachalors in computer
                                    science after a summer placement in 2021.</p> <br></br>

                            </th>
                            <th><br></br><br></br>
                                <h3>Vinal Asodia</h3><br></br>
                                <p>
                                    As second year PhD student, Luc's work has focused on applying state-of-the-art Reinforcement Learning
                                    algorithms to the task of teleoperated control. Luc joined the team directly from a bachalors in computer
                                    science after a summer placement in 2021.</p> <br></br>

                            </th>
                            <th><br></br><br></br>
                                <h3>Mustafa Yilirim</h3><br></br>
                                <p>
                                    As second year PhD student, Luc's work has focused on applying state-of-the-art Reinforcement Learning
                                    algorithms to the task of teleoperated control. Luc joined the team directly from a bachalors in computer
                                    science after a summer placement in 2021.</p> <br></br>

                            </th>
                        
                        
                        </tr>
                        </table>

                        {/* 
                        <tr>
                            <th><img src={require('../../images/img-1.jpg')} style={{ width: "50%", height: "60%" }} /></th>

                            <th><br></br><br></br>
                                <h3>Luc McCutcheon</h3>
                                <p>
                                    As second year PhD student, Luc's work has focused on applying state-of-the-art Reinforcement Learning
                                    algorithms to the task of teleoperated control. Luc joined the team directly from a bachalors in computer
                                    science after a summer placement in 2021.</p> <br></br>
                                <h4>Research interests include:</h4>
                                <br></br>

                                <ul>
                                    <li> Reinforcement Learning in telerobotic manipulation under time delay</li>
                                    <li> Offline Reinforcement Learning</li>
                                    <li> Self-Supervised Reinforcement Learning</li>
                                    <li> Safe AI</li>

                                </ul>
                            </th>

                        </tr>
 */}
                        {/* <li>Vinal Asodia</li><br></br>
                        <li>Mustafa Yilirim</li><br></br>
                        <li>Barkin Dagda</li><br></br> */}





                    <h2>CAV-Lab Alumni</h2><br></br>

                    <table>
                        <th width="30%"><img src={require('../../images/old_images/img-1.jpg')} style={{ width: "50%", height: "50%" }} /></th>
                        <th width="30%"><img src={require('../../images/old_images/img-1.jpg')} style={{ width: "50%", height: "50%" }} /></th>

                        <th></th> <th></th> <th></th>
                        <tr><th>
                            <h3>Saber Fallah</h3>
                            <p class="info">Dr. Fallah founded the CAV-Lab for connectivity and automation research in 2015
                                and since then has worked
                            </p></th>
                            <th><br></br><br></br>
                                <h3>Luc McCutcheon</h3><br></br>
                                <p>
                                    As second year PhD student, Luc's work has focused on applying state-of-the-art Reinforcement Learning
                                    algorithms to the task of teleoperated control. Luc joined the team directly from a bachalors in computer
                                    science after a summer placement in 2021.</p> <br></br>

                            </th>
                        </tr>
                        </table>

                </div>
                <br></br><br></br><br></br>
            </div>
            <Footer />
        </>
    );
}
