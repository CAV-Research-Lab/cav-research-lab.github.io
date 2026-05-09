import React from 'react';
import '../App.css';
import './Pages.css'
import { GrDocumentPdf } from 'react-icons/gr'
import { AiOutlineArrowDown,AiOutlineArrowUp } from 'react-icons/ai'
import { scroller, animateScroll as scroll } from 'react-scroll'
import Footer from '../components/layout/Footer';
import { publicationGroups } from '../data/publications';

const PUBLICATION_YEARS = publicationGroups.map(({ year }) => year);

const publicationListStyle = { listStyleType: "square" };

const YearNav = ({ onScrollTo, children }) => (
  <div className="publication-year-nav">
    <div className="publication-year-buttons">
      {PUBLICATION_YEARS.map((year, index) => (
        <React.Fragment key={year}>
          {index > 0 && ' - '}
          <button className="black year-nav-button" type="button" onClick={() => onScrollTo(year)}>
            {year}
          </button>
        </React.Fragment>
      ))}
    </div>
    {children}
  </div>
);

const PublicationYear = ({ group }) => (
  <div className={`publication-year-group ${group.year}`}>
    <br></br><br></br>
    <h1><span className="orange_underline">{group.year}</span></h1><br></br>
    <ul style={publicationListStyle}>
      {group.publications.map(({ title, url }) => (
        <li key={`${group.year}-${title}`}>
          <span>{title}</span>
          <a className="publication-link" href={url} target="_blank" rel="noopener noreferrer" aria-label={`Open publication link for ${title}`}><GrDocumentPdf /></a>
        </li>
      ))}
    </ul>
  </div>
);

export default function Publications() {
  function scrollTo(year) {
    scroller.scrollTo(year, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }

  return (
    <>
      <div className="publication-body">
        <header className="page-hero">
          <p className="page-eyebrow">Publications</p>
          <h1>Peer-reviewed work in safe autonomy, AI reasoning, and robotic systems.</h1>
          <p>Browse recent CAV-Lab publications by year, with links to papers, proceedings, and preprints where available.</p>
        </header>
        <YearNav onScrollTo={scrollTo}>
          <button className="black year-nav-button year-nav-icon" type="button" onClick={() => scroll.scrollToBottom()} aria-label="Scroll to bottom">
            <AiOutlineArrowDown/>
          </button>
        </YearNav>
        {publicationGroups.map((group) => (
          <PublicationYear key={group.year} group={group} />
        ))}
        <YearNav onScrollTo={scrollTo}>
          <button className="black year-nav-button year-nav-icon" type="button" onClick={() => scroll.scrollToTop()} aria-label="Scroll to top">
            <AiOutlineArrowUp/>
          </button>
        </YearNav>
      </div>
      <Footer />
    </>
  );
}
