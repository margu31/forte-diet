import { useState } from "react";
import { useDispatch } from "react-redux";
import PageTitle from "../../components/Posting/PageTitle";
import PostingButton from "../../components/Posting/PostingButton";
import PostingForm from "../../components/Posting/PostingForm";
import PostingInput from "../../components/Posting/PostingInput";
import PostingInputRadio from "../../components/Posting/PostingInputRadio";
import PostingReviewBox from "../../components/Posting/PostingReviewBox";
import PostingToggle from "../../components/Posting/PostingToggle";
import { addMealAction } from "../../redux/modules/postingMenuList";
import { reviewValidation } from "../../utils/validation/reviewValidation";

const initialPostingFormValues = {
  photo: null,
  calories: 0,
  review: "",
  isPublic: null,
  type: null,
  hasError: {
    photo: null,
    calories: null,
    review: null,
    isPublic: null,
    type: null,
  },
};

function PostingContainer() {
  const dispatch = useDispatch();
  const [mealData, setMealData] = useState(initialPostingFormValues);

  const onChange = (e) => {
    setMealData({
      ...mealData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();

    Object.entries(mealData).forEach(([key, value]) => {
      console.log(`${key}: ${value}`);
      formData.append(key, value);
    });

    const newFormData = Object.fromEntries(formData.entries());
    dispatch(addMealAction(newFormData));
  };

  const onBlur = (e) => {
    const validation = reviewValidation(e.target.value);
    if (!validation) {
      setMealData({
        ...mealData,
        hasError: {
          ...mealData.hasError,
          review: "한 글자 이상 입력해주세요!",
        },
      });
    } else {
      setMealData({
        ...mealData,
        hasError: {
          ...mealData.hasError,
          review: null,
        },
      });
    }
  };

  return (
    <>
      <PageTitle>우식이의 오늘의 식단!</PageTitle>
      <PostingForm>
        <PostingInput
          type="file"
          id="postingFile"
          name="postingFile"
          label="사진 등록"
          onChange={onChange}
        />
        <PostingInput
          type="date"
          id="postingDate"
          name="postingDate"
          label="Date"
          onChange={onChange}
          required
        />
        <div>
          <p>Type</p>
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
        <PostingInput
          type="number"
          id="mealCalories"
          name="mealCalories"
          label="Calories"
          placeholder="칼로리를 입력하세요!"
          onChange={onChange}
        />
        <PostingReviewBox
          id="mealReview"
          name="mealReview"
          label="Review: "
          placeholder="Leave your comments here!"
          onChange={onChange}
          onBlur={onBlur}
          hasError={mealData.hasError.review}
        />
        {/* <div>
          <PostingInputRadio
            id="publicPost"
            name="state"
            value="public"
            label="Public"
            defaultChecked="defaultChecked"
          />
          <PostingInputRadio
            id="privatePost"
            name="state"
            value="private"
            label="Private"
          />
        </div> */}
        <PostingToggle label1="Public" label2="Private" />
        <PostingButton>취소</PostingButton>
        <PostingButton onSubmit={onSubmit}>등록!</PostingButton>
      </PostingForm>
    </>
  );
}

export default PostingContainer;
