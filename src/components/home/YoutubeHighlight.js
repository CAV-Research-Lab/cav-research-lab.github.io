import React from 'react';
import './YoutubeHighlight.css';

function YoutubeHighlight() {
    return (
        <article className="youtube-highlight-card">
            <div className="youtube-highlight-media">
                <iframe
                    className="youtube-highlight-frame"
                    src="https://www.youtube.com/embed/nuHHnWmESXM"
                    title="Embodied AI: Invisible Cues"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                />
            </div>
            <div className="youtube-highlight-copy">
                <h2 className="youtube-highlight-title">Embodied AI: Invisible Cues</h2>
                <p>
                    This webinar brings together experts from Waymo, Waye, Fusion Processing Ltd, ITS Leeds, RiDC, and TH Ingolstadt to explore how embodied artificial intelligence can enable safer, more inclusive, and more human-centred autonomous systems.
                </p>
                <p>
                    The panel covers technical foundations, human factors and inclusivity, and AI safety, forming part of an ongoing research dialogue on safe and trusted AI for autonomous mobility.
                </p>
                <a
                    className="youtube-highlight-link"
                    href="https://www.youtube.com/watch?v=nuHHnWmESXM"
                    target="_blank"
                    rel="noreferrer"
                >
                    Watch on YouTube
                </a>
            </div>
        </article>
    );
}

export default YoutubeHighlight;
