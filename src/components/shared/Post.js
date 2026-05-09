import React from "react";
import "./Post.css";
import '../../App.css';
import '../../pages/Pages.css'

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

const Highlight = ({ post: { title, body, imgUrl, videoUrl, date, url, links = [], category }, className, index }) => {
	const hasMedia = Boolean(imgUrl || videoUrl);
	const postLinks = links.length ? links : (url ? [{ label: "Read more", url }] : []);

	return (
		<div className={className || ''}>
			<div className={`post-grid-container${hasMedia ? '' : ' post-grid-container-no-media'}`}>
				{hasMedia && (
					<div className="post-media">
						{mediaFormat(imgUrl, videoUrl, title)}
					</div>
				)}
				<div className="post-info">
					{category && <span className="post-category">{category}</span>}
					<h1 className="heading"><b>{title}</b></h1>
					<p>{body}</p>
					{postLinks.length > 0 && (
						<div className="post-links">
							{postLinks.map((link) => (
								<a className="post-link" href={link.url} target="_blank" rel="noreferrer" key={link.url}>
									{link.label}
								</a>
							))}
						</div>
					)}
					<h4>{date}</h4>
				</div>
			</div>
		</div>
	);
  };
  
	
export default Highlight;
