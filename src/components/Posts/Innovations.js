import React from "react";
import "./Innovations.css";
import Post from "../Post";
import InnovationsPosts from "./InnovationsPosts"
//import robot_lecture from './PostMedia/robot_lecture.png'

/* ALL IMAGES ARE OF RATIO 2500pxH 6000pxW (25:60)*/

const IPosts = () => {
const innovationsPosts = InnovationsPosts();
return (
	<div className="innovations-posts-container">
	{innovationsPosts.map((post, index) => (
		<Post key={index} index={index} post={post} />
	))}
	</div>
);
};

export default IPosts;
