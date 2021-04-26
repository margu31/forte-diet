import React from "react";
import { MyTitleContainer, MyTitlewtext } from "./MyTitle.styled";

export default function MyTitle({ title }) {
  return (
    <MyTitleContainer>
      <MyTitlewtext>{title}</MyTitlewtext>
    </MyTitleContainer>
  );
}
