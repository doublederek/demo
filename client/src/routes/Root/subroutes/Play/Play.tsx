import SplitSelector from '../../../../components/SplitSelector/SplitSelector';
import Tarot from '../../../../components/Tarot/Tarot';
import './Play.css';
import React from 'react';

export default function Play() {
  return (
    <section style={{ width: '100%', height: '100%'}}>
      {/* <Tarot /> */}
      <SplitSelector />
    </section>
  );
}
