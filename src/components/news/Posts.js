import React from "react";
import "./Posts.css";
import Post from "../shared/Post";
import NewsPosts from "./NewsPosts"
// import robot_lecture from '../../assets/images/news/robot_lecture.png'

/* ALL IMAGES ARE OF RATIO 2500pxH 6000pxW (25:60)*/

const NPosts = () => {
const newsPosts = NewsPosts();
return (
	<div className="posts-container">
	{newsPosts.map((post, index) => (
		<Post key={index} index={index} post={post} />
	))}
	</div>
);
};

export default NPosts;
