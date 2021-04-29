import Button from "components/Button/Button";
import Title from "components/Title/Title";
import {
  LoginFormInput,
  LoginFormSubmitButton,
  StyledForm,
  LoginFormCloseButton,
} from "./LoginForm.styled";

export const LoginForm = ({
  onChange,
  onKeyUp,
  errorMessage,
  onSubmit,
  // onBlur,
  disabled,
  closeModal,
  changePasswordMode,
  isShow,
}) => {
  return (
    <StyledForm>
      <Title>로그인</Title>
      <LoginFormInput
        label="email"
        id="email"
        name="email"
        type="email"
        placeholder="이메일을 입력해주세요."
        onChange={onChange}
        onKeyUp={onKeyUp}
        // onBlur={onBlur}
        errorMessage={errorMessage}
        a11yHidden={true}
      />
      <LoginFormInput
        label="비밀번호"
        id="password"
        name="password"
        type="password"
        placeholder="비밀번호를 입력해주세요."
        onChange={onChange}
        onKeyUp={onKeyUp}
        // onBlur={onBlur}
        errorMessage={errorMessage}
        a11yHidden={true}
        changePasswordMode={changePasswordMode}
        isShow={isShow}
      />
      <LoginFormSubmitButton
        $width="300"
        $height="30"
        type="submit"
        onSubmit={onSubmit}
        disabled={disabled}
      >
        확인
      </LoginFormSubmitButton>
      <LoginFormCloseButton type="button" onClick={closeModal}>
        X
      </LoginFormCloseButton>
    </StyledForm>
  );
};
