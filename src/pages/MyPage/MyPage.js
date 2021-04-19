import React from 'react';
import { StyledMyPageWrapper } from './MyPage.styled';
import MenuListContainer from 'containers/MenuListContainer/MenuListContainer';
import HealthBarContainer from 'containers/HealthBarContainer/HealthBarContainer';
import CalendarContainer from 'containers/CalendarContainer/CalendarContainer';

export default function MyPage({ history }) {
  return (
    <StyledMyPageWrapper>
      <HealthBarContainer />
      <MenuListContainer history={history} />
      <CalendarContainer />
    </StyledMyPageWrapper>
  );
}
