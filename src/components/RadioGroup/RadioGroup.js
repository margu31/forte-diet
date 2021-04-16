import InputRadio from "components/Radio/InputRadio";
import { palette } from "styles";
import { StyledRadioGroup, StyledRadioTitle } from "./RadioGroup.styled";

const RadioGroup = ({
  groupTitle,
  onChange,
  $titleFontSize,
  $titleMarginBottom,
  $backgroundColor,
  ...restProps
}) => {
  return (
    <>
      <StyledRadioTitle
        $titleFontSize={$titleFontSize}
        $titleMarginBottom={$titleMarginBottom}
      >
        {groupTitle}
      </StyledRadioTitle>
      <StyledRadioGroup {...restProps}>
        <InputRadio
          id="breakfast"
          name="type"
          value="아침"
          label="아침"
          $fontSize="1.1"
          $width="86"
          $height="30"
          $hoverBackground={palette.themePrimary}
          $hoverColor={palette.themeDefaultWhite}
          $borderColor={palette.themePrimary}
          $backgroundColor={$backgroundColor}
          onChange={onChange}
        />
        <InputRadio
          id="lunch"
          name="type"
          value="점심"
          label="점심"
          $fontSize="1.1"
          $width="86"
          $height="30"
          $hoverBackground={palette.themePrimary}
          $hoverColor={palette.themeDefaultWhite}
          $borderColor={palette.themePrimary}
          $backgroundColor={$backgroundColor}
          onChange={onChange}
        />
        <InputRadio
          id="dinner"
          name="type"
          value="저녁"
          label="저녁"
          $fontSize="1.1"
          $width="86"
          $height="30"
          $hoverBackground={palette.themePrimary}
          $hoverColor={palette.themeDefaultWhite}
          $borderColor={palette.themePrimary}
          $backgroundColor={$backgroundColor}
          onChange={onChange}
        />
        <InputRadio
          id="snack"
          name="type"
          value="간식"
          label="간식"
          $fontSize="1.1"
          $width="86"
          $height="30"
          $hoverBackground={palette.themePrimary}
          $hoverColor={palette.themeDefaultWhite}
          $borderColor={palette.themePrimary}
          $backgroundColor={$backgroundColor}
          onChange={onChange}
        />
      </StyledRadioGroup>
    </>
  );
};

export default RadioGroup;
