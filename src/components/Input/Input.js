import React from "react";
import {
  StyledInputWrapper,
  StyledLabel,
  StyledInput,
  StyledErrorMessage,
  StyledlabelHidden,
} from "./Input.styled";
import { Button, Icons } from "components";

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
      readOnly,
      ariaLabel,
      changeCheckPassword,
      showCheckpassword,
      ...restProps
    },
    ref
  ) => {
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
          type={
            isShow || showCheckpassword === true
              ? "text"
              : isShow || showCheckpassword === false
              ? "password"
              : type
          }
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          onKeyPress={onKeyPress}
          autoComplete="off"
          ref={ref}
          maxLength={maxLength}
          onKeyUp={onKeyUp}
          onFocus={onFocus}
          readOnly={readOnly}
          aria-label={ariaLabel}
          // aria-invalid={errorMessage ? true : null}
          // aria-describedby={errorMessage ? "error-msg" : null}
          {...restProps}
        ></StyledInput>
        {errorMessage && errorMessage[name] ? (
          <StyledErrorMessage tabIndex="0">
            {errorMessage[name]}
          </StyledErrorMessage>
        ) : null}
        {name === "password" ? (
          <Button onClick={changePasswordMode}>
            {isShow === true ? (
              <Icons type="showPassword" />
            ) : (
              <Icons type="eyeSlash" />
            )}
          </Button>
        ) : null}
        {name === "checkpassword" ? (
          <Button onClick={changeCheckPassword}>
            {showCheckpassword === true ? (
              <Icons type="showPassword" />
            ) : (
              <Icons type="eyeSlash" />
            )}
          </Button>
        ) : null}
      </StyledInputWrapper>
    );
  }
);

export default Input;
