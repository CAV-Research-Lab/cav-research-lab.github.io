import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar-New.css';
import cav_lab_logo from '../images/CAV-LAB_logo_white.png'


function Navbar_New() {
    // const toggleButton = document.getElementsByClassName('toggle-button')[0]
    // const navbarLinks = document.getElementsByClassName('navbar-links')[0]

    // toggleButton.addEventListener('click', () => {
    //     navbarLinks.classList.toggle('active')
    // })

    return (
        <>
        <nav className='navbar'>
            <div className='navbar-logo'>
                <Link to='/'>
                    <img src={cav_lab_logo}/><br></br>
                    {/* <i class='fab fa-typo3' /> */}
                </Link>
            </div>
            <a href="#" className='toggle-button'>
                <span className='bar'></span>
                <span className='bar'></span>
                <span className='bar'></span>
            </a>
            <div className='navbar-links'>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="research">Research</a></li>
                    <li><a href="publications">Publications</a></li>
                    <li><a href="team">Team</a></li>
                    <li><a href="news">News</a></li>
                </ul>


            </div>
        </nav>
        </>
    );
}

export default Navbar_New;
