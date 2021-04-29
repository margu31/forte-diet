import styled, { css } from 'styled-components';
import { palette } from 'styles';
import { Button } from 'components';

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

export const BoardBtn = styled(props => (
  <Button style={{ backgroundColor: 'transparent' }} {...props} />
))`
  &:hover {
    color: ${palette.themePrimaryThick};
    background-color: transparent;
  }
  ${({ $isActive }) =>
    css`
      &:before {
        position: absolute;
        top: -0.4rem;
        left: 50%;
        transform: translate3d(-50%, 0, 0);
        content: '';
        display: block;
        width: 5rem;
        border-bottom: 0.4rem solid
          ${$isActive ? palette.themePrimaryThick : palette.themeDefaultWhite};
        transition: all 0.5s;
      }
      &:after {
        content: '';
        position: absolute;
        bottom: 50%;
        left: 50%;
        transform: translate3d(-50%, 0, 0);
        width: 5.5rem;
        ${$isActive && `border-bottom: 2px solid black`};
      }
    `}
`;
