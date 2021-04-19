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
} from "./Setting.styled";
import { ReactComponent as Edit } from "assets/icons/InputIcons/edit.svg";

const Setting = ({ userId, goBack }) => {
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
              id="email"
              label="이메일"
              disabled="true"
              // readOnly={true}
              defaultValue={userId}
            />
          </StyledSettingInput>
          <StyledSettingInput>
            <Input type="text" id="password" label="패스워드" />
            <Edit />
          </StyledSettingInput>
          <StyledSettingInput>
            <Input
              type="text"
              id="nickname"
              label="닉네임"
              // defaultValue={userNickname}
            />
            <Edit />
          </StyledSettingInput>
          <StyledRadio>
            <p>성별</p>
            <InputRadio id="male" name="gender" value="male" label="남성" />
            <InputRadio id="female" name="gender" value="female" label="여성" />
          </StyledRadio>
          <StyledSettingInput>
            <Input type="text" id="hieght" label="신장" />
            <Edit />
          </StyledSettingInput>
          <StyledSettingInput>
            <Input type="text" id="weight" label="몸무게" />
            <Edit />
          </StyledSettingInput>
        </StyledInputWrapper>
        <StyledButtonGroup>
          <Button type="button" onSubmit={goBack}>
            취소
          </Button>
          <Button>수정</Button>
        </StyledButtonGroup>
      </Form>
    </StyledFormWrapper>
  );
};

export default Setting;
