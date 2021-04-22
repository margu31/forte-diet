import Button from "components/Button/Button";
import Input from "components/Input/Input";
import InputRadio from "components/Radio/InputRadio";
import RadioGroup from "components/RadioGroup/RadioGroup";
import SignUpRadioGroup from "components/SignUpRadioGroup/SignUpRadioGroup";
import React from "react";
import {
  SignUpFormInput,
  StyledSignUpForm,
  StyledBasicInformationGroup,
  StyledAdditionalInformationGroup,
  StyledSignUpFormRadioGroup,
} from "./SignUpForm.styled";

export default function SignUpForm({
  onChange,
  onBlur,
  errorMessage,
  onSubmit,
  disabled,
  closeModal,
  changePasswordMode,
  isShow,
  onFocus,
}) {
  return (
    <StyledSignUpForm>
      <h3>Basic Information</h3>
      <StyledBasicInformationGroup>
        <SignUpFormInput
          label="Email"
          id="email"
          name="email"
          type="text"
          placeholder="이메일을 입력해주세요."
          onChange={onChange}
          onBlur={onBlur}
          errorMessage={errorMessage}
          a11yHidden={false}
          onFocus={onFocus}
        />
        <SignUpFormInput
          label="Password"
          id="password"
          name="password"
          type="password"
          placeholder="비밀번호를 입력해주세요."
          onChange={onChange}
          onBlur={onBlur}
          errorMessage={errorMessage}
          a11yHidden={false}
          changePasswordMode={changePasswordMode}
          isShow={isShow}
          onFocus={onFocus}
        />
      </StyledBasicInformationGroup>
      <StyledAdditionalInformationGroup>
        <h3>Additional Information</h3>
        <SignUpFormInput
          label="Nickname"
          id="nickname"
          name="nickname"
          type="text"
          placeholder="별명을 입력해주세요."
          onChange={onChange}
          onBlur={onBlur}
          errorMessage={errorMessage}
          a11yHidden={false}
          onFocus={onFocus}
        />
        <SignUpFormInput
          label="Height"
          id="height"
          name="height"
          type="text"
          placeholder="키를 입력해주세요."
          onChange={onChange}
          onBlur={onBlur}
          errorMessage={errorMessage}
          a11yHidden={false}
        />
        <SignUpFormInput
          label="Weight"
          id="weight"
          name="weight"
          type="text"
          placeholder="몸무게를 입력해주세요."
          onChange={onChange}
          onBlur={onBlur}
          errorMessage={errorMessage}
          a11yHidden={false}
        />
        <SignUpRadioGroup groupTitle="Gender" onChange={onChange} />
      </StyledAdditionalInformationGroup>

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
