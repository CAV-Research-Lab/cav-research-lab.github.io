import React from 'react';
import '../App.css';
import "./Post.css"
import NewsPosts from "./Posts/NewsPosts";
import Highlight from "./Post";

function Highlights() {
    const mystyle = {
        color: "white",
        backgroundColor: "#333333",/*"#1C1B1B",*/
        width: "100%",
        paddingTop: "3rem"
        };
    const newsPosts = NewsPosts().slice(0, 2);
  
    return (
    <div style={mystyle}>
        <h1 style={{ color: "white", textAlign: "left", marginLeft: "3%" }}><span className="underline">Highlights</span></h1>

        <div className="posts-container">
            {newsPosts.map((post, index) => (
            <Highlight key={index} index={index} post={post} className="greyBackground"/>
            ))}
	    </div>
    </div>

    );
  }

  export default Highlights;
