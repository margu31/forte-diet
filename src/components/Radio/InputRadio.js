import StyledInputRadio from "./InputRadio.styled";

const InputRadio = ({
  id,
  name,
  value,
  label,
  onChange,
  checked,
  onMoveNextInput,
  labelTitle,
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
      <label
        htmlFor={id}
        tabIndex="0"
        onKeyDown={onMoveNextInput}
        aria-label={`${labelTitle} ${label}`}
      >
        {label}
      </label>
    </StyledInputRadio>
  );
};

export default InputRadio;
