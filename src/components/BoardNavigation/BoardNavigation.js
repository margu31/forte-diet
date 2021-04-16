import React from 'react';
import { BoardBtn, BoardLi, BoardNav, BoardUl } from './BoardNavigation.styled';

export default function BoardNavigation({ boardType, onClick }) {
  return (
    <BoardNav>
      <BoardUl>
        <BoardLi>
          <BoardBtn id='board1' $isActive={boardType === 1} onClick={onClick}>
            인기순
          </BoardBtn>
        </BoardLi>
        <BoardLi>
          <BoardBtn id='board2' $isActive={boardType === 2} onClick={onClick}>
            최신순
          </BoardBtn>
        </BoardLi>
        <BoardLi>
          <BoardBtn id='board3' $isActive={boardType === 3} onClick={onClick}>
            검색순
          </BoardBtn>
        </BoardLi>
      </BoardUl>
    </BoardNav>
  );
}
