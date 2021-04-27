import StyledInputRadio from "./InputRadio.styled";

const InputRadio = ({ id, name, value, label, onChange, checked }) => {
  return (
    <StyledInputRadio>
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        checked={checked}
      />
      <label htmlFor={id}>{label}</label>
    </StyledInputRadio>
  );
};

export default InputRadio;
