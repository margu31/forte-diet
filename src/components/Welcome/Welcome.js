import React from 'react';
import { Search, StyledWelcomeWrapper, WelcomeContent } from './Welcome.styled';

export default function Welcome() {
  return (
    <StyledWelcomeWrapper>
      <WelcomeContent />
      <Search />
    </StyledWelcomeWrapper>
  );
}
