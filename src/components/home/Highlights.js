import React from 'react';
import '../../App.css';
import "../shared/Post.css"
import NewsPosts from "../news/NewsPosts";
import Highlight from "../shared/Post";

function Highlights() {
    const newsPosts = NewsPosts().slice(0, 2);
  
    return (
    <section className="highlights-section">
        <h1 className="highlights-title"><span className="underline">Highlights</span></h1>

        <div className="posts-container">
            {newsPosts.map((post, index) => (
            <Highlight key={index} index={index} post={post} className="greyBackground"/>
            ))}
	    </div>
    </section>

    );
  }

  export default Highlights;
