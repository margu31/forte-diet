import React from 'react';
import Welcome from 'components/Welcome/Welcome';
import UserBar from 'containers/UserBar/UserBar';
import { StyledHomePageWrapper } from './Home.styled';
import Board from '../../components/Board/Board';

export default function Home() {
  return (
    <StyledHomePageWrapper>
      <UserBar />
      <Welcome />
      <Board />
    </StyledHomePageWrapper>
  );
}
