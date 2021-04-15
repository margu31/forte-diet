import StyledInputRadio from "./InputRadio.styled";

const InputRadio = ({ id, name, value, label, onChange, ...restProps }) => {
  return (
    <StyledInputRadio {...restProps}>
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        onChange={onChange}
      />
      <label htmlFor={id} name={name}>
        {label}
      </label>
    </StyledInputRadio>
  );
};

export default InputRadio;
