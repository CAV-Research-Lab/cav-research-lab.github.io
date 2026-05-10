import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import './Navbar.css';
import cavLabLogo from '../../assets/images/home/cavlab_logo.png';

const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'Research', path: '/research' },
  { label: 'Innovations', path: '/Innovations' },
  { label: 'Impact', path: '/impact' },
  { label: 'Team', path: '/team' },
  { label: 'News', path: '/news' },
  { label: 'Blog', path: '/blog' },
];

function Navbar() {
  const [click, setClick] = useState(false);
  const [logoOpen, setLogoOpen] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const openLogoPreview = () => {
    closeMobileMenu();
    setLogoOpen(true);
  };
  const closeLogoPreview = () => setLogoOpen(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 960) {
        closeMobileMenu();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!logoOpen) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeLogoPreview();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [logoOpen]);

  return (
    <>
      <nav className='navbar'>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          {NAV_ITEMS.map(({ label, path }) => (
            <li className='nav-item' key={path}>
              <NavLink exact={path === '/'} to={path} className='nav-links' activeClassName='active-nav-link' onClick={closeMobileMenu}>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
        <button
          className='menu-icon'
          type='button'
          onClick={handleClick}
          aria-label={click ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={click}
        >
          {click ? <AiOutlineClose aria-hidden='true' /> : <AiOutlineMenu aria-hidden='true' />}
        </button>
        <div>
          <button
            className='navbar-logo'
            type='button'
            onClick={openLogoPreview}
            aria-label='Open larger CAV-Lab logo'
          >
            <img src={cavLabLogo} alt='CAV-Lab logo' />
          </button>
        </div>
      </nav>
      {logoOpen && (
        <div className='logo-preview-backdrop' role='presentation' onClick={closeLogoPreview}>
          <div className='logo-preview-dialog' role='dialog' aria-modal='true' aria-label='CAV-Lab logo preview' onClick={(event) => event.stopPropagation()}>
            <button className='logo-preview-close' type='button' onClick={closeLogoPreview} aria-label='Close logo preview'>
              <AiOutlineClose aria-hidden='true' />
            </button>
            <img className='logo-preview-image' src={cavLabLogo} alt='CAV-Lab logo enlarged' />
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
