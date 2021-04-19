import { StyledLogo, StyledTitle } from "./Title.styled";

const Title = ({ children, logoIcon, ...restProps }) => {
  return (
    <StyledTitle {...restProps}>
      {children}
      {logoIcon && <StyledLogo></StyledLogo>}
    </StyledTitle>
  );
};

export default Title;
