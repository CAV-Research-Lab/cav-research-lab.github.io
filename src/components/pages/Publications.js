import React from 'react';
import '../../App.css';
import './Pages.css'
import Posts from "../Publications/Posts";

import Footer from '../Footer';

export default function Publications() {
  return (
    <>
    <div style={{height: "100%", backgroundColor: "rgb(51, 51, 51)"}}>
        <br></br><br></br>
        <div style={{ color: "white", textAlign: "left", marginLeft: "3%" }}>
        <h1><span>2023</span></h1></div>
          <br></br><br></br>
        <div className="container">
          <Posts filterYear="2023"/>
        </div>


        <div style={{ color: "white", textAlign: "left", marginLeft: "3%" }}>
        <h1><span>2022</span></h1></div>
                  <br></br><br></br>
          <div className="container">
          <Posts filterYear="2022"/>
        </div>

        <div style={{ color: "white", textAlign: "left", marginLeft: "3%" }}>
        <h1><span>2021</span></h1></div>
                  <br></br><br></br>
          <div className="container">
          <Posts filterYear="2021"/>
        </div>

        <div style={{ color: "white", textAlign: "left", marginLeft: "3%" }}>
        <h1><span>2020</span></h1></div>
                  <br></br><br></br>
          <div className="container">
          <Posts filterYear="2020"/>
        </div>
    </div>
    <Footer/>
    </>
  );
}
/*
      <div class="PublicationsBody">


        <div class="info">
          <ul>
            <li>
              M. Raisi, A. Noohian, L. Mccutcheon, and S. Fallah,
              “Value Summation: A novel Scoring Function for MPC-based Model-based reinforcement learning”,
              arXiv:2209.08169, 2022.

            </li><br></br>
            <li>
              M. Yildirim, S. Mozaffari, L. McCutcheon, M. Dianati, and S. Fallah,
              “Prediction based decision making for autonomous highway driving”,
              arXiv:2209.02106, 2022.
            </li>

          </ul>
          <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        </div>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>

      </div>

*/
