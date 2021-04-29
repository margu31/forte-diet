import { StyledFieldset, StyledLegend } from './Form.styled';

const Form = ({ legend, children }) => {
  return (
    <form noValidate={true}>
      <StyledFieldset>
        <StyledLegend>{legend}</StyledLegend>
        {children}
      </StyledFieldset>
    </form>
  );
};

export default Form;
