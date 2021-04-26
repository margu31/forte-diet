import React, { useEffect } from 'react';
import { StyledMyPageWrapper } from './MyPage.styled';
import MenuListContainer from 'containers/MenuListContainer/MenuListContainer';
import HealthBarContainer from 'containers/HealthBarContainer/HealthBarContainer';
import CalendarContainer from 'containers/CalendarContainer/CalendarContainer';
import UserBar from 'containers/UserBar/UserBar';
import MenuListToPosting from 'components/MenuListToPostingButton/MenuListToPosting';
import ScrollTopButton from 'components/ScrollTopButton/ScrollTopButton';

export default function MyPage({ history }) {
  const onMoveToPosting = () => {
    history.push('/posting');
  };

  const onMoveToTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, []);

  return (
    <StyledMyPageWrapper>
      <UserBar />
      <h2 tabIndex='0'>마이페이지</h2>
      <CalendarContainer />
      <MenuListToPosting onMoveToPosting={onMoveToPosting} />
      <MenuListContainer history={history} />
      <HealthBarContainer />
      <ScrollTopButton onMoveToTop={onMoveToTop} />
    </StyledMyPageWrapper>
  );
}
