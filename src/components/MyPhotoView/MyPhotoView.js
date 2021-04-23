import React from "react";
import { MyPhotoViewContainer, MyPhotoViewImg } from "./MyPhotoView.styled";

export default function MyPhotoView({ photo }) {
  return (
    <MyPhotoViewContainer>
      {/* <MyPhotoViewImg src={photo} alt="예비용" /> */}
      <MyPhotoViewImg src="/cloud.jpg" alt="예비용" />
    </MyPhotoViewContainer>
  );
}
