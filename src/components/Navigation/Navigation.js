import React from 'react';
import { StyledLi, StyledNavLink, StyledUl } from './Navigation.styled';

export default function Navigation() {
  return (
    <StyledUl>
      <StyledLi>
        <StyledNavLink to='/' exact>
          Home
        </StyledNavLink>
      </StyledLi>
      <StyledLi>
        <StyledNavLink to='/myPage'>MyPage</StyledNavLink>
      </StyledLi>
      <StyledLi>
        <StyledNavLink to='/posting'>Posting</StyledNavLink>
      </StyledLi>
      <StyledLi>
        <StyledNavLink to='/setting'>Setting</StyledNavLink>
      </StyledLi>
    </StyledUl>
  );
}
