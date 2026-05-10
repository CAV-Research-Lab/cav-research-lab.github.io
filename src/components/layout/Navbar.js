import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import './Navbar.css';
import cavLabLogo from '../../assets/images/brand/CAV-LAB_logo_white.png';

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

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 960) {
        closeMobileMenu();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className='navbar'>
      <div>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          <img src={cavLabLogo} alt='CAV-Lab logo' />
        </Link>
      </div>
      <button
        className='menu-icon'
        type='button'
        onClick={handleClick}
        aria-label={click ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={click}
      >
        {click ? <AiOutlineClose aria-hidden='true' /> : <AiOutlineMenu aria-hidden='true' />}
      </button>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        {NAV_ITEMS.map(({ label, path }) => (
          <li className='nav-item' key={path}>
            <NavLink exact={path === '/'} to={path} className='nav-links' activeClassName='active-nav-link' onClick={closeMobileMenu}>
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
