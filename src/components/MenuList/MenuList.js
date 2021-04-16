import React, { useRef, useState } from 'react';
import MealList from 'components/MealList/MealList';
import { StyledMenuList } from './MenuList.styled';
import DailyReview from 'components/DailyReview/DailyReview';
import MenuListBar from 'components/MenuListBar/MenuListBar';

export default function MenuList({
  menuListData,
  getTotalCalories,
  onClick,
  onSubmit,
  onRemove,
  onAdd
}) {
  const { dailyReview, waterDose } = menuListData;
  const { date } = menuListData.meals[0];

  const dailyTextarea = useRef();
  const [reviewIsActive, setReviewIsActive] = useState(false);

  return (
    <>
      <StyledMenuList>
        {/* TODO: key 바꿔야함!!!! */}
        {menuListData.meals.map((mealList, i) => (
          <MealList mealListData={mealList} key={i} />
        ))}
        <DailyReview
          dailyReview={dailyReview}
          dailyTextarea={dailyTextarea}
          reviewIsActive={reviewIsActive}
          setReviewIsActive={setReviewIsActive}
          date={date}
          onSubmit={onSubmit}
          onRemove={onRemove}
        />
        <MenuListBar
          date={date}
          waterDose={waterDose}
          onAdd={onAdd}
          getTotalCalories={getTotalCalories}
          reviewIsActive={reviewIsActive}
          setReviewIsActive={setReviewIsActive}
          menuListData={menuListData}
          onClick={onClick}
          dailyTextarea={dailyTextarea}
        />
      </StyledMenuList>
    </>
  );
}
