import React, { useState } from 'react';
import BoardNavigation from 'components/BoardNavigation/BoardNavigation';

export default function Board() {
  const [boardType, setBoardType] = useState(1);

  const handleClick = e => {
    setBoardType(parseInt(e.target.id.slice(e.target.id.length - 1), 10));
  };

  return <BoardNavigation boardType={boardType} onClick={handleClick} />;
}
