import React from 'react';
import Welcome from 'components/Welcome/Welcome';
import UserBar from 'containers/UserBar/UserBar';
import { StyledHomePageWrapper } from './Home.styled';

export default function Home() {
  return (
    <StyledHomePageWrapper>
      <UserBar />
      <Welcome />
    </StyledHomePageWrapper>
  );
}
