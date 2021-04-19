import styled, { css } from 'styled-components';
import { HiOutlinePlus } from 'react-icons/hi';

const StyledPlusButton = styled(HiOutlinePlus)`
  padding: 10px;
  box-sizing: border-box;
  width: 50px;
  height: 50px;
  ${({ theme }) => css`
    color: ${theme.themeDefault};
    background-color: ${theme.themeDefaultWhite};
    box-shadow: 1px 1px 8px ${theme.themeBrightGray};
  `}
  border-radius: 50%;
  position: fixed;
  bottom: 59px;
  right: 90px;
  cursor: pointer;
  opacity: 0.5;

  &:hover {
    opacity: 1;
    ${({ theme }) => css`
      background: ${theme.themeHover};
    `}
  }
`;

export { StyledPlusButton };
