import React from "react";
import { MyTitleContainer, MyTitlewtext } from "./MyTitle.styled";

export default function MyTitle({ title, calories }) {
  return (
    <MyTitleContainer>
      <MyTitlewtext>{title}</MyTitlewtext>
      <p>{calories} Kcal</p>
    </MyTitleContainer>
  );
}
