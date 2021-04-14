import { StyledFieldset, StyledLegend } from "components/Form/Form.styled";

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
