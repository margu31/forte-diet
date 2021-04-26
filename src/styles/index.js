import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';

const GlobalStyle = createGlobalStyle`
${normalize()}
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video, textarea, button {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
  text-decoration: none;
  box-sizing: border-box;
  list-style: none;
  letter-spacing: inherit;
  user-select: none;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 4px #f3b34c;
    opacity: 1;
  }

  &:focus:not(:focus-visible) {
    box-shadow: none;
  }
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
  box-sizing: border-box;
}
body {
	line-height: 1;
  margin: 0;
    padding: 0;
    background: #F4F3EF;
    font-family: 'Nanum Gothic', sans-serif, -apple-system, BlinkMacSystemFont,
    'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
    'Droid Sans', 'Helvetica Neue';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  letter-spacing: 0.1rem;
}
html {
  font-size: 10px;
  scroll-behavior: smooth;
}
`;

export const palette = {
  themePrimary: '#f3b34c',
  themeSecondary: '#395B9D',
  themePrimaryThick: '#F26830',
  themeTertiary: '#a2bf63',
  themeQuaternary: '#ed5e5e',
  themeBright: '#F4F3EF', // 배경 베이지색
  themeBrightYellow: '#FEFDF8', // input, textarea 배경색
  themeBrightGray: '#B6B6B6',
  themeDark: '#626262',
  themeDefault: '#14182C',
  themeDisable: '#878787',
  themeHover: '#F5DEB7',
  themeDefaultWhite: '#FFF',
  themeFont: '#4a4a4a',
  tabFocusing: '#0f2d9b'
};

export const fontSizeKit = {
  xSmall: '1.1rem',
  small: '1.3rem',
  medium: '1.6rem',
  large: '2.2rem',
  xLarge: '2.5rem',
  xxLarge: '3rem'
};

export const fontWeightKit = {
  normal: '400',
  bold: '700',
  extraBold: '800'
};

export default GlobalStyle;
