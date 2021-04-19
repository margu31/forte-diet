import SettingContainer from "containers/SettingContainer/SettingContainer";
import React from "react";
import { StyledBackground, StyledSettingPage } from "./SettingPage.styled";

export default function SettingPage({ history }) {
  return (
    <StyledBackground>
      <StyledSettingPage>
        <SettingContainer history={history} />
      </StyledSettingPage>
    </StyledBackground>
  );
}
