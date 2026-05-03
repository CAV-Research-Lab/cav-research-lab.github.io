import React from 'react';
import '../App.css';
import './AboutUs.css';
import ScrollAnimation from 'react-animate-on-scroll';


function AboutUs() {
    return (
    <section className="about-us-section">
        <h1 className="section-title"><span className="orange_underline">About Us</span></h1>
        <div className="about-us-container">
            <ScrollAnimation animateIn="fadeIn">
            <div className="about-us-content">
                <h1 className="about-us-titles">Who We Are</h1>
                <br></br>
                <p>CAV-Lab was established in 2016 by Professor Saber Fallah and since 
                    then has received several research funding 
                    from the UK and European governments 
                    (e.g. EPSRC, Innovate UK, H2020, KTP) as 
                    well as industry. <br></br><br></br>
                    
                    The CAV Lab is home to a team of academic scholars, 
                    engineers, and AI experts who are at the forefront 
                    of research on connected and autonomous robotics 
                    and vehicles. Based in the UK, the team collaborates 
                    with national and international companies and academia
                     on projects that advance this field globally. <br></br><br></br><br></br>
                </p>
            </div>
            </ScrollAnimation>
            <div className="splitter"></div>
            <ScrollAnimation animateIn="fadeIn">
            <div className="about-us-content">
                <h1 className="about-us-titles">What We Do</h1>
                <br></br>
                <p>Our team at CAV-Lab is working on creating innovative 
                    and human-centred features for autonomous systems that 
                    incorporate advanced reasoning abilities, utilising the 
                    latest advances in machine learning and artificial 
                    intelligence.  <br></br><br></br>
                    
                    Our research will elevate the intelligence and decision-making 
                    capacity of autonomous systems to a level not feasible with 
                    existing AI solutions, enabling autonomous systems to make 
                    trustworthy, safe and explainable decisions aligned with societal 
                    and human expectations. <br></br>
                </p>
            </div>
            </ScrollAnimation>
            <div className="splitter"></div>
            <ScrollAnimation animateIn="fadeIn">
            <div className="about-us-content">
                <h1 className="about-us-titles">What We Offer</h1>
                <br></br>
                <p>At CAV-Lab, we offer a range of knowledge and expertise in the 
                    field of autonomous robotics and vehicles, including expertise 
                    in safe and trustworthy AI and machine learning, explainable AI 
                    and learning control systems. <br></br><br></br>
                    
                    We specialise in developing concepts, techniques, and models using 
                    AI for situational awareness, prediction, decision-making, and 
                    taking actions in time-sensitive and safety-critical operation 
                    use-cases, as well as detecting and mitigating cyber threats.<br></br>
                </p>
            </div>
            </ScrollAnimation>
        </div>
    </section>        
    );
  }

  export default AboutUs;
