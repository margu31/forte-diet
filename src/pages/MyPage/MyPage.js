import React from 'react';
import { StyledMyPageWrapper } from './MyPage.styled';
import MenuListContainer from 'containers/MenuListContainer/MenuListContainer';
import HealthBarContainer from 'containers/HealthBarContainer/HealthBarContainer';
import CalendarContainer from 'containers/CalendarContainer/CalendarContainer';
import UserBar from 'containers/UserBar/UserBar';
import MenuListToPosting from 'components/MenuListToPostingButton/MenuListToPosting';
import ScrollTopButton from 'components/ScrollTopButton/ScrollTopButton';

export default function MyPage({ history }) {
  const onMoveToPosting = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
    history.push('/posting');
  };

  const onMoveToTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };

  return (
    <StyledMyPageWrapper>
      <UserBar />
      <HealthBarContainer />
      <MenuListContainer history={history} />
      <CalendarContainer />
      <MenuListToPosting onMoveToPosting={onMoveToPosting} />
      <ScrollTopButton onMoveToTop={onMoveToTop} />
    </StyledMyPageWrapper>
  );
}
