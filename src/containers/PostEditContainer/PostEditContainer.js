import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Form from "components/Form/Form";
import {
  menuValidation,
  reviewValidation,
} from "utils/validation/PostingValidation";
import Button from "components/Button/Button";
import Title from "components/Title/Title";
import ReviewBox from "components/ReviewBox/ReviewBox";
import Toggle from "components/Toggle/Toggle";
import DataGroup from "components/DataGroup/DataGroup";
import { addNewDiet, PostMeal } from "api/firestore";
import { addMenuListAction } from "redux/modules/menuList";
import { addMealInDiets } from "api/diets";

const today = new Date();
const year = today.getFullYear();
const getMonth = today.getMonth() + 1;
const month = getMonth >= 10 ? getMonth : "0" + getMonth;
const date = today.getDate();

const maxDate = `${year}-${month}-${date}`;
// const defaultDate = maxDate.slice(2, 10).replace(/-/g, "");
// const day = today.toString().slice(0, 3).toUpperCase();

const initialPostingFormValues = {
  id: 0,
  date: null,
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

function PostEditContainer({ history }) {
  const isEditing = true;
  const { authUser, id, mealDate, menuList } = history.location.state;

  const [meal, setMeal] = useState(initialPostingFormValues);
  // const [meal, setMeal] = useState(mealDate);
  const [isDragging, setIsDragging] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadedFile, setLoadedFile] = useState(false);
  const imgRef = useRef();
  const canvasRef = useRef();
  const fileRef = useRef();
  const dispatch = useDispatch();

  console.log(mealDate);
  // console.log(meal);

  useEffect(() => {
    setMeal({
      ...meal,
      ...mealDate[0],
      hasError: {
        ...meal.hasError,
      },
    });
  }, []);

  // console.log(meal);

  function convertDate(date) {
    // console.log(date);
    const yymmdd = date.slice(0, 6).toString();
    const yy = yymmdd.substr(0, 2);
    const mm = yymmdd.substr(2, 2);
    const dd = yymmdd.substr(4, 2);
    const yyyy = +yy < 90 ? "20" + yy : "19" + yy;
    return yyyy + "-" + mm + "-" + dd;
  }

  const defaultDate = convertDate(mealDate[0].date);
  // console.log(defaultDate);
  const defaultUrl = meal.photo;
  const defaultType = meal.type;
  const defaultCalories = meal.calories;
  const defaultTitle = meal.title;
  const defaultReview = meal.review;
  const defaultIsPublic = meal.isPublic;
  console.log(defaultType);
  console.log(defaultCalories);
  console.log(defaultTitle);
  console.log(defaultReview);
  console.log(defaultIsPublic);

  const isDisabled =
    !meal.review ||
    !meal.title ||
    !meal.type ||
    meal.hasError.review ||
    meal.hasError.title;

  const menuValid = (menu) => {
    if (!menuValidation(menu)) {
      setMeal({
        ...meal,
        hasError: {
          ...meal.hasError,
          title: "한 글자 이상, 10자 이내로 입력해주세요!",
        },
      });
    } else {
      setMeal({
        ...meal,
        hasError: {
          ...meal.hasError,
          title: null,
        },
      });
    }
  };

  const reviewValid = (review) => {
    if (!reviewValidation(review)) {
      setMeal({
        ...meal,
        hasError: {
          ...meal.hasError,
          review: "한 글자 이상 입력해주세요!",
        },
      });
    } else {
      setMeal({
        ...meal,
        hasError: {
          ...meal.hasError,
          review: null,
        },
      });
    }
  };

  const onChange = (e) => {
    if (e.target.name === "type") {
      setMeal({
        ...meal,
        [e.target.name]: e.target.value,
      });
    } else if (e.target.type === "checkbox") {
      setMeal({
        ...meal,
        [e.target.name]: `${e.target.checked ? "private" : "public"}`,
      });
    } else if (e.target.name === "date") {
      const oldDate = new Date(
        e.target.value.slice(0, 10).replace(/-/g, "/")
      ).toString();
      const newDay = oldDate.slice(0, 3).toUpperCase();
      const newDate = e.target.value.slice(2, 10).replace(/-/g, "");

      setMeal({
        ...meal,
        [e.target.name]: `${newDate} ${newDay}`,
      });
    } else
      setMeal({
        ...meal,
        [e.target.name]: e.target.value,
      });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    Object.entries(meal).forEach(([key, value]) => {
      if (key === "hasError") return;
      formData.append(key, value);
      console.log(`${key}: `, `${value}`);
    });

    const newFormData = Object.fromEntries(formData.entries());

    // TODO:
    // 수정 데이터 firebase에 전송
    // myPage 업뎃

    history.push("/myPage");
  };

  const onKeyUp = (e) => {
    if (e.target.name === "title") {
      menuValid(e.target.value);
    } else if (e.target.name === "review") {
      reviewValid(e.target.value);
    }
  };

  const onKeyPress = (e) => {
    if (
      e.charCode === 45 ||
      (e.keyCode >= 48 && e.keyCode <= 57) ||
      (e.keyCode >= 96 && e.keyCode <= 105)
    ) {
      e.preventDefault();
    }
  };

  const onDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const onDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const onDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const onDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsLoaded(true);
    setIsDragging(false);

    const file = e.dataTransfer.files;
    const reader = new FileReader();

    reader.onload = (e) => {
      imgRef.current.src = e.target.result;
      setMeal({
        ...meal,
        photo: imgRef.current.src,
      });
    };

    reader.readAsDataURL(file[0]);
  };

  const onDragEnd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const onChangeFile = (e) => {
    if (e.target.files.length === 0) return;
    else {
      setLoadedFile(true);

      const reader = new FileReader();

      reader.onload = (e) => {
        imgRef.current.src = e.target.result;
        setMeal({
          ...meal,
          photo: imgRef.current.src,
        });
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const goBack = () => {
    history.goBack();
  };

  return (
    <section>
      <Title logoIcon="true">우식이의 오늘의 식단!</Title>
      <Form legend="식단 포스팅">
        <DataGroup
          onChange={onChange}
          onKeyUp={onKeyUp}
          onKeyPress={onKeyPress}
          errorMessage={meal.hasError}
          maxDate={maxDate}
          isEditing={isEditing}
          defaultDate={defaultDate}
          defaultUrl={defaultUrl}
          defaultType={defaultType}
          defaultCalories={defaultCalories}
          defaultTitle={defaultTitle}
          onDragEnter={onDragEnter}
          onDragOver={onDragOver}
          onDragLeave={onDragLeave}
          onDrop={onDrop}
          onDragEnd={onDragEnd}
          onChangeFile={onChangeFile}
          isLoaded={isLoaded}
          isDragging={isDragging}
          loadedFile={loadedFile}
          imgRef={imgRef}
          canvasRef={canvasRef}
          fileRef={fileRef}
        />
        <ReviewBox
          id="mealReview"
          name="review"
          label="Review: "
          placeholder="자유롭게 리뷰를 남겨주세요! (500자 이내)"
          onChange={onChange}
          onKeyUp={onKeyUp}
          hasError={meal.hasError.review}
          // defaultReview={isEditing ? defaultReview : null}
          defaultReview={defaultReview}
        />
        <Toggle
          id="isPublic"
          label1="Public"
          label2="Private"
          onChange={onChange}
          isEditing={isEditing}
          defaultIsPublic={defaultIsPublic}
        />
        <div>
          <Button type="button" onSubmit={goBack}>
            취소
          </Button>
          <Button onSubmit={onSubmit} disabled={isDisabled}>
            수정
          </Button>
        </div>
      </Form>
    </section>
  );
}

export default PostEditContainer;
