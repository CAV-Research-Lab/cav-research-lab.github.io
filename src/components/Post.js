import React from "react";
import "./Post.css";
import '../App.css';
import './pages/Pages.css'
import YoutubeEmbed from "./YoutubeEmbed";



const Post = ({ post: { title, body,
imgUrl, date }, index }) => {
return (
	<>
	<div className="post-container">
	<h1 textAlign="left">{title}</h1>
	<img className="image" src={imgUrl} alt="post" />
	<br></br><br></br>
	<p style={{fontWight:"normal"}}>{body}</p>
	<h4>{date}</h4>

	</div>
	</>
);
};

function mediaFormat(imgUrl, videoUrl){
	console.log(videoUrl)
	if (videoUrl !== "" || videoUrl === undefined){
		return(
			<iframe className="posts-video"
      src={`https://www.youtube.com/embed/${videoUrl}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    	/>
	  );
	}else{
		return(
			<img className="posts-image" src={imgUrl} alt="post" />

		);
	}

}

const Highlight = ({ post: { title, body,
	imgUrl,videoUrl, date }, index }) => {
		const left = {
			color: "black",
			backgroundColor: "#212529",/*"#1C1B1B",*/
			width: "100%"
			};	return (
		<>
		<div className="highlight-container">
			<div className="post-grid-container">
				<div className="post-media">
					{mediaFormat(imgUrl, videoUrl)}
				</div>
				<div className="post-info">
					<h1 className="heading"><b>{title}</b></h1>
					<p >{body}</p>
					<h4>{date}</h4>
				</div>
			</div>
		</div>
		</>
	);
	};
	
export default Highlight;

export {Post};
