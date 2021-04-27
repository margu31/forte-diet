import React from "react";
import { StyledModal } from "./Modal.styled";

export const Modal = ({ children, ...restProps }) => {
  return (
    <StyledModal {...restProps}>
      {children}
      {/* <LogInContainer /> */}
    </StyledModal>
  );
};
