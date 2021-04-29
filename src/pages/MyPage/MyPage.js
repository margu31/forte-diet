import React, { useEffect } from 'react';
import { StyledMyPageWrapper } from './MyPage.styled';
import {
  MenuListContainer,
  HealthBarContainer,
  CalendarContainer,
  UserBar
} from 'containers';
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
      <h2 tabIndex='0'>마이페이지</h2>
      <UserBar />
      <CalendarContainer />
      <MenuListToPosting onMoveToPosting={onMoveToPosting} />
      <MenuListContainer history={history} />
      <HealthBarContainer />
      <ScrollTopButton onMoveToTop={onMoveToTop} />
    </StyledMyPageWrapper>
  );
}
