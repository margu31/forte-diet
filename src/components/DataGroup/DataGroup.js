import Input from "components/Input/Input";
import RadioGroup from "components/RadioGroup/RadioGroup";
import { palette } from "styles/index";
import StyledDataGroup from "./DataGroup.styled";

const DataGroup = ({ onChange }) => {
  const today = new Date();
  const year = today.getFullYear();
  const getMonth = today.getMonth() + 1;
  const month = getMonth >= 10 ? getMonth : "0" + getMonth;
  const date = today.getDate();

  const maxDate = `${year}-${month}-${date}`;

  // console.log(maxDate);

  return (
    <StyledDataGroup>
      <Input
        type="file"
        id="postingFile"
        name="postingFile"
        label="사진 등록"
        onChange={onChange}
      />
      <div className="collection">
        <Input
          type="date"
          id="postingDate"
          name="postingDate"
          label="Date"
          onChange={onChange}
          required
          $labelFontSize="1.2"
          $width="320"
          $height="30"
          $marginBottom="10"
          $backgroundColor={palette.themeBrightYellow}
          $borderColor={palette.themePrimary}
          $paddingSide="10"
          max={maxDate}
        />
        <RadioGroup
          groupTitle="Type"
          $titleFontSize="1.1"
          $titleMarginBottom="5"
          $backgroundColor={palette.themeBrightYellow}
          $borderColor={palette.themePrimary}
          // $width=342
          $radioMarginBottom="10"
          $checkedBackground={palette.themePrimary}
          $checkedColor={palette.themeDefaultWhite}
        />
        <Input
          type="number"
          id="mealCalories"
          name="mealCalories"
          label="Calories"
          placeholder="칼로리를 입력하세요!"
          onChange={onChange}
          $labelFontSize="1.2"
          $width="320"
          $height="30"
          $marginBottom="10"
          $backgroundColor={palette.themeBrightYellow}
          $borderColor={palette.themePrimary}
          $paddingSide="10"
        />
        <Input
          type="text"
          id="mealTitle"
          placeholder="Write the menu you ate!"
          name="title"
          label="Menu"
          onChange={onChange}
          autocomplete="off"
          $labelFontSize="1.2"
          $width="320"
          $height="30"
          $marginBottom="10"
          $backgroundColor={palette.themeBrightYellow}
          $borderColor={palette.themePrimary}
          $paddingSide="10"
        />
      </div>
    </StyledDataGroup>
  );
};

export default DataGroup;
