import Button from "components/Button/Button";
import Form from "components/Form/Form";
import MyPhotoView from "components/MyPhotoView/MyPhotoView";
import MyReview from "components/MyReview/MyReview";
import React from "react";
import { StyledMealModalDialogContainer } from "./MealDialog.styled";

export default function MealDialog({ onMealModal }) {
  return (
    <StyledMealModalDialogContainer>
      <Form legend="meal Dialog">
        <MyPhotoView />
        <MyReview />
        <Button type="button" onClick={onMealModal}>
          x
        </Button>
        <Button>+</Button>
      </Form>
    </StyledMealModalDialogContainer>
  );
}
