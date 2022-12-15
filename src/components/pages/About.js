import React from 'react';
import '../../App.css';
import './Pages.css';
import Footer from '../Footer';

export default function About() {
  return ( 
<>
<div class="AboutUsBody">

  <br></br><br></br>
  <h1 className='aboutus'>ABOUT US</h1>
  <br></br><br></br>

  <div className="info">
  <h3>Safe and Trustworthy AI for Autonomous Driving</h3><br></br>
  <ul>
    <li>
    The <b>vision</b> of CAV-Lab is to enable Highly Automated Vehicles (HAVs) to co-exist with all road users in a way
      that society considers them <i>trustworthy</i> and <i>safe</i>
    </li>
    <br></br>

    <li>
    CAV-Lab aims to develop a novel <b> hightly automated driving platform </b>
    for HAV's of Connected Cooperative and Automated Mobility (CCAM) using <b>explainable</b> and <b>human-centric AI </b>
    solutions to provide them greater situational awareness, which is hollistic and
    inclusive of human values, to ensure that the wider anticipated benefits of CCAM 
    are realised.
    </li>
    <br></br>

    <li>
    To achieve its vision and aims, CAV-Lab seeks to analyse the human and societal 
    values that underpin responsible human driving and to analyse the capabilities,
    limitations and potential conflicts of AI based systems for CCAM.
    </li>
    <br></br>
    
    <li>
    CAV-Lab defines several objectives touching the targeted AI technology
    based on CCAM solutions that will evolve from reactive and/or adaptive 
    system support into system state awareness, environmental perception and
      decision-making with equal importance together focusing on standardisation
      activities.  
    </li>
  </ul>
  <br></br>


  <h3>Experience</h3><br></br>
  <ul>
    <li>
    CAV-Lab is a leading research lab in the UK that provides unique AI solutions 
    for CCAM, especially HAVs.
    </li>
    <br></br>

    <li>
    CAV-Lab was established in 2016 and since then has recieved research funding (~£3.5M)
    from the UK and European governments (e.g. EPSRC, Innovate UK, H2020, KTP) in collaberation
    with major companies as well as universities active in CCAM industry.
    </li>
    <br></br>

    <li>
    CAV-Lab has already developed 4 patented algorithms that enable safety and performance 
    management of automated vehicles in previous projects.
    </li>
  </ul>
  <br></br>


  <h3>Organisational Capabilities</h3><br></br>
  CAV-Lab provides knowledge and expertise in the areas of:
  <ul>
    <li>
    Safe and Trustworthu AI and Machine Learning
    </li>
    <br></br>

    <li>
    Explainable AI and Learning Control Systems for Decision-making
    </li>
    <br></br>

    <li>
    End-to-end Vision-based Learning systems for ADAS
    </li>
    <br></br>

    <li>
    Verification and Validation of AI- and ML-based HAV Functionalities
  </li>
  </ul>
  <br></br>
  <p>
  CAV-Lab provides a unique labatory to design and develop AI-enabled HAV 
  functionalities used for highly automated transportation systems and CCAM.
  </p>
  <br></br>

  <h3>Administrative Information</h3><br></br>
  <p>CAV-Lab is interested in leading or contributing to proposals related to safe and 
  trustworthy CCAM or verification and validation of HAV functionalities</p> 
  <h6><b>Contact Details:</b></h6>
  <p>Dr Saber Fallah,</p>
  <a href="mailto:s.fallah@surrey.ac.uk">s.fallah@surrey.ac.uk</a>
  <p>Office: 01483686528</p>
  <p>Mobile: 07460536501</p>
  
  </div>
  <br></br><br></br><br></br>
</div>
<Footer/>
</>
);
}
