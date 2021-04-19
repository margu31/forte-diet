import Button from "components/Button/Button";
import Icons from "components/Icon/Icons";
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
  onKeyUp,
  icon,
  password,
  maxLength,
  ...restProps
}) {
  return (
    <StyledInputWrapper {...restProps}>
      {type && <Icons type={type} />}
      <StyledlabelHidden htmlFor={id}>{label}</StyledlabelHidden>
      {/* {$a11yHidden ? (
        <StyledlabelHidden htmlFor={id}>{label}</StyledlabelHidden>
      ) : (
        <StyledLabel htmlFor={id}>{label}</StyledLabel>
      )} */}
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
        onKeyUp={onKeyUp}
      ></StyledInput>
      {errorMessage && errorMessage[name] ? (
        <StyledErrorMessage>{errorMessage[name]}</StyledErrorMessage>
      ) : null}
      {type === "password" ? (
        <Button>{<Icons type="showPassword" />}</Button>
      ) : null}
    </StyledInputWrapper>
  );
}
