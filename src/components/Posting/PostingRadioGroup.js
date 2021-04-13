import PostingInputRadio from "./PostingInputRadio";
import StyledRadioGroup from "./PostingRadioGroup.styled";

const PostingRadioGroup = ({ groupTitle }) => {
  return (
    <StyledRadioGroup>
      <p>{groupTitle}</p>
      <div>
        <PostingInputRadio
          id="breakfast"
          name="mealType"
          value="breakfast"
          label="아침"
        />
        <PostingInputRadio
          id="lunch"
          name="mealType"
          value="lunch"
          label="점심"
        />
        <PostingInputRadio
          id="dinner"
          name="mealType"
          value="dinner"
          label="저녁"
        />
        <PostingInputRadio
          id="snack"
          name="mealType"
          value="snack"
          label="간식"
        />
      </div>
    </StyledRadioGroup>
  );
};

export default PostingRadioGroup;
