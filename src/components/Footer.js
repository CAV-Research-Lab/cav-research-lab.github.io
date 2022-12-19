import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import cav_lab_logo from '../images/CAV-LAB_logo_white.png'
import {AiOutlineMail, AiOutlinePhone} from 'react-icons/ai'
import {IoMdContact} from 'react-icons/io'

function Footer() {
  const mystyle = {
  color: "white",
  backgroundColor: "black",/*"#1C1B1B",*/
  padding: "2%"};
  return (
      <div className='footer-container'>
      <table width="80%" style={{color: "white", fontWeight: 'normal', textAlign: "left"}}>
      <tr>
      <th><h1 style={{textAlign: "right"}}><a style={{color: "inherit"}} href="https://www.linkedin.com/in/msfallah/"><IoMdContact /></a></h1></th>
      <th >Dr. Saber Fallah</th>

      <th><h1 style={{textAlign: "right"}}><a style={{color: "inherit"}} href="mailto:s.fallah@surrey.ac.uk"><AiOutlineMail /></a></h1></th>
      <th style={{fontWeight: 'normal'}}><b>Email:</b> s.fallah@surrey.ac.uk</th>

      <th><h1 style={{textAlign: "right"}}><a style={{color: "inherit"}} href="tel:+01483686528"><AiOutlinePhone /></a></h1></th>
      <th style={{fontWeight: 'normal'}}><b>Office:</b> 01483686528</th>

      <th><h1 style={{textAlign: "right"}}><a style={{color: "inherit"}} href="tel:+447460536501"><AiOutlinePhone /></a></h1></th>
      <th nowrap style={{fontWeight: 'normal'}}><b>Mobile:</b> 07460536501</th>
      </tr>
      </table>  {/* Add closing tag here */}
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
          <Link to='/' className='social-logo'>
            <img src={cav_lab_logo} width="25%" height="12.5%"/>
          </Link>
          </div>
          <small class='website-rights'>CAV Lab © 2022</small>
          <div class='social-icons'>
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
      </section></div>
  );
}

export default Footer;



/*
<div className='footer-container'>
  <section className='footer-subscription'>
    <p className='footer-subscription-heading'>
      Join the CAV-Lab newsletter to receive the latest news!
    </p>
    <p className='footer-subscription-text'>
      You can unsubscribe at any time.
    </p>
    <div className='input-areas'>
      <form>
        <input
          className='footer-input'
          name='email'
          type='email'
          placeholder='Your Email'
        />
        <Button buttonStyle='btn--outline'>Subscribe</Button>
      </form>
    </div>
  </section>
  <div class='footer-links'>
    <div className='footer-link-wrapper'>
      <div class='footer-link-items'>
        <h2>About Us</h2>
        <Link to='/sign-up'>How it works</Link>
        <Link to='/'>Testimonials</Link>
        <Link to='/'>Careers</Link>
        <Link to='/'>Investors</Link>
      </div>
      <div class='footer-link-items'>
        <h2>Contact Us</h2>
        <Link to='/'>Contact</Link>
        <Link to='/'>Support</Link>
        <Link to='/'>Destinations</Link>
        <Link to='/'>Sponsorships</Link>
      </div>
    </div>
    <div className='footer-link-wrapper'>
      <div class='footer-link-items'>
        <h2>Videos</h2>
        <Link to='/'>Submit Video</Link>
        <Link to='/'>Ambassadors</Link>
        <Link to='/'>Agency</Link>
        <Link to='/'>Influencer</Link>
      </div>
      <div class='footer-link-items'>
        <h2>Social Media</h2>
        <Link to='/'>Instagram</Link>
        <Link to='/'>Facebook</Link>
        <Link to='/'>Youtube</Link>
        <Link to='/'>Twitter</Link>
      </div>
    </div>
  </div>
  <section class='social-media'>
    <div class='social-media-wrap'>
      <div class='footer-logo'>
      <Link to='/' className='social-logo'>
        <img src={cav_lab_logo} width="20%" height="10%"/>
      </Link>
      </div>
      <small class='website-rights'>CAV Lab © 2022</small>
      <div class='social-icons'>
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


*/
