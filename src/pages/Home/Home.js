import React from 'react';
import Welcome from 'components/Welcome/Welcome';
import UserBar from 'containers/UserBar/UserBar';
import { StyledHomePageWrapper } from './Home.styled';
import BoardContainer from 'containers/BoardContainer/BoardContainer';

export default function Home() {
  return (
    <StyledHomePageWrapper>
      <UserBar />
      <Welcome />
      <BoardContainer />
    </StyledHomePageWrapper>
  );
}
