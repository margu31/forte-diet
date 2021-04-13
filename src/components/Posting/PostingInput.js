import StylePostingInput from "./PostingInput.styled";

const PostingInput = ({
  type,
  id,
  name,
  label,
  placeholder,
  onChange,
  required,
}) => {
  return (
    <StylePostingInput>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
      />
    </StylePostingInput>
  );
};

export default PostingInput;
