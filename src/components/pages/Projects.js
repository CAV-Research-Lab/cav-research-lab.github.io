import React from 'react';
import Posts from "../Projects/Posts";
import '../../App.css';
import './Pages.css';

import Footer from '../Footer';




export default function Projects() {

  return (
    <>
    <div style={{height: "100%", backgroundColor: "rgb(51, 51, 51)"}}>
        <br></br><br></br>
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
    </div>
    <Footer/>
    </>
  );
}
