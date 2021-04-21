import React, { useEffect } from 'react';
import Welcome from 'components/Welcome/Welcome';
import UserBar from 'containers/UserBar/UserBar';
import { StyledHomePageWrapper } from './Home.styled';
import BoardContainer from 'containers/BoardContainer/BoardContainer';
import HealthBarContainer from 'containers/HealthBarContainer/HealthBarContainer';

export default function Home() {
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, []);

  return (
    <StyledHomePageWrapper>
      <UserBar />
      <Welcome />
      <BoardContainer />
      <HealthBarContainer />
    </StyledHomePageWrapper>
  );
}
