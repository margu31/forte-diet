import Input from "components/Input/Input";
import RadioGroup from "components/RadioGroup/PostingRadioGroup";
import StyledDataGroup from "./PostingDataGroup.styled";
// import PostingInput from "./PostingInput";

const DataGroup = ({ onChange }) => {
  return (
    <StyledDataGroup>
      {/* <PostingInput
        type="file"
        id="postingFile"
        name="postingFile"
        label="사진 등록"
        onChange={onChange}
      />
      <div className="collection">
        <PostingInput
          type="date"
          id="postingDate"
          name="postingDate"
          label="Date"
          onChange={onChange}
          required
        />
        <PostingRadioGroup groupTitle="Type" />
        <PostingInput
          type="number"
          id="mealCalories"
          name="mealCalories"
          label="Calories"
          placeholder="칼로리를 입력하세요!"
          onChange={onChange}
        />
        <PostingInput
          type="text"
          id="mealTitle"
          placeholder="Write the menu you ate!"
          name="title"
          label="Menu"
          onChange={onChange}
          autocomplete="off"
        />
      </div> */}
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
        />
        <RadioGroup groupTitle="Type" />
        <Input
          type="number"
          id="mealCalories"
          name="mealCalories"
          label="Calories"
          placeholder="칼로리를 입력하세요!"
          onChange={onChange}
        />
        <Input
          type="text"
          id="mealTitle"
          placeholder="Write the menu you ate!"
          name="title"
          label="Menu"
          onChange={onChange}
          autocomplete="off"
        />
      </div>
    </StyledDataGroup>
  );
};

export default DataGroup;
