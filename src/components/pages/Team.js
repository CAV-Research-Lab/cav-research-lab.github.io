import React from 'react';
import '../../App.css';
import './Pages.css';
import Footer from '../Footer';
import ScrollAnimation from 'react-animate-on-scroll';

export default function Team() {
    return (
        <>
            <div class="TeamBody" style={{ backgroundColor: "#333333" }}>

                <br></br><br></br>
                <h1 style={{ color: "white", textAlign: "left", marginLeft: "3%" }}><span class="underline">Meet the team</span></h1>
                <br></br><br></br>
                <div className="info" style={{ margin: "5%", marginTop: "2%" }}>

                    <table>
                        <tr width="33%">
                            <th width="33%">
                            <span class="badge badge-pill badge-danger"><h5>Founder</h5></span>
                            <br></br></th>
                        </tr>
                        <tr>

                            <th width="33%"><img class="circular--square" src={require('../../images/old_images/img-1.jpg')} style={{ width: "200px", height: "200px" }} /></th> {/*style={{ width: "50%", height: "50%" }}*/}
                        </tr>
                        <tr width="33%">
                            <th width="33%">

                            <h3>Saber Fallah</h3>
                            <p class="teamText">Dr. Fallah founded the CAV-Lab for connectivity and automation research in 2015
                                and since then has worked on numerous projects focused on safe automation.
                            </p>
                            <br></br><br></br><br></br><br></br></th></tr>
</table>

<table>
                        <tr>
                            <th width="25%"><span class="badge badge-pill badge-primary"><h5>PhD</h5></span></th>
                            <th width="25%"><span class="badge badge-pill badge-primary"><h5>PhD</h5></span></th>
                            <th width="25%"><span class="badge badge-pill badge-primary"><h5>PhD</h5></span></th>
                            <th width="25%"><span class="badge badge-pill badge-primary"><h5>PhD</h5></span></th>

                        </tr>
                        <tr>
                            <th width="25%"><img class="circular--square" src={require('../../images/old_images/img-1.jpg')} style={{ width: "200px", height: "200px" }} /></th>
                            <th width="25%"><img class="circular--square" src={require('../../images/old_images/img-1.jpg')} style={{ width: "200px", height: "200px" }} /></th>
                            <th width="25%"><img class="circular--square" src={require('../../images/old_images/img-1.jpg')} style={{ width: "200px", height: "200px" }} /></th>
                            <th width="25%"><img class="circular--square" src={require('../../images/old_images/img-1.jpg')} style={{ width: "200px", height: "200px" }} /></th>

                        </tr><tr>


                            <th><br></br><br></br>
                                <h3><b>Luc McCutcheon</b></h3><br></br>
                                <p class="teamText">
                                    Focused on applying state-of-the-art Reinforcement Learning
                                    algorithms to the task of teleoperated control.</p> <br></br>

                            </th>
                            <th><br></br><br></br>
                                <h3><b>Vinal Asodia</b></h3><br></br>
                                <p class="teamText">
                                    Focused on applying state-of-the-art Reinforcement Learning
                                    algorithms to the task of teleoperated control.</p> <br></br>

                            </th>
                            <th><br></br><br></br>
                                <h3><b>Mustafa Yilirim</b></h3><br></br>
                                <p class="teamText">
                                    Focused on applying state-of-the-art Reinforcement Learning
                                    algorithms to the task of teleoperated control.</p> <br></br>

                            </th>
                            <th><br></br><br></br>
                                <h3><b>Maxim Tyshkovsky</b></h3><br></br>
                                <p class="teamText">
                                    Focused on applying state-of-the-art Reinforcement Learning
                                    algorithms to the task of teleoperated control.</p> <br></br>

                            </th>
                        </tr>
                        </table>
{/* -------------------------------------------------------------------------------------------------------------------------------------- */}
                        <br></br><br></br><table>

                        <tr>
                            <th></th>
                            <th><span class="badge badge-pill badge-primary"><h5>PhD</h5></span></th>
                            <th><span class="badge badge-pill badge-primary"><h5>PhD</h5></span></th>
                            <th><span class="badge badge-pill badge-primary"><h5>PhD</h5></span></th>

                        </tr>

                        <tr><th width="0.01%"></th>
                            <th width="25%"><img class="circular--square" src={require('../../images/old_images/img-1.jpg')} style={{ width: "200px", height: "200px" }} /></th>
                            <th width="25%"><img class="circular--square" src={require('../../images/old_images/img-1.jpg')} style={{ width: "200px", height: "200px" }} /></th>
                            <th width="25%"><img class="circular--square" src={require('../../images/old_images/img-1.jpg')} style={{ width: "200px", height: "200px" }} /></th>



                        </tr>
                        <tr><th></th>
                            <th><br></br><br></br>
                                <h3><b>Barkin Dagda</b></h3><br></br>
                                <p class="teamText">
                                    Focused on applying state-of-the-art Reinforcement Learning
                                    algorithms to the task of teleoperated control.</p> <br></br>

                            </th>
                            <th><br></br><br></br>
                                <h3><b>Glen Mason</b></h3><br></br>
                                <p class="teamText">
                                    Focused on applying state-of-the-art Reinforcement Learning
                                    algorithms to the task of teleoperated control.</p> <br></br>

                            </th>
                            <th><br></br><br></br>
                                <h3><b>Iman Sharifi</b></h3><br></br>
                                <p class="teamText">
                                    Focused on applying state-of-the-art Reinforcement Learning
                                    algorithms to the task of teleoperated control.</p> <br></br>

                            </th>
                        </tr>
                    </table>

                    {/* -------------------------------------------------------------------------------------------------------------------------------------- */}
                    <br></br><br></br><br></br><br></br>

                    <table>
                        <th width="20%"></th>
                        <th width="20%"></th>
                        <th width="20%">
                            <span class="badge badge-pill badge-success"><h5>Alumni</h5></span></th>
                        <th width="20%"></th>
                        <th width="20%"></th>

                        <tr></tr><tr>
                            <th><h4>Saber Fallah</h4></th>
                            <th><h4>Luc McCutcheon</h4></th>
                            <th><h4>Vinal Asodia</h4></th>
                            <th><h4>Mustafa Yildrim</h4></th>

                            <tr>
                                <th><h3>Shilp Dixit</h3></th>
                            </tr>

                        </tr>
                        
                    </table>
                </div>

                <br></br><br></br><br></br>
            </div>
        </>
    );
}
