import HealthBarContainer from "containers/HealthBarContainer/HealthBarContainer";
import PostEditContainer from "containers/PostEditContainer/PostEditContainer";
import UserBar from "containers/UserBar/UserBar";
import { useEffect } from "react";
import { useLocation } from "react-router";
import StylePostEditPage from "./PostEditPage.styled";

const PostEditPage = ({ history }) => {
  const location = useLocation();
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
