import React from 'react';
import { StyledMealList } from './MealList.styled';
import { palette } from 'styles/index';

export default function MealList({ mealListData }) {
  const { photo, title, type } = mealListData;
  const changeBorderColor = type => {
    switch (type) {
      case '아침':
        return palette.themeSecondary;
      case '점심':
        return palette.themePrimary;
      case '저녁':
        return palette.themeDefault;
      case '간식':
        return palette.themePrimaryThick;
      default:
        return palette.themeSecondary;
    }
  };

  return (
    <>
      <StyledMealList borderColor={changeBorderColor(type)}>
        <div>
          <img src={photo} alt={title} />
        </div>
        <span>{type}</span>
        <span>{title}</span>
      </StyledMealList>
    </>
  );
}
