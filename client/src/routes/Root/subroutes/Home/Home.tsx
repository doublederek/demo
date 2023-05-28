import './Home.css';
import React from 'react';
import Highlight from './components/Highlight';
import Slide from '@material-ui/core/Slide';

const shopify = [
  'Designed and taught curricula in a highly competitive 4 year post secondary program, focused on core CS skills required for success at a fast paced high tech company, as well as key Shopify business technologies like Ruby on Rails, React/React Native & GraphQL',
  'Worked with individual students and junior instructors to help achieve their career goals and personal ambitions.',
  'Defined measurable success metrics of our program using KPIs, backed by executive stakeholders, iterated upon quarterly with the program.',
];

const algonquin = [
  'Created curricula and taught students on game development subjects including, Sound Design, Rapid Prototyping, Level Design, UI/UX Design and others.',
  'Took high care in providing a safe and encouraging space for students to try things, sometimes failing but always learning.',
  'Identified struggling students and created learning plans to help them become successful and impactful in their future careers.',
];

const fuel = [
  'Wrote quality code and designed games for outside partners (Mattel, McDonalds, Disney) as well as original studio IP.',
  'Happy Parade, A game designed by myself for McDonalds won the highest award for educational games from the UK Board of Educators.',
  'I was heavily involved in pitch work, R&D development including researching the move to HTML5, and also conducted sync meetings with outside clients.',
];

const uqo = [
  'Sole sound designer in an emergent virtual reality lab, creating realistic soundscapes for use in psychoanalytic research by the university.',
  'Engaged in self-directed field recordings, and coordinated recording sessions with external talent and businesses.',
];

export default function Home() {
  return (
    <Slide direction='up' in>
      <section className='home-container'>
      <section className='home-info-row'>
        <section style={{ flex: '1 1 auto' }}>
          <span><h1>Derek Ledoux</h1>Front End Developer // Game Developer // Educator</span><br /><br />
          <p>I'm a versatile developer with a passion for crafting playful experiences. Whether it's designing captivating websites and interfaces, bringing worlds to life in videogames, or creating engaging educational content, I thrive on the intersection of technology, creativity, and growth. With exceptional front-end development skills, a knack for game design, and a love for sharing knowledge, I'm excited to contribute my skills and collaborate with a team that values playful innovation and impact.</p>
        </section>
        <img src='https://raw.githubusercontent.com/doublederek/demo/main/assets/derek.png' />
      </section>
      <section className='home-timeline-row'>
        <section className='home-card' style={{ maxWidth: '60%' }}>
          <h2>Experience</h2>
          <Highlight where='Shopify' what='Senior Technical Educator (Dev Degree)' when='Sept 2017 - May 2023' why={ shopify }/>
          <Highlight where='Algonquin College' what='Game Development Professor' when='August 2013 - October 2017' why={ algonquin }/>
          <Highlight where='Fuel Youth' what='Game Developer & Designer' when='May 2011 - November 2013' why={ fuel }/>
          <Highlight where='UQO Cyberpsychology Research Lab' what='VR Sound Designer' when='Sept 2008 - May 2011' why={ uqo }/>
        </section>
        <section className='home-card' style={{ flex: 1 }}>
          <h2>Education</h2>
          <Highlight where='Algonquin College' what='Game Development' when='Sept 2007 - April 2010' why={ algonquin }/>
          <Highlight where='Algonquin College' what='Theatre Arts' when='Sept 2002 - April 2004' why={ algonquin }/>
        </section>
      </section>
    </section>
    </Slide>
  );
}
