import React from 'react';
import { BoardBtn, BoardLi, BoardNav, BoardUl } from './BoardNavigation.styled';

export default function BoardNavigation({ boardType, onClick }) {
  return (
    <BoardNav>
      <BoardUl>
        <BoardLi>
          <BoardBtn id='board1' $isActive={boardType === 1} onClick={onClick}>
            Popular
          </BoardBtn>
        </BoardLi>
        <BoardLi>
          <BoardBtn id='board2' $isActive={boardType === 2} onClick={onClick}>
            Recent
          </BoardBtn>
        </BoardLi>
        <BoardLi>
          <BoardBtn id='board3' $isActive={boardType === 3} onClick={onClick}>
            Search
          </BoardBtn>
        </BoardLi>
      </BoardUl>
    </BoardNav>
  );
}
