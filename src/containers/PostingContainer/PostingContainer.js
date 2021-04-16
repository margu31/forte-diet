import { useState } from "react";
import { useSelector } from "react-redux";
import Form from "components/Form/Form";
import {
  menuValidation,
  reviewValidation,
} from "utils/validation/PostingValidation";
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
  const menuList = useSelector((state) => state.menuList);

  const menuValid = (menu) => {
    if (!menuValidation(menu)) {
      setMealData({
        ...mealData,
        hasError: {
          ...mealData.hasError,
          title: "한 글자 이상 입력해주세요!",
        },
      });
    } else {
      setMealData({
        ...mealData,
        hasError: {
          ...mealData.hasError,
          title: null,
        },
      });
    }
  };

  const reviewValid = (review) => {
    if (!reviewValidation(review)) {
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
      // const oldDate = Date(`${e.target.value}`);
      const oldDate = new Date(
        e.target.value.slice(0, 10).replace(/-/g, "/")
      ).toString();
      // console.log(oldDate);
      const newDay = oldDate.slice(0, 3).toUpperCase();
      // console.log(e.target.name);
      // console.log(e.target.value);
      // console.log(newDay);
      let newDate = e.target.value.slice(2, 10).replace(/-/g, "");
      // console.log(newDate);

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

    const mealId = menuList[mealData.date]
      ? menuList[mealData.date].meals.length + 1
      : 0;

    formData.append("id", mealId);

    const newFormData = Object.fromEntries(formData.entries());

    console.log(newFormData);
    // dispatch(addMealAction(newFormData));

    PostMeal(authUser, newFormData);
    history.push("/myPage");
  };

  const onBlur = (e) => {
    if (e.target.name === "title") {
      menuValid(e.target.value);
      console.log(mealData.hasError.title);
    } else if (e.target.name === "review") {
      reviewValid(e.target.value);
    }
  };

  return (
    <section>
      <Title>우식이의 오늘의 식단!</Title>
      <Form legend="식단 포스팅">
        <DataGroup
          onChange={onChange}
          onBlur={onBlur}
          errorMessage={mealData.hasError}
        />
        <ReviewBox
          id="mealReview"
          name="review"
          label="Review: "
          placeholder="자유롭게 리뷰를 남겨주세요! (500자 이내)"
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
