import React from 'react';
import { StyledLi, StyledNavLink, StyledUl } from './SideNavigation.styled';

export default function SideNavigation() {
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
