import './Sidebar.css';
import React from 'react';
import Nav from 'react-bootstrap/esm/Nav';
import DerekIcon from '../../components/DerekIcon';
import { subrouteMap } from '../../data/routes';

export default function Sidebar() {
  const derekIconMarkup = (<DerekIcon />);
  
  const linkMarkup = Object.keys(subrouteMap).map((subroute, index) => {
    if (subroute !== 'derek')
      return(<Nav.Link key={ index } href={ `/#${ subroute }` }>{ capitalize(subroute) }</Nav.Link>);
  });

  return (
    <nav className='sidebar-container'>
      <Nav variant='pills' defaultActiveKey='/#home' className='flex-column sidebar-nav'>
        { linkMarkup }
        { derekIconMarkup }
      </Nav>
    </nav>
  );
};

const capitalize = (chars: string) => {
  return chars.charAt(0).toUpperCase() + chars.slice(1);
}
