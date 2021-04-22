import styled from 'styled-components';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';
import { motion } from 'framer-motion';
import { palette, fontSizeKit, fontWeightKit } from 'styles';

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
  top: 310px;
  right: 215px;
  font-size: ${fontSizeKit.small};
  font-weight: ${fontWeightKit.bold};
  color: ${palette.themeDark};
  z-index: 999;
  padding: 0 5px 7px 5px;
  background: ${palette.themeDefaultWhite};
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

  button {
    background: none;
    cursor: pointer;
    outline: none;
    color: ${palette.themeDark};

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
    font-weight: ${fontWeightKit.bold};

    div {
      padding: 5px 0;
      font-size: ${fontSizeKit.small};
    }

    div + div {
      font-size: ${fontSizeKit.medium};
      color: ${palette.themePrimaryThick};
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
  color: ${palette.themeQuaternary};

  & + & {
    color: ${palette.themeDark};
  }
`;

const StyledDate = styled.div`
  cursor: pointer;
  height: 46px;
  padding-top: 11px;
  border-radius: 50%;
  display: flex;
  flex-flow: column;
  overflow: hidden;

  color: ${props => props.$styledColorProps};
  background: ${props => props.$styledBackgroundProps};
  border: ${props => props.$styledTodayBorderProps};
  color: ${props => props.$styledSelectedColorProps};

  &:hover {
    background: ${palette.themePrimaryThick};
    color: ${palette.themeDefaultWhite};
  }
`;

const StyledDot = styled.span`
  font-size: ${fontSizeKit.xLarge};
  margin-top: -33px;
  padding: 20px 0;
  display: inline-block;
  cursor: pointer;
  color: ${palette.themePrimaryThick};

  &:hover {
    color: ${palette.themeDefaultWhite};
  }

  color: ${props => props.$styledSelectedColorProps};
`;

const StyledCalendarButton = styled.span`
  width: 50px;
  height: 50px;
  padding: 20px;
  box-sizing: border-box;
  color: ${palette.themeDefault};
  background-color: ${palette.themeDefaultWhite};
  box-shadow: 1px 1px 8px ${palette.themeBrightGray};
  border-radius: 50%;
  position: fixed;
  bottom: 59px;
  right: 150px;
  cursor: pointer;
  opacity: 0.5;

  &:hover {
    opacity: 1;
    background: ${palette.themeHover};
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
