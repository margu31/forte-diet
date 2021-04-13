import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const StyledUl = styled.ul`
  display: inline-flex;
  flex-direction: column;
  padding-left: 10px;
`;

export const StyledLi = styled.li``;

export const StyledLink = styled(NavLink)`
  ${({ theme }) => {
    return css`
      padding: 22px 60px 22px 22px;
      border-radius: 20px 0 0 20px;
      margin-bottom: 10px;
      color: ${theme.themeDefaultWhite};
      &.active {
        color: ${theme.themePrimary};
        background-color: ${theme.themeBright};
        box-shadow: -5px 5px rgba(0, 0, 0, 0.25);
      }
    `;
  }}
`;
