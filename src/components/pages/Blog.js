import React from 'react';
import Posts from "../Posts/Posts";
import '../../App.css';
import Footer from '../Footer';

export default function Blog() {
  return (
    <>
    <div class="BlogBody" style={{height: "100%"}}>
      <div className="main-container">
        <br></br><br></br>
        <h1 className="main-heading">CAV-Lab Blog </h1>
          <br></br><br></br>

        <Posts />
      </div>
    </div>
    <Footer/>
    </>
  );
}
