import React, { useEffect } from 'react';
import Welcome from 'components/Welcome/Welcome';
import UserBar from 'containers/UserBar/UserBar';
import { StyledHomePageWrapper } from './Home.styled';
import BoardContainer from 'containers/BoardContainer/BoardContainer';

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
    </StyledHomePageWrapper>
  );
}
