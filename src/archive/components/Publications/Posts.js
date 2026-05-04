import React from "react";
import "./Posts.css";
import PublicationPosts from "./PublicationPosts"
import {GoLinkExternal} from 'react-icons/go'

const THEME_COLOURS = {
	CARMA: "#E4572E",
	SocioDrive: "#4183C4",
	"FAIR-Robot": "#39AC84",
	SatCAV: "#242222",
};

function getColourFromTheme(theme) {
	return THEME_COLOURS[theme] || "#242222";
}

/* ALL IMAGES ARE OF RATIO 2500pxH 6000pxW (25:60)*/
const Publication = ({ post: { title, body, theme, github, link } }) => {
		const overlineStyle = {
			paddingTop: "2%",
			borderTop: "4px solid ".concat(getColourFromTheme(theme))
		   }
	return (
		<div style={overlineStyle} className="info">
		<h1 textAlign="left">{title}</h1>

		<br></br><br></br>
		<p>{body}</p>

		<a href={link} className="project-link"><GoLinkExternal/> Read Online</a>
		<a href={github} className="project-link"><GoLinkExternal/> Github</a>

		<br></br><br></br>

		</div>
	);
	};

const Posts = ({ filterYear } = {}) => {
const publicationPosts = filterYear
	? PublicationPosts().filter(post => post.year === filterYear)
	: PublicationPosts();

return (
	<>
	{publicationPosts.map((post, index) => (
		<Publication key={index} index={index} post={post} />
	))}
	</>
);
};

export default Posts;
