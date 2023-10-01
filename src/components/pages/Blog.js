import React from 'react';
import Posts from "../Posts/Posts";
import '../../App.css';
import Footer from '../Footer';

export default function Blog() {
  return (
    <>
    <div class="blog-body" style={{height: "100%"}}>
      <div class="blog-item">
        <h1>Blog 1</h1>
        <p>Short description. <a href="url">Read More</a></p>
      </div>
      <div class="blog-item">
        <h1>Blog 2</h1>
        <p>Short description. <a href="url">Read More</a></p>
      </div>
      <div class="blog-item">
        <h1>Blog 3</h1>
        <p>Short description. <a href="url">Read More</a></p>
      </div>
      <div class="blog-item">
        <h1>Blog 4</h1>
        <p>Short description. <a href="url">Read More</a></p>
      </div>
      <div class="blog-item">
        <h1>Blog 5</h1>
        <p>Short description. <a href="url">Read More</a></p>
      </div>
    </div>
    <Footer/>
    </>
  );
}
