import React from 'react';
import MealList from 'components/MealList/MealList';
import {
  StyledMenuList,
  StyledMenuListBar,
  StyledLike,
  StyledWaterDose,
  StyledDonut,
  StyledDailyReview
} from './MenuList.styled';

export default function MenuList({ menuListData }) {
  const { dailyReview } = menuListData;
  const { date } = menuListData.meals[0];
  const dayNum = date.slice(4, 6);
  const dayStr = date.slice(7, 10);

  const getTotalCalories = () => {
    const totalCalories = menuListData.meals.reduce(
      (acc, cur) => acc + cur.calories,
      0
    );

    return totalCalories > 999
      ? totalCalories.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
      : totalCalories;
  };

  return (
    <>
      <StyledMenuList>
        {menuListData.meals.map(mealList => (
          <MealList mealListData={mealList} />
        ))}
        <StyledDailyReview
          placeholder='오늘도 즐거운 식사 되셨나요? 오늘의 느낀 점을 기록해보세요. :-) (90자 이내)'
          value={dailyReview}
        ></StyledDailyReview>
        <StyledMenuListBar>
          <span>{dayStr}</span>
          <span>{dayNum}</span>
          <div>
            <StyledLike />
            <span>like 3</span>
          </div>
          <div>
            <StyledWaterDose />
            <span>300ml</span>
          </div>
          <div>
            <StyledDonut />
            <span>{getTotalCalories()}kcal</span>
          </div>
        </StyledMenuListBar>
      </StyledMenuList>
    </>
  );
}
