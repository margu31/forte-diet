import React from "react";
import { StyledButton } from "./Button.styled";

export default function Button({ onSubmit, children, ...restProps }) {
  return (
    <StyledButton onClick={onSubmit} {...restProps}>
      {children}
    </StyledButton>
  );
}
