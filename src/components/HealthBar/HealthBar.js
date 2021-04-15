import React from 'react';
import { StyledHealthBar, StyledContainer } from './HealthBar.styled';

export default function HealthBar({ healthBar, getTotalCalories, getDate }) {
  return (
    <StyledHealthBar>
      <h2 aria-hidden='true'>우연히 식단 기록</h2>
      <StyledContainer>
        {/* TODO: key 값 바꿔야 함!! */}
        {healthBar.map((healthBarList, i) => (
          <li key={i}>
            <h3 lang='en'>{getDate(i)}</h3>
            <span>{healthBarList.waterDose}ml</span>
            <span>{getTotalCalories(healthBarList.meals)}kcal</span>
          </li>
        ))}
      </StyledContainer>
    </StyledHealthBar>
  );
}
