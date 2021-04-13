import { StyledPostingButton } from "./PostingButton.styled";

const PostingButton = ({ onSubmit, children }) => {
  return (
    <StyledPostingButton type="submit" onClick={onSubmit}>
      {/* <button type="submit" onClick={onSubmit}> */}
      {children}
      {/* </button> */}
    </StyledPostingButton>
  );
};

export default PostingButton;
