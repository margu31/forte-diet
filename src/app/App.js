import GlobalStyle, { palette } from "styles";
import { Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import "./App.css";
import { StyledApp } from "./App.styled";
import { Home, MyPage, PostingPage, SettingPage, PostEditPage } from "pages";
import SideBar from "components/SideBar/SideBar";
import Footer from "../components/Footer/Footer";

function App() {
  return (
    <div>
      <GlobalStyle />
      <ThemeProvider theme={palette}>
        <StyledApp>
          <SideBar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/myPage" component={MyPage} />
            <Route path="/posting" component={PostingPage} />
            <Route path="/setting" component={SettingPage} />
            <Route path="/postEdit" component={PostEditPage} />
            {/* Redirect 폴백 페이지 추가하여야 함 */}
          </Switch>
        </StyledApp>
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
