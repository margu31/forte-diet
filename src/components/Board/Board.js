import React, { useState } from 'react';
import BoardNavigation from 'components/BoardNavigation/BoardNavigation';
import { StyledBoardTitle, StyledBoardWindow, StyledBoardWrapper } from './Board.styled';

export default function Board() {
  const [boardType, setBoardType] = useState(1);

  const handleClick = e => {
    setBoardType(parseInt(e.target.id.slice(e.target.id.length - 1), 10));
  };

  return (
    <StyledBoardWrapper>
      <StyledBoardTitle>Trending</StyledBoardTitle>
      <BoardNavigation boardType={boardType} onClick={handleClick} />
      <StyledBoardWindow />
    </StyledBoardWrapper>
  );
}
