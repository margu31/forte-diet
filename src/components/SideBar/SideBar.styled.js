import styled, { css } from 'styled-components';

export const StyledSideBar = styled.div`
  display: inline-flex;
  flex-direction: column;
  max-width: 210px;
  height: 100vh;

  ${({ theme }) => css`
    background-color: ${theme.themePrimary};
  `}
`;
