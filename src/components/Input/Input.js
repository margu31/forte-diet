import React from "react";
import {
  StyledInputWrapper,
  StyledLabel,
  StyledInput,
  StyledErrorMessage,
} from "./Input.styled";

export default function Input({
  name,
  type,
  placeholder,
  id,
  label,
  onChange,
  onBlur,
  errorMessage,
  autocomplete,
  ...restProps
}) {
  return (
    <StyledInputWrapper>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      <StyledInput
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        autoComplete={autocomplete}
        // autoComplete="off"
        {...restProps}
      ></StyledInput>
      {errorMessage && errorMessage[name] ? (
        <StyledErrorMessage>{errorMessage[name]}</StyledErrorMessage>
      ) : null}
      <StyledErrorMessage></StyledErrorMessage>
    </StyledInputWrapper>
  );
}
