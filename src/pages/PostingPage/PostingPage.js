import PostingContainer from 'containers/PostingContainer/PostingContainer';
import StylePostingPage from './PostingPage.styled';
import { useEffect } from 'react';

const PostingPage = ({ history }) => {
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, []);

  return (
    <StylePostingPage>
      <PostingContainer history={history} />
    </StylePostingPage>
  );
};

export default PostingPage;
