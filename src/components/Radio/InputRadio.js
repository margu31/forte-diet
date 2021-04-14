import StyledInputRadio from "./InputRadio.styled";

const InputRadio = ({ id, name, value, label, ...restProps }) => {
  return (
    <StyledInputRadio {...restProps}>
      <input type="radio" id={id} name={name} value={value} />
      <label htmlFor={id}>{label}</label>
    </StyledInputRadio>
  );
};

export default InputRadio;
