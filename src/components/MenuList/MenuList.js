import React from 'react';
import MealList from '../MealList/MealList';
import { StyledMenuList } from './MenuList.styled';

export default function MenuList() {
  return (
    <StyledMenuList>
      {/* TODO: MealList 배열 map 돌려야 함 + 빈 배열일때 로직 짜야 함 */}
      <MealList borderColor='#395B9D' />
      <MealList borderColor='#F3B34C' />
      <MealList borderColor='#14182C' />
      <MealList borderColor='#F26830' />
    </StyledMenuList>
  );
}
