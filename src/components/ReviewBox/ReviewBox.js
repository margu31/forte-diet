import StyledReviewBox from "./ReviewBox.styled";

const ReviewBox = ({
  id,
  name,
  label,
  placeholder,
  onChange,
  onBlur,
  hasError,
}) => {
  return (
    <StyledReviewBox>
      <label htmlFor={id}>{label}</label>
      <textarea
        id={id}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
      ></textarea>
      {hasError && <p>{hasError}</p>}
    </StyledReviewBox>
  );
};

export default ReviewBox;
