import Button from "components/Button/Button";
import Form from "components/Form/Form";
import MyPhotoView from "components/MyPhotoView/MyPhotoView";
import MyReview from "components/MyReview/MyReview";
import MyTitle from "components/MyTitle/MyTitle";
import React from "react";
import { StyledMealModalDialogContainer } from "./MealDialog.styled";

export default function MealDialog({
  onMealModal,
  id,
  photo,
  review,
  title,
  prevMeal,
  nextMeal,
  mealListData,
  currentMealId,
  mealLength,
  slideRef,
  index,
}) {
  return (
    // <div className={index === currentMealId ? "slide" : "slide active"}>
    <StyledMealModalDialogContainer>
      <Form legend="meal Dialog">
        <MyPhotoView photo={photo} />
        <MyTitle title={title} />
        <MyReview review={review} />
      </Form>
    </StyledMealModalDialogContainer>
    // </div>

    // // <div className={index === currentMealId ? "slide active" : "slide"}>
    //   <StyledMealModalDialogContainer style={mealMotion}>
    //     <Form legend="meal Dialog">
    //       <MyPhotoView photo={photo} />
    //       <MyReview review={review} />
    //     </Form>
    //   </StyledMealModalDialogContainer>
    // // </div>
  );
}

// 레프 말고
// 트랜지션 트랜스폼 프롭스로 넘겨준다
// 인덱스 * 100px로 이동
// 그러게 서민기만자
