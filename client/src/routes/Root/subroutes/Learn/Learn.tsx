import './Learn.css';
import React from 'react';
import Module from './components/Module';
import { Slide } from '@material-ui/core';

export default function Learn() {
  return (
    <Slide direction='left' in>
      <section>
        <p className='learn-description'>In this section, you will find sample curriculum for the first three weeks of a TypeScript course I have designed. This curriculum serves as a demonstration of my expertise in instructional design and my ability to create engaging and comprehensive learning materials. As someone who's truly passionate about both web development and teaching, I'm your go-to person for delivering top-notch instruction and creating killer curricula. Whether you're in search of an experienced instructor or a curriculum whiz, I'm all about providing amazing educational experiences that cater to your needs.</p>
        <Module title='Week 01' subtitle='Hello TypeScript' />
        <Module title='Week 02' subtitle='Putting the Type in TypeScript' />
        <Module title='Week 03' subtitle='Advanced Dungeons & TypeScript' />
      </section>
    </Slide>
  );
}
