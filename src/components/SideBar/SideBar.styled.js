import styled, { css } from 'styled-components';
import { palette } from '../../styles';

export const StyledSideBarWrapper = styled.div`
  background-color: ${palette.themePrimary};
  z-index: 99;
`;

export const StyledSideBar = styled.nav`
  min-width: 14vw;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 3rem;
  transition: transform 0.2s;
  /* box-shadow: 1px 1px 0.5em ${palette.themeBrightGray}, -1px -1px 0em ${palette.themeBrightGray}; */

  ${({ sideBarHeight }) => css`
    transform: translate3d(0, ${sideBarHeight}px, 0);
  `}
`;
