import styled, { css } from 'styled-components';
import { palette } from 'styles';
import Button from 'components/Button/Button';

/* 래퍼 */

export const StyledBoardWrapper = styled.section``;

export const BoardNav = styled.nav`
  padding: 0 20rem 0;
`;

export const BoardUl = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BoardLi = styled.li`
  position: relative;
  border-top: 0.4rem solid ${palette.themeBrightYellow};
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
    $isActive &&
    css`
      &:before {
        position: absolute;
        top: -0.4rem;
        content: '';
        display: block;
        width: 3.6rem;
        border-bottom: 0.4rem solid ${palette.themePrimary};
      }
      &:after {
        content: '';
        display: block;
        width: 3.6rem;
        border-bottom: 2px solid black;
      }
    `}
`;
