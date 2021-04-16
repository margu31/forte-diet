import styled, { css } from 'styled-components';
import { FaRegCalendarAlt } from 'react-icons/fa';

const StyledCalendarButton = styled.span`
  width: 50px;
  height: 50px;
  padding: 20px;
  box-sizing: border-box;
  ${({ theme }) => css`
    color: ${theme.themeDefault};
    background-color: ${theme.themeDefaultWhite};
    box-shadow: 1px 1px 8px ${theme.themeBrightGray};
  `}
  border-radius: 50%;
  position: fixed;
  bottom: 59px;
  right: 125px;
  cursor: pointer;
  opacity: 0.5;

  &:hover {
    opacity: 1;
    ${({ theme }) => css`
      background: ${theme.themeHover};
    `}
  }
`;

const StyledCalendarIcon = styled(FaRegCalendarAlt)`
  position: absolute;
  bottom: 15px;
  right: 15px;
  width: 20px;
  height: 20px;
`;

export { StyledCalendarButton, StyledCalendarIcon };
