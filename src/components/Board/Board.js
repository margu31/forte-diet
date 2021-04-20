import React, { useState } from 'react';
import BoardNavigation from 'components/BoardNavigation/BoardNavigation';
import { StyledBoardTitle, StyledBoardWindow, StyledBoardWrapper } from './Board.styled';

export default function Board() {
  const [boardType, setBoardType] = useState(1);

  const handleClick = e => {
    switch (e.target.id) {
      case 'popular':
        setBoardType(1);
        break;
      case 'recent':
        setBoardType(2);
        break;
      case 'search':
        setBoardType(3);
        break;
      default:
        return;
    }
  };

  return (
    <StyledBoardWrapper>
      <StyledBoardTitle>Trending</StyledBoardTitle>
      <BoardNavigation boardType={boardType} onClick={handleClick} />
      <StyledBoardWindow boardType={boardType} />
    </StyledBoardWrapper>
  );
}
