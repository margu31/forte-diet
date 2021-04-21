import PostingContainer from 'containers/PostingContainer/PostingContainer';
import StylePostingPage from './PostingPage.styled';
import { useEffect } from 'react';
import HealthBarContainer from 'containers/HealthBarContainer/HealthBarContainer';
import UserBar from 'containers/UserBar/UserBar';

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
