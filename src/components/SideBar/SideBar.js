import React, { useState, useEffect } from 'react';
import { StyledSideBar, StyledSideBarWrapper } from './SideBar.styled';
import { HomeLink, Navigation } from 'components';

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
