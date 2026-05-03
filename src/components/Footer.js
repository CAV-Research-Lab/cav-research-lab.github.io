import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import cavLabLogo from '../images/CAV-LAB_logo_white.png'
import {AiOutlineMail, AiOutlinePhone, AiOutlineYoutube} from 'react-icons/ai'
import {IoMdContact} from 'react-icons/io'

function Footer() {
  const iconLinkStyle = {
  color: "white",
  backgroundColor: "#242424",/*"#1C1B1B",*/
  padding: "2%"};
  return (
      <div className='footer-container'>
        <div className='contact-grid'>

            <h1><a style={iconLinkStyle} href="https://www.linkedin.com/in/msfallah/" aria-label="Saber Fallah LinkedIn"><IoMdContact /></a></h1>
            <p className='contact-info'>Professor Saber <br></br> Fallah</p>
            <h1><a style={iconLinkStyle} href="mailto:s.fallah@surrey.ac.uk" aria-label="Email Saber Fallah"><AiOutlineMail /></a></h1>
            <p className='contact-info'><b>Email:</b> <br></br> s.fallah@surrey.ac.uk</p>
            <h1><a style={iconLinkStyle} href="tel:+01483686528" aria-label="Call CAV-Lab"><AiOutlinePhone /></a></h1>
            <p className='contact-info'><b>Office:</b> <br></br> 01483686528</p>
            <h1><a style={iconLinkStyle} href="https://www.youtube.com/@cavresearchlab" aria-label="CAV-Lab YouTube"><AiOutlineYoutube /></a></h1>
            <p className='contact-info'><b>Youtube:</b> <br></br> @cavresearchlab</p>

        </div>


        <section className='social-media'>
          <div className='logo-grid-container'>
            <div>
              <Link to='/'>
                <img id='footer-logo' src={cavLabLogo} alt='CAV-Lab logo' />
              </Link>
            </div>
            <div >
              <img id="UOS-logo" src={require('../images/UoS-Logo.png')} alt='University of Surrey logo' />
            </div>
            <div id='location'>
              <p style={{color: "white", fontSize:"0.6rem",paddingTop: "1.2rem", paddingLeft:"0.5rem", justifySelf: "left"}}>CAV-Lab, School of Mechanical Engineering, Faculty of Engineering and Physical Sciences, University of Surrey, GU2 7XH, Guildford, Surrey, UK</p>
            </div>
            <div>
              <div className='social-icons'>
                <Link
                  className='social-icon-link facebook'
                  to='/'
                  target='_blank'
                  aria-label='Facebook'
                >
                  <i className='fab fa-facebook-f' />
                </Link>
                <Link
                  className='social-icon-link instagram'
                  to='https://www.instagram.com/_saber_fallah_/'
                  target='_blank'
                  aria-label='Instagram'
                >
                  <i className='fab fa-instagram' />
                </Link>
                <Link
                  className='social-icon-link youtube'
                  to='/'
                  target='_blank'
                  aria-label='Youtube'
                >
                  <i className='fab fa-youtube' />
                </Link>
                <Link
                  className='social-icon-link twitter'
                  to='/'
                  target='_blank'
                  aria-label='Twitter'
                >
                  <i className='fab fa-twitter' />
                </Link>
                <Link
                  className='social-icon-link twitter'
                  to='/'
                  target='_blank'
                  aria-label='LinkedIn'
                  >
                  <i className='fab fa-linkedin' />
                </Link>
              </div>
            </div>
          </div>
        </section>
    </div>
  );
}

export default Footer;
