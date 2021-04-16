import StyledTitle from './Title.styled';

const Title = ({ children, ...restProps }) => {
  return <StyledTitle {...restProps}>{children}</StyledTitle>;
};

export default Title;
