import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import cav_lab_logo from '../images/CAV-LAB_logo_white.png'

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const toggleBtn = document.getElementById("menu-icon");
  const myList = document.getElementById("nav-menu");
  

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  // const logoStyle = {
  //   marginTop: "-0.08%"
  // };
  // toggleBtn.addEventListener("click", function() {
  //     if (myList.style.display === "none") {
  //       myList.style.display = "block";
  //     } else {
  //       myList.style.display = "none";
  //     }
  //   });

  return (
    <>
      <nav className='navbar'>
          <div>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              <img src={cav_lab_logo}/><br></br>
              {/* <i class='fab fa-typo3' /> */}
            </Link>
          </div>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/research'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Research
              </Link>
            </li>
 	    <li className='nav-item'>
              <Link
                to='/Innovations'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Innovations
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/publications'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Publications
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/team'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Team
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/news'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                News
              </Link>
            </li>
          </ul>
      </nav>
    </>
  );
}

export default Navbar;
