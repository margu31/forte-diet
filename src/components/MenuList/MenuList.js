import React from 'react';
import MealList from 'components/MealList/MealList';
import {
  StyledMenuList,
  StyledMenuListBar,
  StyledLike,
  StyledWaterDose,
  StyledDonut
} from './MenuList.styled';

export default function MenuList() {
  return (
    <>
      <StyledMenuList>
        {/* TODO: MealList 배열 map 돌려야 함 + 빈 배열일때 로직 짜야 함 */}
        <MealList borderColor='#395B9D' />
        <MealList borderColor='#F3B34C' />
        <MealList borderColor='#14182C' />
        <MealList borderColor='#F26830' />
        <p>
          오늘 정말 맛있는 샌드위치 맛집을 찾았다! 커피랑 마시니까 꿀조합..
          <br></br> 오늘 정말 맛있는 샌드위치 맛집을 찾았다! 커피랑 마시니까 꿀조합......
          <br></br>정말 맛있는 샌드위치 맛집을 찾았다! 커피랑 마시니까 꿀조합...... 정말 맛있는
          샌드위치 맛집을 찾았다! 커피랑 마시니까 꿀조합...... 정말 맛있는 샌드위치 맛집을 찾았다!
          커피랑 마시니까 꿀조합...... 정말 맛있는 샌드위치 맛집을 찾았다! 커피랑 마시니까
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
