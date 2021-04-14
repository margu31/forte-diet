import Input from "components/Input/Input";
import RadioGroup from "components/RadioGroup/PostingRadioGroup";
import { palette } from "styles/index";
import StyledDataGroup from "./DataGroup.styled";

const DataGroup = ({ onChange }) => {
  return (
    <StyledDataGroup>
      <Input
        type="file"
        id="postingFile"
        name="postingFile"
        label="사진 등록"
        onChange={onChange}
        // $fontSize="1.2"
        // $width="320"
        // $height="30"
        // $marginBottom="10"
        // $backgroundColot={palette.themeBrightYellow}
        // $borderColor={palette.themePrimary}
        // $paddingSide="10"
      />
      <div className="collection">
        <Input
          type="date"
          id="postingDate"
          name="postingDate"
          label="Date"
          onChange={onChange}
          required
          $fontSize="1.2"
          $width="320"
          $height="30"
          $marginBottom="10"
          $backgroundColor={palette.themeBrightYellow}
          $borderColor={palette.themePrimary}
          $paddingSide="10"
        />
        <RadioGroup groupTitle="Type" />
        <Input
          type="number"
          id="mealCalories"
          name="mealCalories"
          label="Calories"
          placeholder="칼로리를 입력하세요!"
          onChange={onChange}
          $fontSize="1.2"
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
          $fontSize="1.2"
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
