import React from 'react';
import AllStrings from '../../data/AllStrings.js';
import GridNote from './GridNote';

import './BassGrid.scss';

const BassGrid = () => (
  <div className="grid">
    {AllStrings.map((item) => (
      <GridNote tab={item.tab} string={item.string} note={item.noteName} />
    ))}
  </div>
);

export default BassGrid;
