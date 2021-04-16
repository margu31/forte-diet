import { StyledLogo, StyledTitle } from "./Title.styled";
// import { ReactComponent as Logo } from "assets/logos/logo1.svg";

const Title = ({ children }) => {
  return (
    <StyledTitle>
      {children}
      <StyledLogo />
    </StyledTitle>
  );
};

export default Title;
