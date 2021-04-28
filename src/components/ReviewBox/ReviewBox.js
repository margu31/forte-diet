import StyledReviewBox from "./ReviewBox.styled";

const ReviewBox = ({
  id,
  name,
  label,
  placeholder,
  onChange,
  onKeyUp,
  hasError,
  defaultReview,
}) => {
  return (
    <StyledReviewBox>
      <label htmlFor={id}>{label}</label>
      <textarea
        id={id}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        onKeyUp={onKeyUp}
        autoComplete="off"
        defaultValue={defaultReview}
      ></textarea>
      {hasError && <p tabIndex="0">{hasError}</p>}
    </StyledReviewBox>
  );
};

export default ReviewBox;
