import React from 'react';
import '../App.css';
import "./Post.css"
//import ScrollAnimation from 'react-animate-on-scroll';
import NewsPosts from "./Posts/NewsPosts";
import Post from "./Post";
import Highlight from "./Post";



function Highlights() {
    const mystyle = {
        color: "white",
        backgroundColor: "#333333",/*"#1C1B1B",*/
        width: "100%",
        paddingTop: "3rem"
        };
    var newsPosts = NewsPosts().slice(0,2);
  
    return (
    <div style={mystyle}>
        <h1 style={{ color: "white", textAlign: "left", marginLeft: "3%" }}><span class="underline">Highlights</span></h1>

        <div class="posts-container">
            {newsPosts.map((post, index) => (
            <Highlight key={index} index={index} post={post} className="greyBackground"/>
            ))}

	    </div>


    </div>

    );
  }

  export default Highlights;