import React from 'react';
import {
  StyledPlusButton,
  StyledCalendarButton,
  StyledCalendarIcon,
  StyledMyPageWrapper
} from './MyPage.styled';
import MenuListContainer from 'containers/MenuListContainer/MenuListContainer';

export default function MyPage() {
  return (
    <StyledMyPageWrapper>
      <MenuListContainer />
      <StyledCalendarButton>
        <StyledCalendarIcon />
      </StyledCalendarButton>
      <StyledPlusButton />
    </StyledMyPageWrapper>
  );
}
