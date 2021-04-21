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
  a11yHidden,
  onKeyUp,
  icon,
  password,
  maxLength,
  changePasswordMode,
  isShow,
  onFocus,
  ...restProps
}) {
  return (
    <StyledInputWrapper {...restProps}>
      {a11yHidden ? (
        <StyledlabelHidden htmlFor={id}>{label}</StyledlabelHidden>
      ) : (
        <StyledLabel htmlFor={id}>{label}</StyledLabel>
      )}
      <StyledInput
        id={id}
        name={name}
        type={isShow === true ? "text" : isShow === false ? "password" : type}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        onKeyPress={onKeyPress}
        autoComplete="off"
        maxLength={maxLength}
        {...restProps}
        onKeyUp={onKeyUp}
        onFocus={onFocus}
      ></StyledInput>
      {errorMessage && errorMessage[name] ? (
        <StyledErrorMessage>{errorMessage[name]}</StyledErrorMessage>
      ) : null}
      {type === "password" ? (
        isShow ? (
          <Button onClick={changePasswordMode}>
            {<Icons type="showPassword" />}
          </Button>
        ) : (
          <Button onClick={changePasswordMode}>
            {<Icons type="eyeSlash" />}
          </Button>
        )
      ) : null}
    </StyledInputWrapper>
  );
}
