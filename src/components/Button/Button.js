import React from "react";
import { StyledButton } from "./Button.styled";

export default function Button({ children, ...restProps }) {
  return <StyledButton {...restProps}>{children}</StyledButton>;
}
