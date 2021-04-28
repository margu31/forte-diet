import StyledInputRadio from "./InputRadio.styled";

const InputRadio = ({
  id,
  name,
  value,
  label,
  onChange,
  checked,
  onMoveNextInput,
}) => {
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
      <label htmlFor={id} tabIndex="0" onKeyDown={onMoveNextInput}>
        {label}
      </label>
    </StyledInputRadio>
  );
};

export default InputRadio;
