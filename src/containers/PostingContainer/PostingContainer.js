import { useRef, useState } from "react";
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
import { uploadImgToAmazon } from "../../api/amazon";

const today = new Date();
const year = today.getFullYear();
const getMonth = today.getMonth() + 1;
const month = getMonth >= 10 ? getMonth : "0" + getMonth;
const date = today.getDate();

const maxDate = `${year}-${month}-${date}`;
const defaultDate = maxDate.slice(2, 10).replace(/-/g, "");
const day = today.toString().slice(0, 3).toUpperCase();

const initialPostingFormValues = {
  id: 0,
  date: `${defaultDate} ${day}`,
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
  const [mealData, setMealData] = useState(initialPostingFormValues);
  const { authUser } = useSelector((state) => state.auth);
  const menuList = useSelector((state) => state.menuList);
  const [isDragging, setIsDragging] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadedFile, setLoadedFile] = useState(false);
  const imgRef = useRef();
  const canvasRef = useRef();
  const fileRef = useRef();
  const dispatch = useDispatch();

  const isDisabled =
    !mealData.review ||
    !mealData.title ||
    !mealData.type ||
    mealData.hasError.review ||
    mealData.hasError.title;

  const menuValid = (menu) => {
    if (!menuValidation(menu)) {
      setMealData({
        ...mealData,
        hasError: {
          ...mealData.hasError,
          title: "한 글자 이상, 10자 이내로 입력해주세요!",
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
      const oldDate = new Date(
        e.target.value.slice(0, 10).replace(/-/g, "/")
      ).toString();
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
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    Object.entries(mealData).forEach(([key, value]) => {
      if (key === "hasError") return;
      formData.append(key, value);
    });

    // mealId 수정 코드
    const mealId =
      +menuList[mealData.date]?.meals[menuList[mealData.date].meals.length - 1]
        ?.id + 1;

    formData.append("id", mealId || 0);

    const newFormData = Object.fromEntries(formData.entries());

    const photoFile = fileRef.current.files[0] || null;
    const photoId = authUser.uid + mealData.date + (mealId || 0);
    const photoUrl = await uploadImgToAmazon(photoFile, photoId);

    // 새로운 메뉴 리스트라면, diets 테이블에 추가
    if (!menuList.hasOwnProperty(mealData.date)) {
      const dietId = await addNewDiet(authUser, {
        ...newFormData,
        photo: photoUrl,
      });
      PostMeal(authUser, { ...newFormData, photo: photoUrl }, dietId);
    } else {
      PostMeal(authUser, { ...newFormData, photo: photoUrl });
      addMealInDiets(menuList[mealData.date], {
        ...newFormData,
        photo: photoUrl,
      });
    }

    dispatch(addMenuListAction(newFormData)); // myPage 실시간 업데이트 코드 추가
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

  const ReSizeImage = (e) => {
    const img = new Image();
    img.src = e.target.result;

    img.onload = (e) => {
      const canvas = canvasRef.current;
      const MAX_SIZE = 320;
      let width = img.width;
      let height = img.height;

      if (width > height) {
        if (width > MAX_SIZE) {
          height *= MAX_SIZE / width;
          width = MAX_SIZE;
        }
      } else {
        if (height > MAX_SIZE) {
          width *= MAX_SIZE / height;
          height = MAX_SIZE;
        }
      }
      canvas.width = width;
      canvas.height = height;
      canvas.getContext("2d").drawImage(img, 0, 0, width, height);
      const dataUrl = canvas.toDataURL();
      imgRef.current.src = dataUrl;

      setMealData({
        ...mealData,
        photo: imgRef.current.src,
      });

      // dataURLToBlob(dataUrl);
      // console.log(dataURLToBlob(dataUrl));

      // const url = URL.createObjectURL(dataURLToBlob(dataUrl));
      // console.log(url); // 객체 만든 브라우저에서만 가능..?

      // setMealData({
      //   ...mealData,
      //   photo: dataURLToBlob(dataUrl),
      // })
    };
  };

  // const dataURLToBlob = (dataURL) => {
  //   const BASE64_MARKER = ";base64,";

  //   const parts = dataURL.split(BASE64_MARKER);
  //   const contentType = parts[0].split(":")[1];
  //   const raw = window.atob(parts[1]);

  //   const rawLength = raw.length;

  //   const uInt8Array = new Uint8Array(rawLength);
  //   let i = 0;
  //   while (i < rawLength) {
  //     uInt8Array[i] = raw.charCodeAt(i);
  //     i++;
  //   }
  //   return new Blob([uInt8Array], { type: contentType });
  // };

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
      ReSizeImage(e);
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
        ReSizeImage(e);
      };

      reader.readAsDataURL(e.target.files[0]);
    }
    // console.log(e.target.files[0]);
  };

  const goBack = () => {
    history.goBack();
  };

  if (!authUser)
    return (
      <div
        style={{ fontSize: "3rem", margin: "300px 40px", lineHeight: "5rem" }}
      >
        로그인하든지~ 가입하든지~ 둘 중 하나 하라~ 이 말입니다. 아시겠어여??????
      </div>
    );

  return (
    <section>
      <Title logoIcon="true">우식이의 오늘의 식단!</Title>
      <Form legend="식단 포스팅">
        <DataGroup
          onChange={onChange}
          onKeyUp={onKeyUp}
          onKeyPress={onKeyPress}
          errorMessage={mealData.hasError}
          maxDate={maxDate}
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
          hasError={mealData.hasError.review}
        />
        <Toggle
          id="isPublic"
          label1="Public"
          label2="Private"
          onChange={onChange}
        />
        <div>
          <Button type="button" onSubmit={goBack}>
            취소
          </Button>
          <Button onSubmit={onSubmit} disabled={isDisabled}>
            등록
          </Button>
        </div>
      </Form>
    </section>
  );
}

export default PostingContainer;
