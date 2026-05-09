import React from 'react';
import './LinkedInEmbed.css';

function LinkedInEmbed() {
    return (
        <article className="linkedin-embed-card">
            <h2 className="linkedin-embed-title">Featured LinkedIn Live</h2>
            <div className="linkedin-embed-wrapper">
                <iframe
                    className="linkedin-embed-frame"
                    src="https://www.linkedin.com/video/embed/live/urn:li:ugcPost:7458871168176033794"
                    frameBorder="0"
                    allowFullScreen
                    loading="lazy"
                    title="Embedded post"
                />
            </div>
        </article>
    );
}

export default LinkedInEmbed;
