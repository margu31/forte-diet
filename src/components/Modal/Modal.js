import LogInContainer from "containers/LogInContainer/LogInContainer";
import React from "react";
import { StyledModal } from "./Modal.styled";

export const Modal = (child) => {
  return (
    <StyledModal>
      {child}
      {/* <LogInContainer /> */}
    </StyledModal>
  );
};
