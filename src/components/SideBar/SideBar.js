import React from 'react';
import HomeLink from '../HomeLink/HomeLink';
import SideNavigation from '../Navigation/SideNavigation';
import { StyledSideBar } from './SideBar.styled';

export default function SideBar() {
  return (
    <StyledSideBar>
      <HomeLink />
      <SideNavigation />
    </StyledSideBar>
  );
}
