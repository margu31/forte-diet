import React from "react";
import { MyPhotoViewContainer, MyPhotoViewImg } from "./MyPhotoView.styled";

export default function MyPhotoView() {
  return (
    <MyPhotoViewContainer>
      <MyPhotoViewImg src="/cloud.jpg" alt="예비용" />
    </MyPhotoViewContainer>
  );
}
