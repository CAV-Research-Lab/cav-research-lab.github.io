import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import cavLabLogo from '../images/CAV-LAB_logo_white.png'
import uosLogo from '../images/UoS-Logo.png';
import {AiOutlineMail, AiOutlinePhone, AiOutlineYoutube} from 'react-icons/ai'
import {IoMdContact} from 'react-icons/io'
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  return (
      <div className='footer-container'>
        <div className='contact-grid'>

            <h1><a className='footer-contact-icon' href="https://www.linkedin.com/in/msfallah/" aria-label="Saber Fallah LinkedIn"><IoMdContact /></a></h1>
            <p className='contact-info'>Professor Saber <br></br> Fallah</p>
            <h1><a className='footer-contact-icon' href="mailto:s.fallah@surrey.ac.uk" aria-label="Email Saber Fallah"><AiOutlineMail /></a></h1>
            <p className='contact-info'><b>Email:</b> <br></br> s.fallah@surrey.ac.uk</p>
            <h1><a className='footer-contact-icon' href="tel:+01483686528" aria-label="Call CAV-Lab"><AiOutlinePhone /></a></h1>
            <p className='contact-info'><b>Office:</b> <br></br> 01483686528</p>
            <h1><a className='footer-contact-icon' href="https://www.youtube.com/@cavresearchlab" aria-label="CAV-Lab YouTube"><AiOutlineYoutube /></a></h1>
            <p className='contact-info'><b>Youtube:</b> <br></br> @cavresearchlab</p>

        </div>


        <section className='social-media'>
          <div className='logo-grid-container'>
            <div>
              <Link to='/'>
                <img id='footer-logo' src={cavLabLogo} alt='CAV-Lab logo' loading='lazy' decoding='async' />
              </Link>
            </div>
            <div >
              <img id="UOS-logo" src={uosLogo} alt='University of Surrey logo' loading='lazy' decoding='async' />
            </div>
            <div id='location'>
              <p style={{color: "white", fontSize:"0.6rem",paddingTop: "1.2rem", paddingLeft:"0.5rem", justifySelf: "left"}}>CAV-Lab, School of Mechanical Engineering, Faculty of Engineering and Physical Sciences, University of Surrey, GU2 7XH, Guildford, Surrey, UK</p>
            </div>
            <div>
              <div className='social-icons'>
                <a
                  className='social-icon-link instagram'
                  href='https://www.instagram.com/_saber_fallah_/'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='Instagram'
                >
                  <FaInstagram />
                </a>
                <a
                  className='social-icon-link youtube'
                  href='https://www.youtube.com/@cavresearchlab'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='Youtube'
                >
                  <AiOutlineYoutube />
                </a>
                <a
                  className='social-icon-link linkedin'
                  href='https://www.linkedin.com/in/msfallah/'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='LinkedIn'
                  >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>
        </section>
    </div>
  );
}

export default Footer;
