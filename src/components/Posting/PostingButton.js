const PostingButton = ({ onSubmit, children }) => {
  return (
    <button type="submit" onClick={onSubmit}>
      {children}
    </button>
  );
};

export default PostingButton;
