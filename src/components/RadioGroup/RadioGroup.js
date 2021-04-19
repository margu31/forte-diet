import InputRadio from "components/Radio/InputRadio";
import { StyledRadioGroup, StyledRadioTitle } from "./RadioGroup.styled";

const RadioGroup = ({ groupTitle, onChange }) => {
  return (
    <>
      <StyledRadioTitle>{groupTitle}</StyledRadioTitle>
      <StyledRadioGroup>
        <InputRadio
          id="breakfast"
          name="type"
          value="아침"
          label="아침"
          onChange={onChange}
        />
        <InputRadio
          id="lunch"
          name="type"
          value="점심"
          label="점심"
          onChange={onChange}
        />
        <InputRadio
          id="dinner"
          name="type"
          value="저녁"
          label="저녁"
          onChange={onChange}
        />
        <InputRadio
          id="snack"
          name="type"
          value="간식"
          label="간식"
          onChange={onChange}
        />
      </StyledRadioGroup>
    </>
  );
};

export default RadioGroup;
