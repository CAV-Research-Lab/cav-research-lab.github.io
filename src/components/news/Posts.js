import React from "react";
import "./Posts.css";
import Post from "../shared/Post";
import NewsPosts from "./NewsPosts"
// import robot_lecture from '../../assets/images/news/robot_lecture.png'

/* ALL IMAGES ARE OF RATIO 2500pxH 6000pxW (25:60)*/

const getPostYear = (date) => {
	const parts = String(date || '').split('/');
	return parts[parts.length - 1] || 'News';
};

const getPostCategory = (post) => {
	const text = `${post.title} ${post.body}`.toLowerCase();

	if (post.videoUrl) return 'Video';
	if (post.links || text.includes('reuters') || text.includes('bbc') || text.includes('forbes')) return 'Media';
	if (text.includes('report')) return 'Report';
	if (text.includes('award')) return 'Award';
	if (text.includes('talk') || text.includes('speaker') || text.includes('presented')) return 'Talk';
	return 'News';
};

const preparePost = (post) => ({
	...post,
	category: post.category || getPostCategory(post),
});

const groupByYear = (posts) => posts.reduce((groups, post) => {
	const year = getPostYear(post.date);
	const group = groups.find((item) => item.year === year);

	if (group) {
		group.posts.push(post);
		return groups;
	}

	return [...groups, { year, posts: [post] }];
}, []);

const NPosts = () => {
const [featuredPost, ...remainingPosts] = NewsPosts().map(preparePost);
const groupedPosts = groupByYear(remainingPosts);

return (
	<div className="news-page">
		<header className="news-page-header">
			<p className="news-eyebrow">CAV-Lab Updates</p>
			<h1>News</h1>
			<p>Selected talks, media coverage, research milestones, and project updates from the Connected Autonomous Vehicles Research Lab.</p>
		</header>

		{featuredPost && (
			<section className="news-featured-section" aria-labelledby="featured-news-title">
				<div className="news-section-heading">
					<h2 id="featured-news-title">Featured</h2>
				</div>
				<Post index={0} post={featuredPost} className="news-featured-post" />
			</section>
		)}

		<div className="news-timeline">
			{groupedPosts.map((group) => (
				<section className="news-year-section" key={group.year} aria-labelledby={`news-year-${group.year}`}>
					<div className="news-year-marker">
						<h2 id={`news-year-${group.year}`}>{group.year}</h2>
					</div>
					<div className="news-year-posts">
						{group.posts.map((post, index) => (
							<Post key={`${group.year}-${post.title}`} index={index} post={post} className="news-list-post" />
						))}
					</div>
				</section>
			))}
		</div>
	</div>
);
};

export default NPosts;
