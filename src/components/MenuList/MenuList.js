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
  onDelete,
  authUser,
  onDeleteAll,
  handleLike,
  handleDisLike,
  onClickWaterDose,
  id
}) {
  const dailyTextarea = useRef();
  const mealListFocus = useRef();
  const [reviewIsActive, setReviewIsActive] = useState(false);

  if (!menuListData.meals[0]) return null;
  const { date } = menuListData.meals[0];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    // hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  if (typeof menuListData.meals.map !== 'function') return null;

  return (
    <>
      <StyledMenuList variants={container} initial='hidden' animate='visible'>
        <MenuListBar
          date={date}
          getTotalCalories={getTotalCalories}
          reviewIsActive={reviewIsActive}
          setReviewIsActive={setReviewIsActive}
          menuListData={menuListData}
          onClick={onClick}
          dailyTextarea={dailyTextarea}
          authUser={authUser}
          onDeleteAll={onDeleteAll}
          handleLike={handleLike}
          handleDisLike={handleDisLike}
          waterDose={menuListData.waterDose}
          onClickWaterDose={onClickWaterDose}
        />
        {menuListData.meals.map(mealList => (
          <MealList
            mealListData={mealList}
            key={mealList.id}
            variants={item}
            onDelete={onDelete}
            date={date}
            mealListFocus={mealListFocus}
          />
        ))}
        <DailyReview
          date={date}
          dailyTextarea={dailyTextarea}
          reviewIsActive={reviewIsActive}
          setReviewIsActive={setReviewIsActive}
          onSubmit={onSubmit}
          onRemove={onRemove}
          dailyReview={menuListData.dailyReview}
          id={id}
          mealListFocus={mealListFocus}
        />
      </StyledMenuList>
    </>
  );
}
