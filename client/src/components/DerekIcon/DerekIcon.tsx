import './DerekIcon.css';
import React from 'react';
import Nav from 'react-bootstrap/esm/Nav';

export default function DerekIcon() {
  return(
    <section className='derek-icon-container'>
      <Nav.Link href='/#derek'>
        <img src='http://localhost:3000/derek.png' className='derek-icon-image'/>
      </Nav.Link>
    </section>
  );
}
