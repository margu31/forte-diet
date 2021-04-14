import InputRadio from "components/Radio/PostingInputRadio";
import StyledRadioGroup from "./PostingRadioGroup.styled";

const RadioGroup = ({ groupTitle }) => {
  return (
    <StyledRadioGroup>
      <p>{groupTitle}</p>
      <div>
        <InputRadio
          id="breakfast"
          name="mealType"
          value="breakfast"
          label="아침"
        />
        <InputRadio id="lunch" name="mealType" value="lunch" label="점심" />
        <InputRadio id="dinner" name="mealType" value="dinner" label="저녁" />
        <InputRadio id="snack" name="mealType" value="snack" label="간식" />
      </div>
    </StyledRadioGroup>
  );
};

export default RadioGroup;
