import React from 'react';
import { StyledMeal, StyledMeals } from './Diet.styled';

export default function Diet({ dietData, ...restProps }) {
  return (
    <StyledMeals>
      {dietData.meals.map(meal => (
        <StyledMeal mealListData={meal} isHome={true} {...restProps} />
      ))}
    </StyledMeals>
  );
}
