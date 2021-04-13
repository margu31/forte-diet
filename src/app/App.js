import GlobalStyle, { palette } from 'styles';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import MyPage from 'pages/MyPage/MyPage';
import SideBar from '../components/SideBar/SideBar';
import { StyledApp } from './App.styled';
import Home from '../pages/Home/Home';
import './App.css';

function App() {
  return (
    <StyledApp>
      <GlobalStyle />
      <ThemeProvider theme={palette}>
        <SideBar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/myPage' component={MyPage} />
          {/* Redirect 폴백 페이지 추가하여야 함 */}
        </Switch>
      </ThemeProvider>
    </StyledApp>
  );
}

export default App;
