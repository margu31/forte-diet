import React from "react";
import { StyledLi, StyledLink, StyledUl } from "./SideNavigation.styled";

export default function SideNavigation() {
  return (
    <StyledUl>
      <StyledLink to="/" exact>
        <StyledLi>Home</StyledLi>
      </StyledLink>
      <StyledLink to="/myPage">
        <StyledLi>MyPage</StyledLi>
      </StyledLink>
      <StyledLink to="/posting">
        <StyledLi>Posting</StyledLi>
      </StyledLink>
    </StyledUl>
  );
}
