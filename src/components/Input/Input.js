import React from "react";
import {
  StyledInputWrapper,
  StyledLabel,
  StyledInput,
  StyledErrorMessage,
  StyledlabelHidden,
} from "./Input.styled";

export default function Input({
  name,
  type,
  placeholder,
  id,
  label,
  onChange,
  onBlur,
  onKeyPress,
  errorMessage,
  autocomplete,
  $a11yHidden,
  maxLength,
  ...restProps
}) {
  return (
    <StyledInputWrapper>
      {$a11yHidden ? (
        <StyledlabelHidden htmlFor={id}>{label}</StyledlabelHidden>
      ) : (
        <StyledLabel htmlFor={id}>{label}</StyledLabel>
      )}
      <StyledInput
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        onKeyPress={onKeyPress}
        autoComplete={autocomplete}
        // autoComplete="off"
        maxLength={maxLength}
        {...restProps}
      ></StyledInput>
      {errorMessage && errorMessage[name] ? (
        <StyledErrorMessage>{errorMessage[name]}</StyledErrorMessage>
      ) : null}
      <StyledErrorMessage></StyledErrorMessage>
    </StyledInputWrapper>
  );
}
