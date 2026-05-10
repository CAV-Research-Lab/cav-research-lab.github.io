import React from 'react';
import '../App.css';
import './Pages.css'
import { FiExternalLink } from 'react-icons/fi'
import { AiOutlineArrowDown,AiOutlineArrowUp } from 'react-icons/ai'
import { scroller, animateScroll as scroll } from 'react-scroll'
import Footer from '../components/layout/Footer';
import { impactGroups } from '../data/impact';

const IMPACT_YEARS = impactGroups.map(({ year }) => year);

const impactListStyle = { listStyleType: "square" };

const YearNav = ({ onScrollTo, children }) => (
  <div className="publication-year-nav">
    <div className="publication-year-buttons">
      {IMPACT_YEARS.map((year, index) => (
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

const ImpactYear = ({ group }) => (
  <div className={`publication-year-group ${group.year}`}>
    <br></br><br></br>
    <h1><span className="orange_underline">{group.year}</span></h1><br></br>
    {group.categories.map((category) => (
      <section className="impact-category" key={`${group.year}-${category.title}`}>
        <h2>{category.title}</h2>
        <ul style={impactListStyle}>
          {category.items.map(({ title, url }) => (
            <li key={`${group.year}-${category.title}-${title}`}>
              <span>{title}</span>
              {url && (
                <a className="publication-link" href={url} target="_blank" rel="noopener noreferrer" aria-label={`Open link for ${title}`}><FiExternalLink /></a>
              )}
            </li>
          ))}
        </ul>
      </section>
    ))}
  </div>
);

export default function Impact() {
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
          <h1>CAV-Lab Research Impact</h1>
          <p>Selected CAV-Lab publications, books, patents, policy contributions, and public engagement.</p>
        </header>
        <YearNav onScrollTo={scrollTo}>
          <button className="black year-nav-button year-nav-icon" type="button" onClick={() => scroll.scrollToBottom()} aria-label="Scroll to bottom">
            <AiOutlineArrowDown/>
          </button>
        </YearNav>
        {impactGroups.map((group) => (
          <ImpactYear key={group.year} group={group} />
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
