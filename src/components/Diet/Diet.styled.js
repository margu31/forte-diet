import styled from 'styled-components';
import MealList from '../MealList/MealList';

export const StyledDietWrapper = styled.div`
  & + & {
    margin-bottom: 5rem;
  }
`;

export const StyledMeals = styled.ul`
  display: flex;
`;

export const StyledMeal = styled(MealList)`
  li {
    margin: 0;
  }
`;
