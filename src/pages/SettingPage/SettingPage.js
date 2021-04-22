import SettingContainer from 'containers/SettingContainer/SettingContainer';
import React, { useEffect } from 'react';
import { StyledBackground, StyledSettingPage } from './SettingPage.styled';
import HealthBarContainer from 'containers/HealthBarContainer/HealthBarContainer';
import UserBar from 'containers/UserBar/UserBar';

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
