import GlobalStyle, { palette } from "styles";
import { Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import MyPage from "pages/MyPage/MyPage";
import "./App.css";
import { StyledApp } from "./App.styled";
import Home from "../pages/Home/Home";
import SideBarContainer from "../containers/SideBarContainer/SideBarContainer";
import PostingPage from "pages/PostingPage/PostingPage";
import Setting from "components/Setting/Setting";

function App() {
  return (
    <StyledApp>
      <GlobalStyle />
      <ThemeProvider theme={palette}>
        <SideBarContainer />
        <Setting />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/myPage" component={MyPage} />
          <Route path="/posting" component={PostingPage} />
          {/* Redirect 폴백 페이지 추가하여야 함 */}
        </Switch>
      </ThemeProvider>
    </StyledApp>
  );
}

export default App;
