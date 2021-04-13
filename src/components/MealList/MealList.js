import React from 'react';
import { StyledMealList } from './MealList.styled';

export default function MealList({ mealListData }) {
  console.log(mealListData);
  const { photo, title, type } = mealListData;
  const changeBorderColor = type => {
    switch (type) {
      case '아침':
        return '#395B9D';
      case '점심':
        return '#F3B34C';
      case '저녁':
        return '#14182C';
      case '간식':
        return '#F26830';
      default:
        return '#395B9D';
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
