import Button from "components/Button/Button";
import Form from "components/Form/Form";
import InputRadio from "components/Radio/InputRadio";
import { StyledRadio, StyledSettingInput } from "./Setting.styled";

const Setting = () => {
  return (
    <>
      <Form legend="정보 수정">
        <StyledSettingInput
          type="text"
          id="email"
          label="이메일"
          readOnly="true"
        />
        <StyledSettingInput type="text" id="password" label="패스워드" />
        <StyledSettingInput type="text" id="nickname" label="닉네임" />
        <StyledRadio>
          <p>성별</p>
          <InputRadio id="male" name="gender" value="male" label="남성" />
          <InputRadio id="female" name="gender" value="female" label="여성" />
        </StyledRadio>
        <StyledSettingInput type="text" id="hieght" label="신장" />
        <StyledSettingInput type="text" id="weight" label="몸무게" />
        <div>
          <Button type="button">취소</Button>
          <Button>수정</Button>
        </div>
      </Form>
    </>
  );
};

export default Setting;
