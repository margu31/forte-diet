import { StyledPostingButton } from "./PostingButton.styled";

const PostingButton = ({ onSubmit, children }) => {
  return (
    <StyledPostingButton>
      <button type="submit" onClick={onSubmit}>
        {children}
      </button>
    </StyledPostingButton>
  );
};

export default PostingButton;
