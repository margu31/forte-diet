import { useEffect } from 'react';
import StylePostEditPage from './PostEditPage.styled';
import { HealthBarContainer, PostEditContainer, UserBar } from 'containers';

const PostEditPage = ({ history }) => {
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, []);

  return (
    <StylePostEditPage>
      <UserBar />
      <PostEditContainer history={history} />
      <HealthBarContainer />
    </StylePostEditPage>
  );
};

export default PostEditPage;
