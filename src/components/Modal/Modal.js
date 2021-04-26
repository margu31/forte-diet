import React from "react";
import { StyledModal } from "./Modal.styled";

export const Modal = ({ children }) => {
  return (
    <StyledModal>
      {children}
      {/* <LogInContainer /> */}
    </StyledModal>
  );
};
