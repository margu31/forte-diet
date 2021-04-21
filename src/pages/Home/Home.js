import React, { useEffect } from 'react';
import Welcome from 'components/Welcome/Welcome';
import UserBar from 'containers/UserBar/UserBar';
import { StyledHomePageWrapper } from './Home.styled';
import BoardContainer from 'containers/BoardContainer/BoardContainer';
import HealthBarContainer from 'containers/HealthBarContainer/HealthBarContainer';
import ScrollTopButton from '../../components/ScrollTopButton/ScrollTopButton';

export default function Home() {
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, []);

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
      <HealthBarContainer />
      <ScrollTopButton onMoveToTop={onMoveToTop} />
    </StyledHomePageWrapper>
  );
}
