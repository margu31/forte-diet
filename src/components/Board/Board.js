import React from 'react';
import { StyledBoardTitle, StyledBoardWrapper, StyledDiets } from './Board.styled';
import { DietCard, BoardNavigation } from 'components';

export default function Board({ boardType, diets, auth, handleClick }) {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
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
      <StyledDiets variants={container} initial='hidden' animate='visible'>
        {diets &&
          diets.map(diet => (
            <DietCard key={`board-${diet.id}`} auth={auth} dietData={diet} variants={item} />
          ))}
      </StyledDiets>
    </StyledBoardWrapper>
  );
}
