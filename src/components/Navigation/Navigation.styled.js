import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const StyledUl = styled.ul`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const StyledLi = styled.li`
  margin-left: 5rem;
`;

export const StyledNavLink = styled(NavLink)`
  display: inline-block;
  width: 6rem;
  padding: 22px 150px 22px 22px;
  font-size: 1.6rem;
  border-radius: 20px 0 0 20px;
  ${({ theme }) => css`
    color: ${theme.themeDefaultWhite};
    &.active {
      color: ${theme.themePrimary};
      background-color: ${theme.themeBright};
      box-shadow: -5px 5px rgba(0, 0, 0, 0.25);
    }
  `}
`;
