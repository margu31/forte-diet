import React from 'react';
import MenuList from 'components/MenuList/MenuList';
import { StyledPlusButton, StyledCalendarButton, StyledCalendarIcon } from './MyPage.styled';

export default function MyPage() {
  return (
    <>
      <MenuList />
      <MenuList />
      <MenuList />
      <StyledCalendarButton>
        <StyledCalendarIcon />
      </StyledCalendarButton>
      <StyledPlusButton />
    </>
  );
}
