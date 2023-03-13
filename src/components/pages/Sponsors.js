import React from 'react';
import '../../App.css';
import './Pages.css';
import ScrollAnimation from 'react-animate-on-scroll';


function Sponsors() {
    const mystyle = {
    color: "black",
    backgroundColor: "#FFFFFF",/*"#1C1B1B",*/
    width: "100%"
};
  
    return (
    <div style={mystyle}>
        <br></br><br></br>
        <h1 id="sponsor-title"><span class="orange_underline">Industrial Partners</span></h1>
        <br></br>
        <ScrollAnimation animateIn="fadeIn">
        <img width="100%" src={require('../../images/sponsors.PNG')}></img>
        </ScrollAnimation>
    </div>
    );
  }

  export default Sponsors;