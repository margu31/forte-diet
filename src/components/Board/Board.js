import React from 'react';
import BoardNavigation from 'components/BoardNavigation/BoardNavigation';
import {
  StyledBoardTitle,
  StyledBoardWindow,
  StyledBoardWrapper,
  StyledDiets
} from './Board.styled';
import Diet from '../Diet/Diet';

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
      <StyledBoardWindow>
        <StyledDiets>
          {diets &&
            diets.map((diet, idx) => (
              <>
                {idx}
                <Diet dietData={diet} variants={item} />
              </>
            ))}
        </StyledDiets>
      </StyledBoardWindow>
    </StyledBoardWrapper>
  );
}
