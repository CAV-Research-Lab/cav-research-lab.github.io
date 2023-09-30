import React from 'react';
import NPosts from "../Posts/Posts";
import '../../App.css';
import './Pages.css';

import Footer from '../Footer';

export default function News() {
  return (
    <>
    <div class="NewsBody" style={{height: "100%", backgroundColor: "white"}}>
      <div className="main-container">
        <NPosts />
      </div>
    </div>
    <Footer/>
    </>
  );
}
