import React from 'react';
import BoardNavigation from 'components/BoardNavigation/BoardNavigation';
import {
  StyledBoardTitle,
  StyledBoardWindow,
  StyledBoardWrapper,
  StyledDiets
} from './Board.styled';
import DietCard from 'components/DietCard/DietCard';

export default function Board({ boardType, setBoardType, diets }) {
  const handleClick = e => {
    setBoardType(e.target.id);
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <StyledBoardWrapper>
      <StyledBoardTitle>Trending</StyledBoardTitle>
      <BoardNavigation boardType={boardType} onClick={handleClick} />
      <StyledDiets>
        {diets && diets.map((diet, idx) => <DietCard dietData={diet} variants={item} />)}
      </StyledDiets>
    </StyledBoardWrapper>
  );
}
