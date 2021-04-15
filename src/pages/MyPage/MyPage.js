import React from 'react';
import {
  StyledPlusButton,
  StyledCalendarButton,
  StyledCalendarIcon,
  StyledMyPageWrapper
} from './MyPage.styled';
import MenuListContainer from 'containers/MenuListContainer/MenuListContainer';
import HealthBarContainer from 'containers/HealthBarContainer/HealthBarContainer';

export default function MyPage() {
  return (
    <StyledMyPageWrapper>
      <HealthBarContainer />
      <MenuListContainer />
      <StyledCalendarButton>
        <StyledCalendarIcon />
      </StyledCalendarButton>
      <StyledPlusButton />
    </StyledMyPageWrapper>
  );
}
