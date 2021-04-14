import Button from "components/Button/Button";
import Form from "components/Form/Form";
import Input from "components/Input/Input";
import Title from "components/Title/Title";
import { palette } from "styles/index";

const Setting = () => {
  return (
    <>
      <Title>회원 정보 수정</Title>
      <Form legend="정보 수정">
        <div>
          <Button
            type="button"
            $width="100"
            $height="30"
            $fontSize="1.2"
            $backgroundColor="#9f9f9f33"
            $color={palette.themeDefault}
            $hoverBackground={palette.themeBrightGray}
          >
            취소
          </Button>
          <Button
            $width="100"
            $height="30"
            $fontSize="1.2"
            $backgroundColor="#f2683033"
            $color={palette.themePrimaryThick}
            $hoverBackground={palette.themePrimaryThick}
            $hoverColor={palette.themeDefaultWhite}
            // onSubmit={onSubmit}
          >
            수정
          </Button>
        </div>
      </Form>
    </>
  );
};

export default Setting;
