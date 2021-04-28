import Button from "components/Button/Button";
import Form from "components/Form/Form";
import MyPhotoView from "components/MyPhotoView/MyPhotoView";
import MyReview from "components/MyReview/MyReview";
import MyTitle from "components/MyTitle/MyTitle";
import React from "react";
import { StyledMealModalDialogContainer } from "./MealDialog.styled";

export default function MealDialog({ id, photo, review, title }) {
  return (
    <StyledMealModalDialogContainer>
      <Form legend="meal Dialog">
        <MyPhotoView photo={photo} />
        <MyTitle title={title} />
        <MyReview review={review} />
      </Form>
    </StyledMealModalDialogContainer>
  );
}
