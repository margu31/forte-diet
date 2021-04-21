import React from 'react';
import { palette } from '../../styles';
import {
  DietItem,
  StyledDietCard,
  MealImg,
  DietInfos,
  DietInfo,
  Likes,
  DailyReview,
  DonutIcon,
  HeartIcon,
  WaterIcon,
  DietAuthor
} from './DietCard.styled';

export default function DietCard({ dietData, ...restProps }) {
  const changeBorderColor = type => {
    switch (type) {
      case '아침':
        // return palette.themeSecondary;
        return palette.themeTertiary;
      case '점심':
        return palette.themePrimary;
      case '저녁':
        // return palette.themeDefault;
        return palette.themeSecondary;
      case '간식':
        // return palette.themePrimaryThick;
        return palette.themeQuaternary;
      default:
        return palette.themeSecondary;
    }
  };
  return (
    <DietItem>
      <DietAuthor>{dietData.author}</DietAuthor>
      <StyledDietCard>
        <MealImg
          $borderColor={changeBorderColor(dietData.meals[0].type)}
          src='https://i.pinimg.com/564x/b7/20/36/b720364e1b6503bafba08dc2a905c17d.jpg'
        />
        <DietInfos>
          <DietInfo>
            <DonutIcon /> {dietData.calories || '0'}kcal
          </DietInfo>
          <DietInfo>
            <WaterIcon /> {dietData.waterDose || '0'}ml
          </DietInfo>
          <Likes>
            <HeartIcon /> {dietData.like || '0'}
          </Likes>
        </DietInfos>
        <DailyReview>{dietData.dailyReview}</DailyReview>
      </StyledDietCard>
    </DietItem>
  );
}
