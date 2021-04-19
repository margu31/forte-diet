import Button from "components/Button/Button";
import Input from "components/Input/Input";
import React from "react";
import { SignUpFormInput, StyledSignUpForm } from "./SignUpForm.styled";

export default function SignUpForm({
  onChange,
  onBlur,
  errorMessage,
  onSubmit,
  disabled,
  closeModal,
}) {
  return (
    <StyledSignUpForm>
      <SignUpFormInput
        label="이메일"
        id="email"
        name="email"
        type="email"
        placeholder="이메일을 입력해주세요."
        onChange={onChange}
        onBlur={onBlur}
        errorMessage={errorMessage}
        a11yHidden={true}
      />
      <SignUpFormInput
        label="패스워드"
        id="password"
        name="password"
        type="password"
        placeholder="비밀번호를 입력해주세요."
        onChange={onChange}
        onBlur={onBlur}
        errorMessage={errorMessage}
        a11yHidden={true}
      />
      <SignUpFormInput
        label="별명"
        id="nickname"
        name="nickname"
        type="nickname"
        placeholder="별명을 입력해주세요."
        onChange={onChange}
        onBlur={onBlur}
        errorMessage={errorMessage}
        a11yHidden={true}
      />
      <SignUpFormInput
        label="신장"
        id="height"
        name="height"
        type="height"
        placeholder="키를 입력해주세요."
        onChange={onChange}
        onBlur={onBlur}
        errorMessage={errorMessage}
        a11yHidden={true}
      />
      <SignUpFormInput
        label="몸무게"
        id="weight"
        name="weight"
        type="weight"
        placeholder="몸무게를 입력해주세요."
        onChange={onChange}
        onBlur={onBlur}
        errorMessage={errorMessage}
        a11yHidden={true}
      />
      <SignUpFormInput
        label="성별"
        id="gender"
        name="gender"
        type="gender"
        placeholder="성별을 입력해주세요."
        onChange={onChange}
        onBlur={onBlur}
        errorMessage={errorMessage}
        a11yHidden={true}
      />
      <Button
        $width="300"
        $height="30"
        type="submit"
        onSubmit={onSubmit}
        disabled={disabled}
      >
        확인
      </Button>
      <Button type="button" onClick={closeModal}>
        X
      </Button>
    </StyledSignUpForm>
  );
}
