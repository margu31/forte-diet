import React from 'react';
import {
  StyledHealthBar,
  StyledContainer,
  StyledWaterDose,
  StyledDonut
} from './HealthBar.styled';

export default function HealthBar({ healthBar, getTotalCalories, getDate }) {
  return (
    <StyledHealthBar>
      <h2 aria-hidden='true'>우연히 식단 기록</h2>
      <StyledContainer>
        {/* TODO: key 값 바꿔야 함!! */}
        {healthBar.map((healthBarList, i) => (
          <li key={i}>
            <h3 lang='en'>{getDate(i)}</h3>
            <div>
              <StyledWaterDose />
              <span>{healthBarList.waterDose || 0}ml</span>
            </div>
            <div>
              <StyledDonut />
              <span>{getTotalCalories(healthBarList.meals)}kcal</span>
            </div>
          </li>
        ))}
        <span
          style={{ fontSize: '0.8rem', opacity: '0.5', padding: '30px 5px' }}
        >
          영양소....TBU 😇
        </span>
      </StyledContainer>
    </StyledHealthBar>
  );
}
