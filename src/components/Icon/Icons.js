import React from "react";
import {
  StyledEmailIcon,
  StyledPasswordIcon,
  StyledGenderIcon,
  StyledWeightIcon,
  StyledHeightIcon,
  StyledNicknameIcon,
  StyledEyeIcon,
} from "./Icons.styled";

export default function Icons({ type, ...restProps }) {
  switch (type) {
    case "id":
      return <StyledEmailIcon />;
    case "password":
      return <StyledPasswordIcon />;
    case "email":
      return <StyledEmailIcon />;
    case "gender":
      return <StyledGenderIcon />;
    case "weight":
      return <StyledWeightIcon />;
    case "height":
      return <StyledHeightIcon />;
    case "nickname":
      return <StyledNicknameIcon />;
    case "showPassword":
      return <StyledEyeIcon />;

    default:
      return null;
  }
}
