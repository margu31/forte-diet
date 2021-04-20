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
import { useRef, useState } from "react";

const Setting = ({
  userEmail,
  userNickname,
  userGender,
  userHeight,
  userWeight,
  // userId,
  onChange,
  onSubmit,
  goBack,
}) => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    nickname: "",
    gender: "",
    hieght: "",
    weight: "",
  });

  const inputsRef = useRef();
  // const [email, password, nickname, gender, hieght, weight] = inputs;

  // const onChangeValue = (e) => {
  //   const { value, name } = e.target;
  //   setInputs({
  //     ...inputs,
  //     [name]: value,
  //   });
  // };

  const onClickEdit = () => {
    inputsRef.current.focus();
  };

  return (
    <StyledFormWrapper>
      <Form legend="정보 수정">
        <StyledInputWrapper>
          {/* <StyledSettingInput
              type="text"
              id="email"
              label="이메일"
              // readOnly={true}
            />
            <StyledSettingInput type="text" id="password" label="패스워드" />
            <StyledSettingInput
              type="text"
              id="nickname"
              label="닉네임"
              // defaultValue={userNickname}
            />
            <StyledRadio>
              <p>성별</p>
              <InputRadio id="male" name="gender" value="male" label="남성" />
              <InputRadio
                id="female"
                name="gender"
                value="female"
                label="여성"
              />
            </StyledRadio>
            <StyledSettingInput type="text" id="hieght" label="신장" />
            <StyledSettingInput type="text" id="weight" label="몸무게" /> */}

          <StyledSettingInput>
            <Input
              type="text"
              // type="email"
              id="email"
              name="email"
              label="이메일"
              disabled="true"
              // readOnly={true}
              defaultValue={userEmail}
            />
          </StyledSettingInput>
          <StyledSettingInput>
            <Input
              type="text"
              id="password"
              name="password"
              label="패스워드"
              onChange={onChange}
              // ref={inputsRef}
            />
            <Edit onClick={onClickEdit} />
          </StyledSettingInput>
          <StyledSettingInput>
            <Input
              type="text"
              // type="password"
              id="nickname"
              name="nickname"
              label="닉네임"
              defaultValue={userNickname}
              onChange={onChange}
              // ref={inputsRef}
            />
            <Edit onClick={onClickEdit} />
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
            <Input
              type="text"
              id="hieght"
              name="hieght"
              label="신장"
              onChange={onChange}
              defaultValue={userHeight}
            />
            <Edit />
          </StyledSettingInput>
          <StyledSettingInput>
            <Input
              type="text"
              id="weight"
              name="weight"
              label="몸무게"
              onChange={onChange}
              defaultValue={userWeight}
            />
            <Edit />
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
