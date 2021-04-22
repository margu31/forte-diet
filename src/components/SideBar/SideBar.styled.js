import styled, { css } from 'styled-components';
import { palette } from '../../styles';

export const StyledSideBarWrapper = styled.div`
  max-width: 15vw;
  background-color: ${palette.themeBright};
  z-index: 99;
`;

export const StyledSideBar = styled.nav`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 3rem;
  transition: transform 0.2s;
  background-color: ${palette.themePrimary};
  /* box-shadow: 1px 1px 0.5em ${palette.themeBrightGray}, -1px -1px 0em ${palette.themeBrightGray}; */

  ${({ sideBarHeight }) => css`
    transform: translate3d(0, ${sideBarHeight}px, 0);
  `}
`;
