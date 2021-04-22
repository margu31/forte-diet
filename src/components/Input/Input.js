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

const Input = React.forwardRef(
  (
    {
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
    },
    ref
  ) => {
    return (
      <StyledInputWrapper {...restProps}>
        {type && <Icons type={type} />}
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
          ref={ref}
          maxLength={maxLength}
          {...restProps}
          onKeyUp={onKeyUp}
          onFocus={onFocus}
        ></StyledInput>
        {errorMessage && errorMessage[name] ? (
          <StyledErrorMessage>{errorMessage[name]}</StyledErrorMessage>
        ) : null}
        {type === "password" ? (
          <Button onClick={changePasswordMode}>
            {<Icons type="showPassword" />}
          </Button>
        ) : null}
      </StyledInputWrapper>
    );
  }
);

export default Input;
