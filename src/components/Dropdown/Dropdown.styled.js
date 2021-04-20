import { hideVisually } from 'polished';
import styled, { css } from 'styled-components';
import { ReactComponent as Dropdown } from 'assets/icons/dropdown.svg';

export const StyledDropdownWrapper = styled.div`
  position: relative;
`;

export const StyledWindow = styled.div`
  position: relative;
  width: 320px;
  padding: 2rem 25rem 2rem 2rem;
  font-size: 1.2rem;
  border-left: 1px solid rgba(0, 0, 0, 0.1);
  background-color: transparent;
  cursor: pointer;

  ${({ theme }) => css`
    background-color: ${theme.themeDefaultWhite};
    &:hover {
      background-color: ${theme.themeHover};
    }
  `}
`;

export const StyledSelect = styled.ul`
  position: absolute;
  top: 100%;
`;

export const StyledOptions = styled.li`
  white-space: nowrap;
  width: 320px;
  padding: 2rem 25rem 2rem 2rem;
  font-size: 1.2rem;
  border-left: 1px solid rgba(0, 0, 0, 0.1);
  background-color: transparent;
  cursor: pointer;
  transition: all 0.2s;

  ${({ theme }) => css`
    background-color: ${theme.themeDefaultWhite};
    &:hover {
      background-color: ${theme.themeHover};
    }
  `}

  ${({ $isShowOptions }) => {
    return $isShowOptions
      ? css`
          height: auto;
        `
      : hideVisually();
  }}
`;

export const StyledDownArrow = styled(Dropdown)`
  position: absolute;
  top: 50%;
  right: 5%;
  transform: translate3d(0, -50%, 0);
`;
