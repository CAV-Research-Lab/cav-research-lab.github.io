import React from "react";
import "./Post.css";
const Post = ({ post: { title, body,
imgUrl, date }, index }) => {
return (
	<>
	<div className="post-container">
	<h1 className="heading">{title}</h1>
	<img className="image" src={imgUrl} alt="post" />
	<br></br><br></br>
	<p>{body}</p>
	<div className="info">	
		<h4>Date: {date}</h4>
	</div>
	</div>
	</>
);
};

export default Post;
