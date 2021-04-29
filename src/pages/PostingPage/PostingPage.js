import { useEffect } from 'react';
import StylePostingPage from './PostingPage.styled';
import { PostingContainer, HealthBarContainer, UserBar } from 'containers';

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
      <UserBar />
      <PostingContainer history={history} />
      <HealthBarContainer />
    </StylePostingPage>
  );
};

export default PostingPage;
