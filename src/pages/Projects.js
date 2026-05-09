import React from 'react';
import '../App.css';
import './Pages.css';
import Footer from '../components/layout/Footer';
import { fundingGroups, researchProjects } from '../data/researchProjects';

const listStyle = { listStyleType: 'square' };

const ProjectCard = ({ project }) => (
  <article className="research-card">
    <div className="research-card-content">
      <p className="page-eyebrow">Research Programme</p>
      <h2>{project.title}</h2>
      <p className="research-summary">{project.summary}</p>
      <p>{project.description}</p>
      <div className="research-meta">
        <div>
          <span>Research themes</span>
          <ul className="research-tags">
            {project.themes.map((theme) => (
              <li key={theme}>{theme}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </article>
);

export default function Projects() {
  return (
    <>
      <div className="projects-body">
        <header className="page-hero research-hero">
          <h1>Research</h1>
          <p>CAV-Lab advances research that turns autonomous systems into trustworthy, explainable technologies for the real world.</p>
        </header>
        <div className="research-grid-container">
          {researchProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        <div className="funding">
          <p className="page-eyebrow">Funding Portfolio</p>
          <h1><span className='orange_underline'>Research Funding</span></h1>
          {fundingGroups.map((group) => (
            <React.Fragment key={group.title}>
              <h5><b>{group.title}</b></h5>
              <ul style={listStyle}>
                {group.items.map((item) => (
                  <li key={item}> {item}</li>
                ))}
              </ul>
            </React.Fragment>
          ))}
          </div>
        </div>
      <Footer />
    </>
  );
}
