import StyleDataGroup from "./PostingDataGroup.styled";
import PostingInput from "./PostingInput";
import PostingRadioGroup from "./PostingRadioGroup";

const PostingDataGroup = ({ onChange }) => {
  return (
    <StyleDataGroup>
      <PostingInput
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
      </div>
    </StyleDataGroup>
  );
};

export default PostingDataGroup;
