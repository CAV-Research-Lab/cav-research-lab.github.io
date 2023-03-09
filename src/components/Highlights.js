import React from 'react';
import '../App.css';
import './Highlights.css';
import "./Posts/Posts.css"
//import ScrollAnimation from 'react-animate-on-scroll';
import NewsPosts from "./Posts/NewsPosts";
import Post from "./Post";
import Highlight from "./Post";



function Highlights() {
    var newsPosts = NewsPosts().slice(0,2);
  
    return (
    <div id='highlight-body'>
        <br></br><br></br>
        <h1 id='highlight-title'><span class="underline">Highlights</span></h1>
        <br></br>

        <div id="posts-container">
            {newsPosts.map((post, index) => (
            <Highlight key={index} index={index} post={post} />
            ))}
	    </div>

    </div>
    );
  }

  export default Highlights;