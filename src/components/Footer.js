import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import cav_lab_logo from '../images/CAV-LAB_logo_white.png'
import {AiOutlineMail, AiOutlinePhone, AiOutlineYoutube} from 'react-icons/ai'
import {IoMdContact} from 'react-icons/io'

function Footer() {
  const mystyle = {
  color: "white",
  backgroundColor: "#242424",/*"#1C1B1B",*/
  padding: "2%"};
  return (
      <div className='footer-container'>
        <div className='contact-grid'>

            <h1><a style={mystyle} href="https://www.linkedin.com/in/msfallah/"><IoMdContact /></a></h1>
            <p className='contact-info'>Dr. Saber <br></br> Fallah</p>
            <h1><a style={mystyle} href="mailto:s.fallah@surrey.ac.uk"><AiOutlineMail /></a></h1>
            <p className='contact-info'><b>Email:</b> <br></br> s.fallah@surrey.ac.uk</p>
            <h1><a style={mystyle} href="tel:+01483686528"><AiOutlinePhone /></a></h1>
            <p className='contact-info'><b>Office:</b> <br></br> 01483686528</p>
            <h1><a style={mystyle} href="https://www.youtube.com/@cavresearchlab"><AiOutlineYoutube /></a></h1>
            <p className='contact-info'><b>Youtube:</b> <br></br> @cavresearchlab</p>

        </div>


        <section class='social-media'>
          <div class=' logo-flex-container'>
            <div class='footer-logo' style={{width: "35%"}}>
              <Link to='/' className='social-logo'>
                <img style={{paddingTop:"1.2rem"}} src={cav_lab_logo} width="210rem" height="160rem" />
              </Link>
            </div>
            <div style={{width: "30%"}}>
              <img style={{height: "2.7rem", width: "17rem", paddingRight:"7rem"}} class="UOS-logo" src={require('../images/UoS-Logo.png')}/>
            </div>
            <div style={{width: "15%"}} class='social-icons'>
              <Link
                class='social-icon-link facebook'
                to='/'
                target='_blank'
                aria-label='Facebook'
              >
                <i class='fab fa-facebook-f' />
              </Link>
              <Link
                class='social-icon-link instagram'
                to='/'
                target='_blank'
                aria-label='Instagram'
              >
                <i class='fab fa-instagram' />
              </Link>
              <Link
                class='social-icon-link youtube'
                to='/'
                target='_blank'
                aria-label='Youtube'
              >
                <i class='fab fa-youtube' />
              </Link>
              <Link
                class='social-icon-link twitter'
                to='/'
                target='_blank'
                aria-label='Twitter'
              >
                <i class='fab fa-twitter' />
              </Link>
              <Link
                class='social-icon-link twitter'
                to='/'
                target='_blank'
                aria-label='LinkedIn'
                >
                <i class='fab fa-linkedin' />
              </Link>
            </div>
          </div>
        </section>
    </div>
  );
}

export default Footer;
