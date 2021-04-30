import React, { forwardRef } from "react";
import { StyledModal } from "./Modal.styled";

const Modal = forwardRef(({ children, ...restProps }, ref) => {
  return (
    <StyledModal ref={ref} {...restProps}>
      {children}
    </StyledModal>
  );
});

export default Modal;
