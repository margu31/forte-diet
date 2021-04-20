import styled from 'styled-components';
import MealList from '../MealList/MealList';

export const StyledDietWrapper = styled.div`
  & + & {
    margin-bottom: 5rem;
  }
`;

export const StyledMeal = styled(MealList)`
  li {
    margin: 0;
  }
`;
