import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import cavLabLogo from '../../assets/images/brand/CAV-LAB_logo_white.png'
import uosLogo from '../../assets/images/brand/UoS-Logo.png';
import { AiOutlineMail, AiOutlineYoutube } from 'react-icons/ai'
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  return (
      <div className='footer-container'>
        <section className='footer-main'>
          <div className='footer-brand'>
              <Link to='/'>
                <img id='footer-logo' src={cavLabLogo} alt='CAV-Lab logo' loading='lazy' decoding='async' />
              </Link>
              <p>Advancing safe, trustworthy autonomy for intelligent vehicles, robotics, and connected mobility.</p>
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

          <div className='footer-column'>
            <h2>Contact</h2>
            <p><strong>Professor Saber Fallah</strong><br />Director of CAV-Lab</p>
            <a className='footer-text-link' href="mailto:s.fallah@surrey.ac.uk"><AiOutlineMail aria-hidden='true' /> s.fallah@surrey.ac.uk</a>
            <a className='footer-text-link' href="https://www.youtube.com/@cavresearchlab" target='_blank' rel='noopener noreferrer'><AiOutlineYoutube aria-hidden='true' /> @cavresearchlab</a>
          </div>

          <div className='footer-column'>
            <h2>Research</h2>
            <Link to='/research'>Research programmes</Link>
            <Link to='/impact'>Impact</Link>
            <Link to='/team'>People</Link>
            <Link to='/news'>News</Link>
          </div>

          <div className='footer-affiliation'>
            <img id="UOS-logo" src={uosLogo} alt='University of Surrey logo' loading='lazy' decoding='async' />
            <p>CAV-Lab, School of Mechanical Engineering, Faculty of Engineering and Physical Sciences, University of Surrey, GU2 7XH, Guildford, Surrey, UK</p>
          </div>
        </section>
        <div className='footer-bottom'>
          <p>© {new Date().getFullYear()} CAV-Lab. University of Surrey.</p>
        </div>
    </div>
  );
}

export default Footer;
