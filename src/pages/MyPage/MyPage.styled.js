import styled, { css } from 'styled-components';
import { HiOutlinePlus } from 'react-icons/hi';
import { FaRegCalendarAlt } from 'react-icons/fa';

const StyledPlusButton = styled(HiOutlinePlus)`
  padding: 10px;
  box-sizing: border-box;
  width: 70px;
  height: 70px;
  ${({ theme }) => css`
    color: ${theme.themeDark};
  `}
  ${({ theme }) => css`
    background-color: ${theme.themePrimary};
  `}
  border-radius: 50%;
  box-shadow: 0 1px 6px 0;
  position: fixed;
  bottom: 59px;
  right: 57px;
  cursor: pointer;
`;

const StyledCalendarButton = styled.span`
  width: 70px;
  height: 70px;
  padding: 20px;
  box-sizing: border-box;
  ${({ theme }) => css`
    color: ${theme.themeDark};
  `}
  ${({ theme }) => css`
    background-color: ${theme.themePrimary};
  `}
  border-radius: 50%;
  box-shadow: 0 1px 6px 0;
  position: fixed;
  bottom: 59px;
  right: 143px;
  cursor: pointer;
`;

const StyledCalendarIcon = styled(FaRegCalendarAlt)`
  position: absolute;
  bottom: 18px;
  right: 18px;
  width: 34px;
  height: 34px;
`;

export { StyledPlusButton, StyledCalendarButton, StyledCalendarIcon };
