import React from 'react';
import Posts from "../Posts/Posts";
import '../../App.css';
import './Pages.css';

import Footer from '../Footer';

export default function News() {
  return (
    <>
    <div class="NewsBody" style={{height: "100%", backgroundColor: "white"}}>
      <div className="main-container">
         <br></br><br></br>
        {/*<h1 style={{ color: "white", textAlign: "left", marginLeft: "3%" }}><span class="underline">News</span></h1>
          <br></br><br></br> */}

        <Posts />
      </div>
    </div>
    <Footer/>
    </>
  );
}
