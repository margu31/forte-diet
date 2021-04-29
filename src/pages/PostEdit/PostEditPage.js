import HealthBarContainer from "containers/HealthBarContainer/HealthBarContainer";
import PostEditContainer from "containers/PostEditContainer/PostEditContainer";
import UserBar from "containers/UserBar/UserBar";
import { useEffect } from "react";
import StylePostEditPage from "./PostEditPage.styled";

const PostEditPage = ({ history }) => {
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "instant",
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
