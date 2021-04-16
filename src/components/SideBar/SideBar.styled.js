import styled, { css } from 'styled-components';

export const StyledSideBarWrapper = styled.div`
  max-width: 15vw;
  ${({ theme }) => css`
    background-color: ${theme.themePrimary};
  `}
`;

export const StyledSideBar = styled.nav`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  padding-top: 15vh;
  padding-bottom: 3rem;
  transition: transform 0.2s;

  ${({ sideBarHeight }) => css`
    transform: translate3d(0, ${sideBarHeight}px, 0);
  `}
`;
