import styled, { css } from 'styled-components';
import { palette } from 'styles';
import Button from 'components/Button/Button';

export const BoardNav = styled.nav`
  padding: 0 20rem 0;
  border-top: 0.4rem solid ${palette.themePrimary};
  background-color: ${palette.themeBright};
`;

export const BoardUl = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BoardLi = styled.li`
  position: relative;
  min-height: 100%;
  & + & {
    margin-left: 3rem;
  }
`;

export const BoardBtn = styled(Button)`
  &:hover {
    background-color: transparent;
  }
  ${({ $isActive }) =>
    css`
      &:before {
        position: absolute;
        top: -0.4rem;
        content: '';
        display: block;
        width: 6.5rem;
        border-bottom: 0.4rem solid
          ${$isActive ? palette.themePrimaryThick : palette.themeDefaultWhite};
        transition: all 0.5s;
      }
      &:after {
        content: '';
        display: block;
        width: 6.5rem;
        ${$isActive && `border-bottom: 2px solid black`};
      }
    `}
`;
