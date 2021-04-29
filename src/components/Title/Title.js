import { StyledTitle } from "./Title.styled";

const Title = ({ children, ...restProps }) => {
  return (
    <StyledTitle tabIndex="0" {...restProps}>
      {children}
    </StyledTitle>
  );
};

export default Title;
