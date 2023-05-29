import './Play.css';
import React, { useState } from 'react';
import SplitSelector from '../../../../components/SplitSelector/SplitSelector';
import Tarot from '../../../../components/Tarot/Tarot';
import { Slide } from '@material-ui/core';
import DereksGame from './components/DereksGame/DereksGame';

type Game = number | null;
const games = ['misc', 'tarot', 'dereks'];

export default function Play() { 
  const [game, setGame] = useState<Game>(null);

  const gameMarkup = () => {
    if (games[game] === 'tarot')
      return <Tarot />;
    else if (games[game] === 'dereks')
      return <DereksGame />;
    
    setGame(null);
    return null;
  }

  return (
    <Slide direction='right' in>
      <section style={{ width: '100%', height: '100%'}}>
        { game ? gameMarkup() : <SplitSelector setSelection={ setGame }/> }
      </section>
    </Slide>
  );
}
