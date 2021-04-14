import React from 'react';
import HomeLink from '../HomeLink/HomeLink';
import SideNavigation from '../Navigation/SideNavigation';
import { StyledSideBar, StyledSideBarWrapper } from './SideBar.styled';

export default function SideBar({ sideBarHeight }) {
  return (
    <StyledSideBarWrapper>
      <StyledSideBar sideBarHeight={sideBarHeight}>
        <HomeLink />
        <SideNavigation />
      </StyledSideBar>
    </StyledSideBarWrapper>
  );
}
