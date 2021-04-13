import { useState } from "react";
import { useDispatch } from "react-redux";
import PageTitle from "../../components/Posting/PageTitle";
import PostingButton from "../../components/Posting/PostingButton";
import PostingForm from "../../components/Posting/PostingForm";
import PostingInput from "../../components/Posting/PostingInput";
import PostingInputRadio from "../../components/Posting/PostingInputRadio";
import PostingReviewBox from "../../components/Posting/PostingReviewBox";
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
          type="date"
          id="postingDate"
          name="postingDate"
          label="DATE"
          onChange={onChange}
          required
        />
        <PostingInput
          type="file"
          id="postingFile"
          name="postingFile"
          label="PHOTO"
          placeholder="사진을 선택하세요!"
          onChange={onChange}
        />
        <PostingInput
          type="number"
          id="mealCalories"
          name="mealCalories"
          label="CALORIES"
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
        <div>
          <p>공개여부</p>
          <PostingInputRadio
            id="privatePost"
            name="state"
            value="private"
            label="Private"
            defaultChecked="defaultChecked"
          />
          <PostingInputRadio
            id="publicPost"
            name="state"
            value="public"
            label="Public"
          />
        </div>
        <div>
          <p>Type</p>
          <PostingInputRadio
            id="breakfast"
            name="mealType"
            value="breakfast"
            label="Breakfast"
          />
          <PostingInputRadio
            id="lunch"
            name="mealType"
            value="lunch"
            label="Lunch"
          />
          <PostingInputRadio
            id="dinner"
            name="mealType"
            value="dinner"
            label="Dinner"
          />
          <PostingInputRadio
            id="snack"
            name="mealType"
            value="snack"
            label="Snack"
          />
        </div>
        <PostingButton onSubmit={onSubmit}>등록!</PostingButton>
        <PostingButton>취소</PostingButton>
      </PostingForm>
    </>
  );
}

export default PostingContainer;
