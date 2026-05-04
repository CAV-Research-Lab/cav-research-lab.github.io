import React from "react";
import "./Post.css";
import '../App.css';
import './pages/Pages.css'

function mediaFormat(imgUrl, videoUrl, title) {
	if (videoUrl) {
		return(
			<div className="posts-media-wrapper">
				<iframe className="posts-video"
		src={`https://www.youtube.com/embed/${videoUrl}`}
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
		allowFullScreen
		loading="lazy"
		title={title}
				/>
			</div>
	  );
	}

	if (imgUrl) {
		return(
			<div className="posts-media-wrapper">
				<img className="posts-image" src={imgUrl} alt={title} loading="lazy" decoding="async" />
			</div>
		);
	}

	return null;
}

const Highlight = ({ post: { title, body, imgUrl, videoUrl, date }, className, index }) => {
	return (
		<div className={className || ''}>
			<div className="post-grid-container">
				<div className="post-media">
					{mediaFormat(imgUrl, videoUrl, title)}
				</div>
				<div className="post-info">
					<h1 className="heading"><b>{title}</b></h1>
					<p>{body}</p>
					<h4>{date}</h4>
				</div>
			</div>
		</div>
	);
  };
  
	
export default Highlight;
