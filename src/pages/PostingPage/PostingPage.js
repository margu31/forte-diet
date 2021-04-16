import PostingContainer from "containers/PostingContainer/PostingContainer";
import StylePostingPage from "./PostingPage.styled";

const PostingPage = ({ history }) => {
  return (
    <StylePostingPage>
      <PostingContainer history={history} />
    </StylePostingPage>
  );
};

export default PostingPage;
