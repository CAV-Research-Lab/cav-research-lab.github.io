import React from 'react';
import '../../App.css';
import './AboutUs.css';
import ScrollAnimation from '../shared/ScrollAnimation';

const aboutCards = [
    {
        title: 'Who We Are',
        body: [
            'CAV-Lab was established in 2016 by Professor Saber Fallah and has received research funding from UK and European government programmes, including EPSRC, Innovate UK, H2020, and KTP, as well as industry partners.',
            'The lab brings together academic researchers, engineers, and AI specialists working at the forefront of connected and autonomous robotics and vehicles. Based in the UK, the team collaborates with national and international companies and universities on projects with global impact.',
            'Its research culture combines rigorous engineering, AI innovation, and close engagement with real-world mobility challenges to support safer, more capable autonomous systems.',
        ],
    },
    {
        title: 'What We Do',
        body: [
            'We develop innovative, human-centred capabilities for autonomous systems using advanced reasoning, machine learning, and artificial intelligence.',
            'Our research strengthens the intelligence and decision-making capacity of autonomous systems, helping them make trustworthy, safe, and explainable decisions aligned with societal and human expectations.',
            'This work spans perception, control, learning, simulation, verification, and human-system interaction, with an emphasis on methods that can be evaluated rigorously and transferred toward real-world autonomous platforms.',
        ],
    },
    {
        title: 'What We Offer',
        body: [
            'CAV-Lab offers expertise in autonomous robotics and vehicles, safe and trustworthy AI, machine learning, explainable AI, learning control systems, and connected mobility technologies.',
            'We specialise in AI methods for situational awareness, prediction, decision-making, safety-critical operation, and cyber-threat detection and mitigation.',
            'Our team supports research collaboration, technical development, experimental validation, and knowledge exchange with partners seeking robust autonomy solutions for transport, robotics, and safety-critical systems.',
        ],
    },
];

function AboutUs() {
    return (
    <section className="about-us-section">
        <header className="about-us-header">
            <h1 className="section-title"><span className="orange_underline">About Us</span></h1>
            <p className="about-us-intro">
                CAV-Lab advances safe, trustworthy AI for autonomous vehicles, robotics, and connected mobility through research with academic and industry partners.
            </p>
        </header>
        <div className="about-us-container">
            {aboutCards.map(({ title, body }) => (
                <ScrollAnimation animateIn="fadeIn" key={title}>
                    <article className="about-us-content">
                        <h2 className="about-us-titles">{title}</h2>
                        {body.map((paragraph) => (
                            <p key={paragraph}>{paragraph}</p>
                        ))}
                    </article>
                </ScrollAnimation>
            ))}
        </div>
    </section>        
    );
  }

  export default AboutUs;
