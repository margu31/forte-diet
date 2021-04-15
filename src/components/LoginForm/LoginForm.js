import Button from "components/Button/Button";
import Input from "components/Input/Input";
import { StyledForm } from "./LoginForm.styled";
import { ReactComponent as Fox } from "assets/logos/logo-fox.svg";

export const LoginForm = ({
  onChange,
  onBlur,
  errorMessage,
  onSubmit,
  disabled,
}) => {
  return (
    <StyledForm>
      <Fox />
      <Input
        label="아이디"
        id="id"
        name="id"
        type="id"
        placeholder="아이디를 입력해주세요."
        onChange={onChange}
        onBlur={onBlur}
        errorMessage={errorMessage}
        $a11yHidden="a11yHidden"
      />
      <Input
        label="비밀번호"
        id="password"
        name="password"
        type="password"
        placeholder="비밀번호 입력해주세요."
        onChange={onChange}
        onBlur={onBlur}
        errorMessage={errorMessage}
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
      <Button type="button">X</Button>
    </StyledForm>
  );
};
