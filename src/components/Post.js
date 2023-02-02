import React from "react";
import "./Post.css";
import '../App.css';
import './pages/Pages.css'



const Post = ({ post: { title, body,
imgUrl, date }, index }) => {
return (
	<>
	<div className="post-container">
	<h1 textAlign="left">{title}</h1>
	<img className="image" src={imgUrl} alt="post" />
	<br></br><br></br>
	<p style={{fontWight:"normal"}}>{body}</p>
	{/* <div className="info">	
		<h4>Date: {date}</h4>
	</div> */}
	</div>
	</>
);
};

const Highlight = ({ post: { title, body,
	imgUrl, date }, index }) => {
		const left = {
			color: "black",
			backgroundColor: "#212529",/*"#1C1B1B",*/
			width: "100%"
			};	return (
		<>
		<div className="highlight-container">
			<table>
				<tr>
					<th width="30%" textAlign="left">
						<img className="image" src={imgUrl} alt="post" />
					</th>

					<th>
						<div className="info">
						<h1 className="heading">{title}</h1>
						<p >{body}</p>
						<h4>Date: {date}</h4>
						</div>
					</th>
				</tr>
			</table>

		<br></br><br></br>
		</div>
		</>
	);
	};
	
export default Highlight;

export {Post};
