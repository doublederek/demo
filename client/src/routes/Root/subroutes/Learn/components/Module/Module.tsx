import './Module.css';
import React from 'react';

interface ModuleProps {
  title: string,
  subtitle: string,
}

export default function Module({ title, subtitle }: ModuleProps) {
  return(
    <section className='module-container'>
      <p>
        <span className='module-title'>{ title }: </span>
        <span className='module-subtitle'>{ subtitle }</span>
      </p>
    </section>
  );
}
