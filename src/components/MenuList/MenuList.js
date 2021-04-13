import React from 'react';
import MealList from 'components/MealList/MealList';
import {
  StyledMenuList,
  StyledMenuListBar,
  StyledLike,
  StyledWaterDose,
  StyledDonut
} from './MenuList.styled';

export default function MenuList({ menuListData }) {
  const { date } = menuListData[0];
  const dayNum = date.slice(4, 6);
  const dayStr = date.slice(7, 10);

  const getTotalCalories = () => {
    const totalCalories = menuListData.reduce(
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
        {menuListData.map(mealListData => (
          <MealList mealListData={mealListData} />
        ))}
        <p>
          오늘 정말 맛있는 샌드위치 맛집을 찾았다! 커피랑 마시니까 꿀조합..
          <br></br> 오늘 정말 맛있는 샌드위치 맛집을 찾았다! 커피랑 마시니까
          꿀조합......
          <br></br>정말 맛있는 샌드위치 맛집을 찾았다! 커피랑 마시니까
          꿀조합...... 정말 맛있는 샌드위치 맛집을 찾았다! 커피랑 마시니까
          꿀조합...... 정말 맛있는 샌드위치 맛집을 찾았다! 커피랑 마시니까
          꿀조합...... 정말 맛있는 샌드위치 맛집을 찾았다! 커피랑 마시니까
          꿀조합......
        </p>
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
