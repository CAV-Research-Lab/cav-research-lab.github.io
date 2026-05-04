import React from 'react';
import '../../App.css';
import './Pages.css';
import Footer from '../Footer';
import { fundingGroups, researchProjects } from '../../data/researchProjects';

const textColumnStyle = { color: 'black', textAlign: 'justify', marginLeft: '3%' };
const paragraphStyle = { paddingLeft: '3%', paddingRight: '3%' };
const fundingStyle = { color: 'black', textAlign: 'justify', marginLeft: '2%', paddingBottom: '3rem' };
const listStyle = { listStyleType: 'square' };

const ProjectText = ({ project }) => {
  const content = (
    <>
      <h1><span className="orange_underline">{project.title}</span></h1><br></br>
      <p style={paragraphStyle}>{project.description}</p>
    </>
  );

  if (project.wrapText) {
    return (
      <div className="grid-item">
        <div style={textColumnStyle}>{content}</div>
      </div>
    );
  }

  return <div style={textColumnStyle}>{content}</div>;
};

const ProjectImage = ({ project }) => (
  <div className="grid-item">
    <img style={project.imageStyle} className="project-img" src={project.image} alt={project.imageAlt} />
  </div>
);

export default function Projects() {
  return (
    <>
      <div className="projects-body">
        <br></br><br></br>
        <div className="research-grid-container">
          {researchProjects.map((project) => (
            <React.Fragment key={project.title}>
              <ProjectText project={project} />
              <ProjectImage project={project} />
            </React.Fragment>
          ))}
        </div>

        <br></br><br></br><br></br><br></br>
        <div className="funding" style={fundingStyle}>
          <h1><span className='orange_underline'>Research Funding</span></h1><br></br>
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
