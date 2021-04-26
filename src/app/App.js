import GlobalStyle, { palette } from "styles";
import { Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import "./App.css";
import { StyledApp } from "./App.styled";
import { Home, MyPage, PostingPage, SettingPage } from "pages";
import SideBar from "components/SideBar/SideBar";
import PostEditPage from "pages/PostEdit/PostEditPage";

function App() {
  return (
    <StyledApp>
      <GlobalStyle />
      <ThemeProvider theme={palette}>
        <SideBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/myPage" component={MyPage} />
          <Route path="/posting" component={PostingPage} />
          <Route path="/setting" component={SettingPage} />
          <Route path="/postedit" component={PostEditPage} />
          {/* Redirect 폴백 페이지 추가하여야 함 */}
        </Switch>
      </ThemeProvider>
    </StyledApp>
  );
}

export default App;
