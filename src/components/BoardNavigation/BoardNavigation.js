import React from 'react';
import { BoardBtn, BoardLi, BoardNav, BoardUl } from './BoardNavigation.styled';

export default function BoardNavigation({ boardType, onClick }) {
  return (
    <BoardNav>
      <BoardUl>
        <BoardLi>
          <BoardBtn id='popular' $isActive={boardType === 1} onClick={onClick}>
            Popular
          </BoardBtn>
        </BoardLi>
        <BoardLi>
          <BoardBtn id='recent' $isActive={boardType === 2} onClick={onClick}>
            Recent
          </BoardBtn>
        </BoardLi>
        <BoardLi>
          <BoardBtn id='search' $isActive={boardType === 3} onClick={onClick}>
            Search
          </BoardBtn>
        </BoardLi>
      </BoardUl>
    </BoardNav>
  );
}
