import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signInAction } from "redux/modules/auth/auth";
import { isEmail, isPassword } from "utils/validation/LogInValidation";
import { LoginForm } from "components/LoginForm/LoginForm";
import { handleSignInWithEmailAndPassword } from "../../api/auth";

const formValue = {
  email: null,
  password: null,
  hasError: {
    email: null,
    password: null,
  },
};

export default function LogInContainer({
  a11yHidden,
  closeModal,
  ...restProps
}) {
  const dispatch = useDispatch();

  const [state, setState] = useState(formValue);
  const [isShow, setIsShow] = useState(false);

  const onChange = (e) => {
    e.preventDefault();
    setState({ ...state, [e.target.name]: e.target.value.trim() });
  };

  const emailValid = (value) => {
    if (!isEmail(value)) {
      setState({
        ...state,
        hasError: {
          ...state.hasError,
          email: "이메일 형식에 맞지 않습니다.",
        },
      });
    } else {
      setState({
        ...state,
        hasError: {
          ...state.hasError,
          id: null,
        },
      });
    }
  };

  const passwordlValid = (value) => {
    if (!isPassword(value)) {
      setState({
        ...state,
        hasError: {
          ...state.hasError,
          password: "비밀번호 형식에 맞지 않습니다.",
        },
      });
    } else {
      setState({
        ...state,
        hasError: {
          ...state.hasError,
          password: null,
        },
      });
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const Formdata = new FormData();
    Object.entries(state).forEach(([key, value]) => {
      Formdata.append(key, value);
    });
    const { email, password } = Object.fromEntries(Formdata.entries());

    dispatch(handleSignInWithEmailAndPassword(email, password, signInAction));

    closeModal();
  };

  const onBlur = (e) => {
    if (e.target.name === "email") {
      emailValid(e.target.value);
    } else {
      state.password = e.target.value;
      passwordlValid(e.target.value);
    }
  };

  window.addEventListener("keyup", (e) => {
    if (e.key === "Escape") {
      closeModal();
    }
  });

  const changePasswordMode = (e) => {
    e.preventDefault();
    setIsShow(!isShow);
    e.target.focus();
  };

  const isDisabled =
    state.hasError.email ||
    state.hasError.password ||
    !state.email ||
    !state.password;
  console.log(isShow);
  return (
    <LoginForm
      onChange={onChange}
      onBlur={onBlur}
      onSubmit={onSubmit}
      disabled={isDisabled}
      errorMessage={state.hasError}
      closeModal={closeModal}
      {...restProps}
      changePasswordMode={changePasswordMode}
      isShow={isShow}
    />
  );
}
