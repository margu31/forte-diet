import SettingContainer from 'containers/SettingContainer/SettingContainer';
import React, { useEffect } from 'react';
import { StyledBackground, StyledSettingPage } from './SettingPage.styled';

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
      <StyledSettingPage>
        <SettingContainer history={history} />
      </StyledSettingPage>
    </StyledBackground>
  );
}
