import React from 'react';
import {
  HomeIcon,
  IconContainer,
  MealIcon,
  PostingIcon,
  SettingIcon,
  StyledLi,
  StyledNavLink,
  StyledUl
} from './Navigation.styled';

export default function Navigation() {
  return (
    <StyledUl>
      <StyledLi>
        <StyledNavLink to='/' exact>
          <IconContainer>
            <HomeIcon />
          </IconContainer>
          Home
        </StyledNavLink>
      </StyledLi>
      <StyledLi>
        <StyledNavLink to='/myPage'>
          <IconContainer>
            <MealIcon />
          </IconContainer>
          MyPage
        </StyledNavLink>
      </StyledLi>
      <StyledLi>
        <StyledNavLink to='/posting'>
          <IconContainer>
            <PostingIcon />
          </IconContainer>
          Posting
        </StyledNavLink>
      </StyledLi>
      <StyledLi>
        <StyledNavLink to='/setting'>
          <IconContainer>
            <SettingIcon />
          </IconContainer>
          Setting
        </StyledNavLink>
      </StyledLi>
    </StyledUl>
  );
}
