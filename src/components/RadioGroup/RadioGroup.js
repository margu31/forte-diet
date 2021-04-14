import InputRadio from "components/Radio/InputRadio";
import { palette } from "styles";
import { StyledRadioGroup, StyledRadioTitle } from "./RadioGroup.styled";

const RadioGroup = ({
  groupTitle,
  $titleFontSize,
  $titleMarginBottom,
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
          name="mealType"
          value="breakfast"
          label="아침"
          $fontSize="1.1"
          $width="85"
          $height="30"
          $hoverBackground={palette.themePrimary}
          $hoverColor={palette.themeDefaultWhite}
          $borderColor={palette.themePrimary}
        />
        <InputRadio
          id="lunch"
          name="mealType"
          value="lunch"
          label="점심"
          $fontSize="1.1"
          $width="85"
          $height="30"
          $hoverBackground={palette.themePrimary}
          $hoverColor={palette.themeDefaultWhite}
          $borderColor={palette.themePrimary}
        />
        <InputRadio
          id="dinner"
          name="mealType"
          value="dinner"
          label="저녁"
          $fontSize="1.1"
          $width="85"
          $height="30"
          $hoverBackground={palette.themePrimary}
          $hoverColor={palette.themeDefaultWhite}
          $borderColor={palette.themePrimary}
        />
        <InputRadio
          id="snack"
          name="mealType"
          value="snack"
          label="간식"
          $fontSize="1.1"
          $width="85"
          $height="30"
          $hoverBackground={palette.themePrimary}
          $hoverColor={palette.themeDefaultWhite}
        />
      </StyledRadioGroup>
    </>
  );
};

export default RadioGroup;
