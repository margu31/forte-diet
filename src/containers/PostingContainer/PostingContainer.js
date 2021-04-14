import { useState } from "react";
import { useDispatch } from "react-redux";
import Form from "components/Form/Form";
import { addMealAction } from "redux/modules/postingMenuList";
import { reviewValidation } from "utils/validation/reviewValidation";
import Button from "components/Button/Button";
import Title from "components/Title/Title";
import ReviewBox from "components/ReviewBox/ReviewBox";
import Toggle from "components/Toggle/Toggle";
import { palette } from "styles/index";
import DataGroup from "components/DataGroup/DataGroup";

const initialPostingFormValues = {
  photo: null,
  calories: 0,
  review: "",
  title: "",
  isPublic: null,
  type: null,
  hasError: {
    photo: null,
    calories: null,
    review: null,
    title: null,
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
          title: null,
        },
      });
    }
  };

  return (
    <section>
      <Title>우식이의 오늘의 식단!</Title>
      <Form legend="식단 포스팅">
        <DataGroup onChange={onChange} />
        <ReviewBox
          id="mealReview"
          name="review"
          label="Review: "
          placeholder="Leave your comments here!"
          onChange={onChange}
          onBlur={onBlur}
          hasError={mealData.hasError.review}
        />
        <Toggle id="isPublic" label1="Public" label2="Private" />
        <div>
          <Button
            type="button"
            $width="100"
            $height="30"
            $fontSize="1.2"
            $backgroundColor={palette.themeBrightGray}
            $color={palette.themeDefault}
          >
            취소
          </Button>
          <Button
            $width="100"
            $height="30"
            $fontSize="1.2"
            $backgroundColor={palette.themeBrightYellow}
            $color={palette.themePrimaryThick}
            onSubmit={onSubmit}
          >
            등록!
          </Button>
        </div>
      </Form>
    </section>
  );
}

export default PostingContainer;
