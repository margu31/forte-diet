import React from 'react';
import UserBar from '../../containers/UserBar/UserBar';
import { StyledHomePageWrapper } from './Home.styled';

export default function Home() {
  return (
    <StyledHomePageWrapper>
      <UserBar />
    </StyledHomePageWrapper>
  );
}
