import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from "components/Form/Form";
import { addMealAction } from "redux/modules/postingMenuList";
import { reviewValidation } from "utils/validation/reviewValidation";
import Button from "components/Button/Button";
import Title from "components/Title/Title";
import ReviewBox from "components/ReviewBox/ReviewBox";
import Toggle from "components/Toggle/Toggle";
import { palette } from "styles/index";
import DataGroup from "components/DataGroup/DataGroup";
import { PostMeal } from "api/firestore";

const initialPostingFormValues = {
  id: 0,
  date: "",
  photo: null,
  calories: 0,
  review: "",
  title: "",
  isPublic: "public",
  type: "",
  hasError: {
    photo: null,
    calories: null,
    review: null,
    title: null,
    isPublic: null,
    type: null,
  },
};

function PostingContainer({ history }) {
  // const dispatch = useDispatch();
  const [mealData, setMealData] = useState(initialPostingFormValues);
  const { authUser } = useSelector((state) => state.auth);

  const onChange = (e) => {
    if (e.target.name === "type") {
      setMealData({
        ...mealData,
        [e.target.name]: e.target.value,
      });
    } else if (e.target.type === "checkbox") {
      setMealData({
        ...mealData,
        [e.target.name]: `${e.target.checked ? "private" : "public"}`,
      });
    } else if (e.target.name === "date") {
      // const oldDate = e.target.value;
      const oldDate = Date(e.target.value);
      const newDay = oldDate.slice(0, 3).toUpperCase();
      const newDate = e.target.value.slice(2, 10).replace(/-/g, "");

      setMealData({
        ...mealData,
        [e.target.name]: `${newDate} ${newDay}`,
      });
    } else
      setMealData({
        ...mealData,
        [e.target.name]: e.target.value,
      });
    // console.log(e.target.checked);
    // console.log(e.target.type);
    // console.log(e.target.name);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();

    Object.entries(mealData).forEach(([key, value]) => {
      if (key === "hasError") return;
      console.log(`${key}: ${value}`);
      formData.append(key, value);
    });

    const newFormData = Object.fromEntries(formData.entries());

    console.log(newFormData);
    // dispatch(addMealAction(newFormData));

    // const { date } = newFormData;
    // // console.log(date);
    // const a = date.split("/").join("");
    // console.log(a);

    PostMeal(authUser, newFormData);
    history.push("/myPage");
  };

  const onBlur = (e) => {
    const validation = reviewValidation(e.target.value);
    // console.log(e.target.name);
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
          placeholder="자유롭게 리뷰를 남겨주세요!"
          onChange={onChange}
          onBlur={onBlur}
          hasError={mealData.hasError.review}
        />
        <Toggle
          id="isPublic"
          label1="Public"
          label2="Private"
          onChange={onChange}
        />
        <div>
          <Button
            type="button"
            $width="100"
            $height="30"
            $fontSize="1.2"
            $backgroundColor="#9f9f9f33"
            $color={palette.themeDefault}
            $hoverBackground={palette.themeBrightGray}
          >
            취소
          </Button>
          <Button
            $width="100"
            $height="30"
            $fontSize="1.2"
            $backgroundColor="#f2683033"
            $color={palette.themePrimaryThick}
            $hoverBackground={palette.themePrimaryThick}
            $hoverColor={palette.themeDefaultWhite}
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
