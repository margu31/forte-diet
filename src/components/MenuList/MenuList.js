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
          <span>MON</span>
          <span>14</span>
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
            <span>3,260kcal</span>
          </div>
        </StyledMenuListBar>
      </StyledMenuList>
    </>
  );
}
