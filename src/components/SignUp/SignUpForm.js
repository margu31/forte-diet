import React from 'react';
import {
  SignUpFormInput,
  StyledSignUpForm,
  SignUpFormCloseButton,
  SignUpFormSubmitButton
} from './SignUpForm.styled';
import { SignUpRadioGroup, Title } from 'components';

export default function SignUpForm({
  onChange,
  onBlur,
  errorMessage,
  onSubmit,
  disabled,
  closeModal,
  changePasswordMode,
  isShow,
  onFocus
}) {
  return (
    <StyledSignUpForm>
      <Title>회원가입</Title>
      <SignUpFormInput
        label='이메일'
        id='email'
        name='email'
        type='text'
        placeholder='이메일을 입력해주세요.'
        onChange={onChange}
        onBlur={onBlur}
        errorMessage={errorMessage}
        a11yHidden={false}
        onFocus={onFocus}
      />
      <SignUpFormInput
        label='비밀번호'
        id='password'
        name='password'
        type='password'
        placeholder='비밀번호를 입력해주세요.'
        onChange={onChange}
        onBlur={onBlur}
        errorMessage={errorMessage}
        a11yHidden={false}
        changePasswordMode={changePasswordMode}
        isShow={isShow}
        onFocus={onFocus}
      />
      <SignUpFormInput
        label='비밀번호 확인'
        id='checkpassword'
        name='checkpassword'
        type='password'
        placeholder='비밀번호 확인'
        onChange={onChange}
        onBlur={onBlur}
        errorMessage={errorMessage}
        a11yHidden={false}
        changePasswordMode={changePasswordMode}
        isShow={isShow}
        onFocus={onFocus}
      />
      <SignUpFormInput
        label='닉네임'
        id='nickname'
        name='nickname'
        type='text'
        placeholder='별명을 입력해주세요.'
        onChange={onChange}
        onBlur={onBlur}
        errorMessage={errorMessage}
        a11yHidden={false}
        onFocus={onFocus}
      />
      <SignUpFormInput
        label='키'
        id='height'
        name='height'
        type='text'
        placeholder='키를 입력해주세요.'
        onChange={onChange}
        onBlur={onBlur}
        errorMessage={errorMessage}
        a11yHidden={false}
      />
      <SignUpFormInput
        label='몸무게'
        id='weight'
        name='weight'
        type='text'
        placeholder='몸무게를 입력해주세요.'
        onChange={onChange}
        onBlur={onBlur}
        errorMessage={errorMessage}
        a11yHidden={false}
      />
      <SignUpRadioGroup groupTitle='성별' onChange={onChange} />

      <SignUpFormSubmitButton type='submit' onSubmit={onSubmit} disabled={disabled}>
        확인
      </SignUpFormSubmitButton>
      <SignUpFormCloseButton type='button' onClick={closeModal}>
        X
      </SignUpFormCloseButton>
    </StyledSignUpForm>
  );
}
