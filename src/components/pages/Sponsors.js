import React from 'react';
import '../../App.css';
import './Pages.css';
import ScrollAnimation from 'react-animate-on-scroll';


function Sponsors() {
    const mystyle = {
    color: "black",
    backgroundColor: "#FFFFFF",/*"#1C1B1B",*/};
  
    return (
    <div style={mystyle}>
        <br></br><br></br>
        <h1 style={{ color: "black", textAlign: "left", marginLeft: "3%" }}><span class="orange_underline">Industrial Partners</span></h1>
        <br></br>
        <img src={require('../../images/sponsors.PNG')}></img>
    </div>
    );
  }

  export default Sponsors;