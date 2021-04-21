import styled, { css } from 'styled-components';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';
import { motion } from 'framer-motion';

const StyledPrevButton = styled(IoIosArrowBack)``;
const StyledNextButton = styled(IoIosArrowForward)``;

const StyledCalendarModal = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: pink;
  opacity: 0;
  z-index: 999;
`;

const StyledCalendarDialog = styled(motion.div)`
  width: 340px;
  position: fixed;
  bottom: 120px;
  right: 150px;
  font-size: 1rem;
  z-index: 999;
  padding: 0 5px 7px 5px;
  ${({ theme }) => css`
    background: ${theme.themeDefaultWhite};
  `}
  border-radius: 30px;
  box-shadow: 2px 2px 6px rgba(182, 182, 182, 0.6);
  overflow: hidden;

  h2 {
    display: none;
  }
`;

const StyledNav = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  padding: 20px 0 18px 0;
  cursor: default;

  ${({ theme }) => css`
    color: ${theme.themeDark};
  `}

  button {
    background: none;
    cursor: pointer;
    outline: none;
    ${({ theme }) => css`
      color: ${theme.themeDark};
    `}

    ${StyledPrevButton} {
      width: 20px;
      height: inherit;
    }

    ${StyledNextButton} {
      width: 20px;
      height: inherit;
    }
  }

  div {
    width: 150px;
    text-align: center;
    font-size: 1.1rem;

    div {
      padding: 5px 0;
    }

    div + div {
      font-size: 1.5rem;
      ${({ theme }) => css`
        color: ${theme.themePrimaryThick};
      `}
    }
  }
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
  cursor: default;
`;

const StyledDay = styled.div`
  padding: 8px 0 3px 0;
  margin-bottom: 10px;
  text-transform: uppercase;
  ${({ theme }) => css`
    color: ${theme.themeQuaternary};
  `}
  & + & {
    ${({ theme }) => css`
      color: ${theme.themeDark};
    `}
  }
`;

const StyledDate = styled.div`
  cursor: pointer;
  height: 46px;
  padding-top: 14px;
  border-radius: 50%;
  display: flex;
  flex-flow: column;
  overflow: hidden;

  color: ${props => props.$styledColorProps};
  background: ${props => props.$styledBackgroundProps};
  border: ${props => props.$styledTodayBorderProps};
  color: ${props => props.$styledSelectedColorProps};

  &:hover {
    ${({ theme }) => css`
      background: ${theme.themePrimaryThick};
      color: ${theme.themeDefaultWhite};
    `}
  }
`;

const StyledDot = styled.span`
  font-size: 2.5rem;
  margin-top: -30px;
  padding: 20px 0;
  display: inline-block;
  cursor: pointer;

  ${({ theme }) => css`
    color: ${theme.themePrimaryThick};
  `}

  &:hover {
    ${({ theme }) => css`
      color: ${theme.themeDefaultWhite};
    `}
  }

  color: ${props => props.$styledSelectedColorProps};
`;

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
  right: 150px;
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

export {
  StyledCalendarButton,
  StyledCalendarIcon,
  StyledCalendarModal,
  StyledCalendarDialog,
  StyledNav,
  StyledDay,
  StyledDate,
  StyledGrid,
  StyledPrevButton,
  StyledNextButton,
  StyledDot
};
