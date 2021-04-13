import React from 'react';
import { StyledMealList } from './MealList.styled';

export default function MealList({ borderColor }) {
  return (
    <>
      {/* TODO: type에 따른 border 색상 지정 로직 짜야 함 */}
      <StyledMealList borderColor={borderColor}>
        <div>
          <img
            src='https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1635&q=80'
            alt='샌드위치'
          />
        </div>
        <span>7:24AM</span>
        <span>샌드위치</span>
      </StyledMealList>
    </>
  );
}
