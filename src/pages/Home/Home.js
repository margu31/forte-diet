import React from 'react';
import Welcome from 'components/Welcome/Welcome';
import UserBar from 'containers/UserBar/UserBar';
import { StyledHomePageWrapper } from './Home.styled';
import BoardContainer from 'containers/BoardContainer/BoardContainer';
import ScrollTopButton from '../../components/ScrollTopButton/ScrollTopButton';

export default function Home() {
  const onMoveToTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };
  return (
    <StyledHomePageWrapper>
      <UserBar />
      <Welcome />
      <BoardContainer />
      <ScrollTopButton onMoveToTop={onMoveToTop} />
    </StyledHomePageWrapper>
  );
}
