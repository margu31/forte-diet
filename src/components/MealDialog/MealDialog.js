import Button from "components/Button/Button";
import Form from "components/Form/Form";
import MyPhotoView from "components/MyPhotoView/MyPhotoView";
import MyReview from "components/MyReview/MyReview";
import React from "react";
import {
  StyledMealModalDialogContainer,
  StyledButtonContainer,
  MealDialogPrevButton,
  MealDialogNextButton,
} from "./MealDialog.styled";

export default function MealDialog({
  onMealModal,
  id,
  dailyid,
  photo,
  review,
  prevMeal,
  nextMeal,
  mealListData,
}) {
  return (
    <StyledMealModalDialogContainer>
      <Form legend="meal Dialog">
        <MyPhotoView photo={photo} />
        <MyReview review={review} />
        <StyledButtonContainer>
          <Button type="button" onClick={onMealModal}>
            확인
          </Button>
          <Button>수정</Button>
          <MealDialogPrevButton type="button" onClick={prevMeal}>
            이전
          </MealDialogPrevButton>
          <MealDialogNextButton type="button" onClick={nextMeal}>
            다음
          </MealDialogNextButton>
        </StyledButtonContainer>
      </Form>
    </StyledMealModalDialogContainer>
  );
}
