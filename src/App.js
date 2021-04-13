import LogInContainer from "containers/LogInContainer/LogInContainer";
import GlobalStyle from "./styles";
import MyPage from "pages/MyPage/MyPage";
import "./App.css";

function App() {
  return (
    <>
      <GlobalStyle />
      <LogInContainer />
      <MyPage />
    </>
  );
}

export default App;
