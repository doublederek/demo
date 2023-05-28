import React, { useState } from 'react';
import './SplitSelector.css';
import bg from '../Tarot/assets/bgDark.gif';

export default function SplitSelector() {
  const [hoveredDiv, setHoveredDiv] = useState(null);

  const handleMouseLeave = () => setHoveredDiv(null);
  const handleMouseEnter = (index: number) => setHoveredDiv(index);
  const handleMouseClick = (index: number) => console.log(`CLICK ${ index }`);

  const getDivWidth = (index: any) => {
    if (hoveredDiv !== null) {
      return index === hoveredDiv ? '60%' : '20%';
    }
    return '33%';
  };

  const leftMarkup = (
    <div className='split-selector-box-underlay' style={{ transform: 'skewX(15deg) translate(-1px, -1px)' }}>
      <p style={{ transform: 'translate(1px, 1px)', color: '#0c0c0c' }}>THING ONE</p>
    </div>
  );
  
  const middleMarkup = (
    <div style={{ transform: 'skewX(15deg) translate(-1px, -1px)' }}>
      <p>THING TWO</p>
      <p>TAROT CARD SIMULATOR</p>
    </div>
  );
  
  const rightMarkup = (
    <div className='split-selector-box-underlay' style={{ transform: 'translateX(50%)' }}>
      <p style={{ transform: 'translateX(-50%)', color: '#0c0c0c' }}>THING THREE</p>
    </div>
  );

  const sectionMarkup = (index: number) => {
    if (index === 0)
      return leftMarkup;
    else if (index === 1)
      return middleMarkup;
    else if (index === 2)
      return rightMarkup;
    
    return null;
  } 

  return (
    <section className='split-contaienr'>
    <div className='split-selector-container'>
      {[0, 1, 2].map((index) => (
        <div
          key={ index }
          className='split-selector-box'
          style={{ width: getDivWidth(index), backgroundImage: `${ index === 1 ? `url(${ bg })` : '' }` }}
          onMouseEnter={ () => handleMouseEnter(index) }
          onMouseLeave={  handleMouseLeave }
          onClick={ () => handleMouseClick(index) }
        >
          { sectionMarkup(index) }
        </div>
      ))}
    </div>
    </section>
  );
};
