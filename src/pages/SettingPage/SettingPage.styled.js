import styled, { css } from 'styled-components';
import { StyledButton } from 'components/UserNavigation/UserNavigation.styled';

export const StyledBackground = styled.section`
  max-width: 85vw;
  height: 100vh;
  flex-grow: 9;
  margin-top: 70px;
  /* background-image: url("/agriculture-1846358_1920.jpg"); */
  /* background-image: url("/basil-3532424_1920.jpg"); */
  /* background-image: url("/grapefruit-1647688_1920.jpg"); */
  /* background-image: url("/pear-3560106_1920.jpg"); */
  /* background-image: url("/peaches-1522680_1920.jpg"); */
  /* background-repeat: no-repeat; */
  /* background-size: cover; */
  /* background-position: center; */

  ${StyledButton} {
    ${({ theme }) => css`
      color: ${theme.themeDefault};
    `}
  }
`;

export const StyledSettingPage = styled.div`
  width: 90rem;
  /* width: 50rem; */
  margin: 0 auto;
  padding-top: 2rem;
  /* text-align: center; */

  h2 {
    /* color: #fff; */
  }
`;
