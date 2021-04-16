import Input from "components/Input/Input";
import RadioGroup from "components/RadioGroup/RadioGroup";
import { palette } from "styles/index";
import StyledDataGroup from "./DataGroup.styled";

const DataGroup = ({ onChange, onBlur, errorMessage }) => {
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
          name="date"
          label="Date"
          onChange={onChange}
          $labelFontSize="1.2"
          $width="320"
          $height="30"
          $marginBottom="10"
          $backgroundColor={palette.themeBrightYellow}
          $borderColor={palette.themePrimary}
          $paddingSide="10"
          max={maxDate}
          value={maxDate.toString()}
        />
        <RadioGroup
          groupTitle="Type"
          onChange={onChange}
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
          name="calories"
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
          min="0"
        />
        <Input
          type="text"
          id="mealTitle"
          placeholder="오늘의 메뉴를 입력하세요! (8자 이내)"
          name="title"
          label="Menu"
          onChange={onChange}
          onBlur={onBlur}
          errorMessage={errorMessage}
          autocomplete="off"
          maxLength="8"
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
