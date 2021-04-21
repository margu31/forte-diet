import Button from "components/Button/Button";
import Form from "components/Form/Form";
import Input from "components/Input/Input";
import InputRadio from "components/Radio/InputRadio";
import {
  StyledButtonGroup,
  StyledRadio,
  StyledSettingInput,
  StyledInputWrapper,
  StyledFormWrapper,
  StyledImage,
} from "./Setting.styled";
// import { ReactComponent as Edit } from "assets/icons/InputIcons/edit.svg";
import { ReactComponent as Edit } from "assets/icons/InputIcons/edit_black.svg";
import { useRef } from "react";

const Setting = ({
  userEmail,
  userNickname,
  userGender,
  userHeight,
  userWeight,
  onChange,
  onSubmit,
  goBack,
}) => {
  const passwordRef = useRef();
  const nicknameRef = useRef();
  const heightRef = useRef();
  const weightRef = useRef();

  const onPasswordEdit = () => {
    passwordRef.current.disabled = false;
  };
  const onNicknameEdit = () => {
    nicknameRef.current.disabled = false;
  };
  const onHeightEdit = () => {
    heightRef.current.disabled = false;
  };
  const onWeightEdit = () => {
    weightRef.current.disabled = false;
  };

  return (
    <StyledFormWrapper>
      <Form legend="정보 수정">
        <StyledInputWrapper>
          <StyledSettingInput>
            <Input
              type="text"
              id="email"
              name="email"
              label="이메일"
              disabled="true"
              defaultValue={userEmail}
            />
          </StyledSettingInput>
          <StyledSettingInput>
            <label htmlFor="password" onClick={onPasswordEdit}>
              <Edit />
            </label>
            <Input
              type="text"
              id="password"
              name="password"
              label="패스워드"
              onChange={onChange}
              disabled="true"
              ref={passwordRef}
            />
          </StyledSettingInput>
          <StyledSettingInput>
            <label htmlFor="nickname" onClick={onNicknameEdit}>
              <Edit />
            </label>
            <Input
              type="text"
              id="nickname"
              name="nickname"
              label="닉네임"
              defaultValue={userNickname}
              onChange={onChange}
              disabled="true"
              ref={nicknameRef}
            />
          </StyledSettingInput>
          <StyledRadio>
            <p>성별</p>
            <InputRadio
              id="male"
              name="gender"
              value="male"
              label="남성"
              onChange={onChange}
            />
            <InputRadio
              id="female"
              name="gender"
              value="female"
              label="여성"
              onChange={onChange}
            />
          </StyledRadio>
          <StyledSettingInput>
            <label htmlFor="height" onClick={onHeightEdit}>
              <Edit />
            </label>
            <Input
              type="text"
              id="height"
              name="height"
              label="신장"
              onChange={onChange}
              defaultValue={userHeight}
              disabled="true"
              ref={heightRef}
            />
          </StyledSettingInput>
          <StyledSettingInput>
            <label htmlFor="weight" onClick={onWeightEdit}>
              <Edit />
            </label>
            <Input
              type="text"
              id="weight"
              name="weight"
              label="몸무게"
              onChange={onChange}
              defaultValue={userWeight}
              disabled="true"
              ref={weightRef}
            />
          </StyledSettingInput>
        </StyledInputWrapper>
        <StyledButtonGroup>
          <Button type="button" onSubmit={goBack}>
            취소
          </Button>
          <Button onSubmit={onSubmit}>수정</Button>
        </StyledButtonGroup>
      </Form>
      <StyledImage />
    </StyledFormWrapper>
  );
};

export default Setting;
