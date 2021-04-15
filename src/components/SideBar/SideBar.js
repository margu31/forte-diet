import React, { useState, useEffect } from 'react';
import HomeLink from '../HomeLink/HomeLink';
import Navigation from '../Navigation/Navigation';
import { StyledSideBar, StyledSideBarWrapper } from './SideBar.styled';

export default function SideBar() {
  const [sideBarHeight, setSideBarHeight] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setSideBarHeight(window.scrollY);
    });
  }, []);

  return (
    <StyledSideBarWrapper>
      <StyledSideBar sideBarHeight={sideBarHeight}>
        <HomeLink />
        <Navigation />
      </StyledSideBar>
    </StyledSideBarWrapper>
  );
}
