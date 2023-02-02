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
        {/* <h1 style={{ color: "white", textAlign: "left", marginLeft: "3%" }}><span class="underline">Projects</span></h1>
          <br></br><br></br> */}
          <div className="container">
        <Posts />
      </div>
    </div>
    <Footer/>
    </>
  );
}