import React, { useState } from 'react';
import './SplitSelector.css';
import bg from '../Tarot/assets/bgDark.gif';
import dereksGameBG from '../../routes/Root/subroutes/Play/components/DereksGame/dereks-game.gif';
import accolades from '../../routes/Root/subroutes/Play/components/Accolades/accolades.gif'

interface SplitSelectorProps {
  setSelection: (selection: number) => void
}

export default function SplitSelector({ setSelection }: SplitSelectorProps) {
  const [hoveredDiv, setHoveredDiv] = useState(null);

  const handleMouseLeave = () => setHoveredDiv(null);
  const handleMouseEnter = (index: number) => setHoveredDiv(index);
  const handleMouseClick = (index: number) => setSelection(index);

  const getDivWidth = (index: any) => {
    if (hoveredDiv !== null) {
      return index === hoveredDiv ? '60%' : '20%';
    }
    return '33%';
  };

  const leftMarkup = (
    <div className='split-selector-box-underlay' style={{ transform: 'skewX(15deg) translate(-1px, -1px)' }}>
      <p style={{ transform: 'translate(1px, 1px)' }}>THING ONE</p>
      <p style={{ fontSize: 'x-large' }}>GAME DEV ACCOLADES</p>
      <p>NOTABLE RELEASES AND HONORS</p>
    </div>
  );
  
  const middleMarkup = (
    <div style={{ transform: 'skewX(15deg) translate(-1px, -1px)' }}>
      <p>THING TWO</p>
      <p style={{ fontSize: 'x-large' }}>TAROT CARD SIMULATOR</p>
    </div>
  );
  
  const rightMarkup = (
    <div className='split-selector-box-underlay' style={{ transform: 'skewX(15deg) translate(-1px, -1px) translateX(50%) ' }}>
      <p style={{ transform: 'translateX(-30%)' }}>THING THREE</p>
      <p style={{ transform: 'translateX(-30%)', fontSize: 'x-large' }}>"DEREK'S GAME"</p>
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
        <div className='split-selector-box-outter'
          key={ index }
          style={{ width: getDivWidth(index), backgroundColor: index === 2 ? '#BD98CD' : 'transparent', backgroundImage: index === 0 ? `url(${ accolades })` : 'none' }}>
          <div
            className='split-selector-box'
            style={{ width: '100%', backgroundImage: `${ index === 1 ? `url(${ bg })`: index === 2 ? `url(${ dereksGameBG })` : `url(${ accolades })` }` }}
            onMouseEnter={ () => handleMouseEnter(index) }
            onMouseLeave={  handleMouseLeave }
            onClick={ () => handleMouseClick(index) }
          >
            { sectionMarkup(index) }
          </div>
        </div>
      ))}
    </div>
    </section>
  );
};
