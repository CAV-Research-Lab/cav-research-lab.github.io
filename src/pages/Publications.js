import React from 'react';
import '../App.css';
import './Pages.css'
import { GrDocumentPdf } from 'react-icons/gr'
import { AiOutlineArrowDown,AiOutlineArrowUp } from 'react-icons/ai'
import { scroller, animateScroll as scroll } from 'react-scroll'
import Footer from '../components/layout/Footer';
import { publicationGroups } from '../data/publications';

const PUBLICATION_YEARS = publicationGroups.map(({ year }) => year);

const yearNavStyle = { textAlign: "center", fontSize: "1.5rem", paddingLeft: "2rem", paddingRight: "2rem" };
const publicationListStyle = { listStyleType: "square" };

const YearNav = ({ onScrollTo, children }) => (
  <div style={yearNavStyle}>
    <p>
      {PUBLICATION_YEARS.map((year, index) => (
        <React.Fragment key={year}>
          {index > 0 && ' - '}
          <button className="black year-nav-button" type="button" onClick={() => onScrollTo(year)}>
            {year}
          </button>
        </React.Fragment>
      ))}
    </p>
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
          {title} <a href={url} aria-label={`Open PDF for ${title}`}><GrDocumentPdf /></a>
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
      <br></br>
      <YearNav onScrollTo={scrollTo}>
        <button className="black year-nav-button" type="button" onClick={() => scroll.scrollToBottom()} aria-label="Scroll to bottom">
          <AiOutlineArrowDown/>
        </button>
      </YearNav>

      <div className="publication-body">
        {publicationGroups.map((group) => (
          <PublicationYear key={group.year} group={group} />
        ))}
        <br></br><br></br>
      </div>
      <YearNav onScrollTo={scrollTo}>
        <button className="black year-nav-button" type="button" onClick={() => scroll.scrollToTop()} aria-label="Scroll to top">
          <AiOutlineArrowUp/>
        </button>
      </YearNav>
      <Footer />
    </>
  );
}
