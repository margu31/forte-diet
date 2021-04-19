import SettingContainer from "containers/SettingContainer/SettingContainer";
import React from "react";
import { StyledSettingPage } from "./SettingPage.styled";

export default function SettingPage({ history }) {
  return (
    <StyledSettingPage>
      <SettingContainer history={history} />
    </StyledSettingPage>
  );
}
