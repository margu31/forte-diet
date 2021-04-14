import React, { useEffect, useState } from 'react';
import SideBar from 'components/SideBar/SideBar';

export default function SideBarContainer() {
  const [sideBarHeight, setSideBarHeight] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', e => {
      setSideBarHeight(window.scrollY);
    });
  }, []);

  return <StyledSideBar sideBarHeight={sideBarHeight} />;
}
