import React from 'react';
import NPosts from "../components/news/Posts";
import '../App.css';
import './Pages.css';

import Footer from '../components/layout/Footer';

export default function News() {
  return (
    <>
    <div className="NewsBody" style={{height: "100%", backgroundColor: "white"}}>
      <div className="main-container">
        <NPosts />
      </div>
    </div>
    <Footer/>
    </>
  );
}
