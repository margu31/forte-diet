import StyleReviewBox from "./PostingReviewBox.styled";

const PostingReviewBox = ({
  id,
  name,
  label,
  placeholder,
  onChange,
  onBlur,
  hasError,
}) => {
  return (
    <StyleReviewBox>
      <label htmlFor={id}>{label}</label>
      <textarea
        id={id}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        // rows="20"
        // cols="100"
      ></textarea>
      {hasError && <p>{hasError}</p>}
    </StyleReviewBox>
  );
};

export default PostingReviewBox;
