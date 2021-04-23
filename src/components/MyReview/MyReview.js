import React from "react";
import { MyReViewContainer, MyReViewtext } from "./MyReview.styled";

export default function MyReview({ review }) {
  return (
    <MyReViewContainer>
      <MyReViewtext>{review}</MyReViewtext>
    </MyReViewContainer>
  );
}
