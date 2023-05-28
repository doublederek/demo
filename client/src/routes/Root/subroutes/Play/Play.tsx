import './Play.css';
import React from 'react';
import SplitSelector from '../../../../components/SplitSelector/SplitSelector';
import Tarot from '../../../../components/Tarot/Tarot';
import { Slide } from '@material-ui/core';

export default function Play() {
  return (
    <Slide direction='right' in>
      <section style={{ width: '100%', height: '100%'}}>
        {/* <Tarot /> */}
        <SplitSelector />
      </section>
    </Slide>
  );
}
