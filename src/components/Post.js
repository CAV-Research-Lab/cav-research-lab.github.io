import React from "react";
import "./Post.css";
import '../App.css';
import './pages/Pages.css'



function mediaFormat(imgUrl, videoUrl){
	console.log(videoUrl)
	if (videoUrl !== "" || videoUrl === undefined){
		return(
			<div className="posts-media-wrapper">
				<iframe className="posts-video"
		src={`https://www.youtube.com/embed/${videoUrl}`}
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
		allowFullScreen
		title="Embedded youtube"
				/>
			</div>
	  );
	}else{
		return(
			<div className="posts-media-wrapper">
				<img className="posts-image" src={imgUrl} alt="post" />
			</div>

		);
	}

}

const Highlight = ({ post: { title, body, imgUrl, videoUrl, date }, className, index }) => {
	// alert(className);
	return (
	  <>
		<div className={className}>
		  <div className="post-grid-container">
			<div className="post-media">
			  {mediaFormat(imgUrl, videoUrl)}
			</div>
			<div className="post-info">
			  <h1 className="heading"><b>{title}</b></h1>
			  <p>{body}</p>
			  <h4>{date}</h4>
			</div>
		  </div>
		</div>
	  </>
	);
  };
  
	
export default Highlight;
