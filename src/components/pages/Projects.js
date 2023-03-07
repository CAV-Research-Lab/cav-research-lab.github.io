import React from 'react';
import Posts from "../Projects/Posts";
import '../../App.css';
import './Pages.css';

import Footer from '../Footer';




export default function Projects() {

  return (
    <>
    <div class="black" style={{height: "100%", fontSize: "1.5rem"}}>
        <br></br><br></br>
        <div style={{ color: "black", textAlign: "left", marginLeft: "3%" }}>
        <h1><span className="orange_underline">CARMA</span></h1><br></br>
        <p >A short description detailing what the theme is about </p>
        <ul style={{ listStyleType: "square" }}>
          <li>Project 1</li>
          <li>Project 2</li>
          <li>Project 3</li>
        </ul></div>
          <br></br><br></br>


        <div style={{ color: "black", textAlign: "left", marginLeft: "3%" }}>
        <h1><span className='orange_underline'>SocioDrive</span></h1><br></br>
        <p>A short description detailing what the theme is about </p>
        <ul style={{ listStyleType: "square" }}>
          <li>Project 1</li>
          <li>Project 2</li>
          <li>Project 3</li>
        </ul></div>
        <br></br><br></br>

        <div style={{ color: "black", textAlign: "left", marginLeft: "3%" }}>
        <h1><span className='orange_underline'>FAIR-Robot</span></h1><br></br>
        <p>A short description detailing what the theme is about </p>
        <ul style={{ listStyleType: "square" }}>
          <li>Project 1</li>
          <li>Project 2</li>
          <li>Project 3</li>
        </ul></div>
        <br></br><br></br>

        <div style={{ color: "black", textAlign: "left", marginLeft: "3%" }}>
        <h1><span className='orange_underline'>SatCAV</span></h1><br></br>
        <p>A short description detailing what the theme is about </p>
        <ul style={{ listStyleType: "square" }}>
          <li>Project 1</li>
          <li>Project 2</li>
          <li>Project 3</li>
        </ul></div>
        <br></br><br></br>
    </div>
    <Footer/>
    </>
  );
}
/*
<div style={{ color: "white", textAlign: "left", marginLeft: "3%" }}>
        <h1><span>CARMA</span></h1>
        <p>A short description detailing what the theme is about </p></div>
          <br></br><br></br>
        <div className="container">
          <Posts filterTheme="CARMA"/>
        </div>


        <div style={{ color: "white", textAlign: "left", marginLeft: "3%" }}>
        <h1><span>SocioDrive</span></h1>
        <p>A short description detailing what the theme is about </p></div>          <br></br><br></br>
          <div className="container">
          <Posts filterTheme="SocioDrive"/>
        </div>

        <div style={{ color: "white", textAlign: "left", marginLeft: "3%" }}>
        <h1><span>FAIR-Robot</span></h1>
        <p>A short description detailing what the theme is about </p></div>          <br></br><br></br>
          <div className="container">
          <Posts filterTheme="FAIR-Robot"/>
        </div>

        <div style={{ color: "white", textAlign: "left", marginLeft: "3%" }}>
        <h1><span>SatCAV</span></h1>
        <p>A short description detailing what the theme is about </p></div>          <br></br><br></br>
          <div className="container">
          <Posts filterTheme="SatCAV"/>
        </div>
*/
