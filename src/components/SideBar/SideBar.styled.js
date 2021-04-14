import styled, { css } from 'styled-components';

export const StyledSideBar = styled.nav`
  display: inline-flex;
  flex-direction: column;
  align-items: center;

  ${({ theme }) => css`
    background-color: ${theme.themePrimary};
  `}
`;
