import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signInAction } from "redux/modules/auth/auth";
import { isEmail, isPassword } from "utils/validation/LogInValidation";
import { handleSignInWithEmailAndPassword } from "api/auth";
import { LoginForm } from "components/LoginForm/LoginForm";

const formValue = {
  id: null,
  password: null,
  hasError: {
    id: null,
    password: null,
  },
};

// const ShowPaasord = false;

export default function LogInContainer({
  a11yHidden,
  closeModal,
  ...restProps
}) {
  const dispatch = useDispatch();

  const [state, setState] = useState(formValue);
  const onChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value.trim() });
  };

  const emailValid = (value) => {
    if (!isEmail(value)) {
      setState({
        ...state,
        hasError: {
          ...state.hasError,
          id: "이메일 형식에 맞지 않습니다.",
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
      console.log(`${key}, ${value}`);
    });
    dispatch(
      handleSignInWithEmailAndPassword(state.id, state.password, signInAction)
    );

    closeModal();
  };

  const onBlur = (e) => {
    if (e.target.name === "id") {
      emailValid(e.target.value);
    } else {
      state.password = e.target.value;
      passwordlValid(e.target.value);
    }
  };

  const onKeyUp = (e) => {
    if (e.key === "Escape") {
      closeModal();
    }
  };

  // const ChangePasswordMode = () => {
  //   setState(({ isPasswordVisible }) => ({
  //     isPasswordVisible: !isPasswordVisible,
  //   }));
  // };

  const isDisabled =
    state.hasError.id ||
    state.hasError.password ||
    !state.id ||
    !state.password;

  return (
    <LoginForm
      onChange={onChange}
      onBlur={onBlur}
      onSubmit={onSubmit}
      disabled={isDisabled}
      errorMessage={state.hasError}
      closeModal={closeModal}
      onKeyUp={onKeyUp}
      {...restProps}
      a11yHidden={a11yHidden}
    />
  );
}
