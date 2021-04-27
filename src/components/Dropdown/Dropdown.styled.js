import { hideVisually } from 'polished';
import styled, { css } from 'styled-components';
import { ReactComponent as Dropdown } from 'assets/icons/dropdown.svg';
import { fontSizeKit, palette } from '../../styles';

export const StyledDropdownWrapper = styled.div`
  position: relative;
`;

export const StyledWindow = styled.div`
  position: relative;
  padding: 2rem;
  padding-right: 18rem;
  width: 26rem;
  font-size: ${fontSizeKit.small};
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
  padding: 2rem;
  padding-right: 21.2rem;
  font-size: ${fontSizeKit.small};
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-left: 1px solid rgba(0, 0, 0, 0.1);
  background-color: ${palette.themeDefaultWhite};
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: ${palette.themeHover};
  }

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
