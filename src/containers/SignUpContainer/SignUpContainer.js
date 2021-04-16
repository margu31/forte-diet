import SignUpForm from "components/SignUp/SignUpForm";
import React, { useState } from "react";
import { isEmail, isPassword } from "utils/validation/LogInValidation";
import {
  isHeight,
  isWeight,
  isNickname,
} from "utils/validation/SignUpValidation";
import { signUpWithEmailAndPassword } from "api/auth";

const formValue = {
  id: null,
  password: null,
  email: null,
  gender: null,
  height: null,
  nickname: null,
  weight: null,
  hasError: {
    id: null,
    password: null,
    email: null,
    gender: null,
    height: null,
    nickname: null,
    weight: null,
  },
};

export default function SignUpContainer({ closeModal, ...restProps }) {
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
          id: "입력 형식에 맞지 않습니다.",
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
          password: "입력 형식에 맞지 않습니다.",
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

  const idlValid = (value) => {
    if (!isEmail(value)) {
      setState({
        ...state,
        hasError: {
          ...state.hasError,
          email: "입력 형식에 맞지 않습니다.",
        },
      });
    } else {
      setState({
        ...state,
        hasError: {
          ...state.hasError,
          email: null,
        },
      });
    }
  };

  const heightlValid = (height) => {
    if (!isHeight(height)) {
      setState({
        ...state,
        hasError: {
          ...state.hasError,
          height: "입력 형식에 맞지 않습니다.",
        },
      });
    } else {
      setState({
        ...state,
        hasError: {
          ...state.hasError,
          height: null,
        },
      });
    }
  };

  const weightValid = (weight) => {
    if (!isWeight(weight)) {
      setState({
        ...state,
        hasError: {
          ...state.hasError,
          weight: "입력 형식에 맞지 않습니다.",
        },
      });
    } else {
      setState({
        ...state,
        hasError: {
          ...state.hasError,
          weight: null,
        },
      });
    }
  };

  const nicknameValid = (nickname) => {
    if (!isNickname(nickname)) {
      setState({
        ...state,
        hasError: {
          ...state.hasError,
          nickname: "입력 형식에 맞지 않습니다.",
        },
      });
    } else {
      setState({
        ...state,
        hasError: {
          ...state.hasError,
          nickname: null,
        },
      });
    }
  };

  const genderValid = () => {};

  const onSubmit = (e) => {
    e.preventDefault();
    const Formdata = new FormData();
    Object.entries(state).forEach(([key, value]) => {
      Formdata.append(key, value);
      console.log(`${key}, ${value}`);
    });

    const { id, email, password, weight, height, gender, nickname } = state;

    signUpWithEmailAndPassword(id, password, {
      email,
      weight,
      height,
      gender,
      nickname,
    });
    closeModal();
  };

  const onBlur = (e) => {
    if (e.target.name === "id") {
      emailValid(e.target.value);
    } else if (e.target.name === "password") {
      passwordlValid(e.target.value);
    } else if (e.target.name === "email") {
      idlValid(e.target.value);
    } else if (e.target.name === "height") {
      heightlValid(e.target.value);
    } else if (e.target.name === "weight") {
      weightValid(e.target.value);
    } else if (e.target.name === "nickname") {
      nicknameValid(e.target.value);
    }
  };

  const onKeyUp = (e) => {
    if (e.key === "Escape") {
      closeModal();
    }
  };

  const isDisabled =
    state.hasError.id ||
    state.hasError.password ||
    !state.id ||
    !state.password;

  return (
    <SignUpForm
      onChange={onChange}
      onBlur={onBlur}
      onSubmit={onSubmit}
      disabled={isDisabled}
      errorMessage={state.hasError}
      closeModal={closeModal}
      onKeyUp={onKeyUp}
      {...restProps}
    />
  );
}
