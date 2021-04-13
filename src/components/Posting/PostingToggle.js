import StyleToggle from "./PostingToggle.styled";

const PostingToggle = ({ label1, label2 }) => {
  return (
    <StyleToggle>
      {/* <label>
        <input type="checkbox" />
        <span>{label1}</span>
        <span>{label2}</span>
        <span></span>
      </label> */}
      <input type="checkbox" id="isPublic" />
      <label htmlFor="isPublic">
        <span>{label1}</span>
        <span>{label2}</span>
        <span></span>
      </label>
    </StyleToggle>
  );
};

export default PostingToggle;
