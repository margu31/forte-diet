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
      disabled,
      ariaLabel,
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
          type={isShow === true ? "text" : isShow === false ? "password" : type}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          onKeyPress={onKeyPress}
          autoComplete="off"
          ref={ref}
          maxLength={maxLength}
          onKeyUp={onKeyUp}
          onFocus={onFocus}
          disabled={disabled ? true : false}
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
        {type === "password" ? (
          <Button onClick={changePasswordMode}>
            {isShow === true ? (
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
