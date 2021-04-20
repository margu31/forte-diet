import Button from "components/Button/Button";
import { LoginFormInput, StyledForm } from "./LoginForm.styled";
import { ReactComponent as Fox } from "assets/logos/logo-fox.svg";

export const LoginForm = ({
  onChange,
  onBlur,
  errorMessage,
  onSubmit,
  disabled,
  closeModal,
  changePasswordMode,
  isShow,
}) => {
  return (
    <StyledForm>
      <span>우연히, 식단</span>
      <LoginFormInput
        label="email"
        id="email"
        name="email"
        type="email"
        placeholder="이메일을 입력해주세요."
        onChange={onChange}
        onBlur={onBlur}
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
        onBlur={onBlur}
        errorMessage={errorMessage}
        a11yHidden={true}
        changePasswordMode={changePasswordMode}
        isShow={isShow}
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
    </StyledForm>
  );
};
