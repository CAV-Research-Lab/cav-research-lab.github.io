import React from 'react';
import '../App.css';
import './Pages.css';
import Footer from '../components/layout/Footer';
import { alumniGroups, founder, phdResearchers } from '../data/team';

const TeamCard = ({ member, className = 'team-card', showRole = true }) => (
  <div className={className}>
    <img className='circular--square' src={member.image} alt={member.name} loading='lazy' decoding='async' />
    <h3 className='team-name'>{member.name}</h3>
    {showRole && <p className='team-role'>({member.role})</p>}
    <p className='teamText'>{member.topic}</p>
  </div>
);

const AlumniGroup = ({ group }) => (
  <>
    <h4>{group.title}</h4>
    <ul className='alumni-list'>
      {group.people.map((person) => (
        <li key={person}>{person}</li>
      ))}
    </ul>
  </>
);

export default function Team() {
  const firstRow = phdResearchers.slice(0, 4);
  const secondRow = phdResearchers.slice(4);

  return (
    <>
      <div className='team-body'>
        <TeamCard member={founder} className='founder-card' />

        <div className='phd-first-row'>
          {firstRow.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>

        <div className='phd-second-row'>
          {secondRow.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>

        <div className='alumni'>
          <h2 id='alumni-title'>Alumni</h2>
          {alumniGroups.map((group) => (
            <AlumniGroup key={group.title} group={group} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
