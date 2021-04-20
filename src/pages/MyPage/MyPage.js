import React from 'react';
import { StyledMyPageWrapper } from './MyPage.styled';
import MenuListContainer from 'containers/MenuListContainer/MenuListContainer';
import HealthBarContainer from 'containers/HealthBarContainer/HealthBarContainer';
import CalendarContainer from 'containers/CalendarContainer/CalendarContainer';
import UserBar from 'containers/UserBar/UserBar';

export default function MyPage({ history }) {
  return (
    <StyledMyPageWrapper>
      <UserBar />
      <HealthBarContainer />
      <MenuListContainer history={history} />
      <CalendarContainer />
    </StyledMyPageWrapper>
  );
}
