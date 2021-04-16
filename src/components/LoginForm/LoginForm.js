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
  onKeyUp,
}) => {
  return (
    <StyledForm>
      <span>우연히, 식단</span>
      <LoginFormInput
        label="이메일"
        id="id"
        name="id"
        type="id"
        placeholder="이메일을 입력해주세요."
        onChange={onChange}
        onBlur={onBlur}
        errorMessage={errorMessage}
        onKeyUp={onKeyUp}
      />
      <LoginFormInput
        label="비밀번호"
        id="password"
        name="password"
        type="password"
        placeholder="비밀번호 입력해주세요."
        onChange={onChange}
        onBlur={onBlur}
        errorMessage={errorMessage}
        onKeyUp={onKeyUp}
        $a11yHidden="a11yHidden"
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
