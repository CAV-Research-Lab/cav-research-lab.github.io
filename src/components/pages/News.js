import React from 'react';
import Posts from "../Posts/Posts";
import '../../App.css';
import './Pages.css';

import Footer from '../Footer';

export default function News() {
  return (
    <>
    <div class="NewsBody" style={{height: "100%"}}>
      <div className="main-container">
        <br></br><br></br>
        <h1 className="main-heading">CAV-Lab News </h1>
          <br></br><br></br>

        <Posts />
      </div>
    </div>
    <Footer/>
    </>
  );
}
