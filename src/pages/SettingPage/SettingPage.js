import React, { useEffect } from 'react';
import { StyledBackground, StyledSettingPage } from './SettingPage.styled';
import { SettingContainer, HealthBarContainer, UserBar } from 'containers';

export default function SettingPage({ history }) {
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, []);

  return (
    <StyledBackground>
      <UserBar />
      <StyledSettingPage>
        <SettingContainer history={history} />
      </StyledSettingPage>
      <HealthBarContainer />
    </StyledBackground>
  );
}
