import './Topbar.css';
import React from 'react';
import Button from '../../components/Button';

export default function Topbar() {
  return(
    <header className='topbar-container'>
      <section className='topbar-derek-bio'>
        <span style={{ fontSize: '1.75em', fontFamily: 'Lot' }}>DEREK LEDOUX </span>
        <span style={{ fontSize: 'small' }}> EDUCATOR // GAME DEVELOPER // FRONT END DEVELOPER</span>
      </section>
      <section className='topbar-actions'>
        <Button small icon='BsAwardFill' />
        <Button small icon='BsFillGearFill' />
        <Button label='Log out' />
      </section>
    </header>
  );
}
