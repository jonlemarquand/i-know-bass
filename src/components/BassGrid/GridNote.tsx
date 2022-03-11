import React from 'react';

import './BassGrid.scss';

interface Props {
  string: string | number,
  tab: string | number,
  note: string,
}

const GridNote: React.FC<Props> = ({ string, tab, note }) => (
  <div className={`grid-note string-${string} tab-${tab}`}>
    <div>
      {note}
    </div>
  </div>
);

export default GridNote;
