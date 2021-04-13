import StyledInputRadio from "./PostingInputRadio.styled";

const PostingInputRadio = ({ id, name, value, label, defaultChecked }) => {
  return (
    <StyledInputRadio>
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        defaultChecked={defaultChecked && defaultChecked}
      />
      <label htmlFor={id}>{label}</label>
    </StyledInputRadio>
  );
};

export default PostingInputRadio;
