import React from 'react';
import { StyledModal } from './Modal.styled';

const Modal = ({ children, ...restProps }) => {
  return (
    <StyledModal {...restProps}>
      {children}
      {/* <LogInContainer /> */}
    </StyledModal>
  );
};

export default Modal;
