import React from 'react';
import '../../App.css';
import "../shared/Post.css"
import NewsPosts from "../news/NewsPosts";
import Highlight from "../shared/Post";

const highlightedNewsTitles = [
    "CAV-Lab Research on Trusted Automated Vehicles Presented at Defence Autonomy Event",
    "Building Trust in AI and Autonomy at Autonomy Unleashed",
];

function Highlights() {
    const allNewsPosts = NewsPosts();
    const newsPosts = highlightedNewsTitles
        .map((title) => allNewsPosts.find((post) => post.title === title))
        .filter(Boolean)
        .map(({ imgUrl, videoUrl, ...post }) => post);
  
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
