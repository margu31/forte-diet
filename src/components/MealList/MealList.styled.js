import styled from 'styled-components';
import { TiDelete } from 'react-icons/ti';
import { motion } from 'framer-motion';
import { VscTriangleDown } from 'react-icons/vsc';
import { palette, fontSizeKit, fontWeightKit } from 'styles';

const StyledDeleteButton = styled(motion.button)``;
const StyledDeleteIcon = styled(TiDelete)``;

const StyledMealList = styled(motion.li)`
  list-style: none;
  display: inline-block;
  color: ${palette.themeDefault};
  cursor: default;
  position: relative;
  margin-right: 58px;
  margin-bottom: 40px;

  div {
    border-radius: 50%;
    box-sizing: border-box;
    box-shadow: 0 0 2px 0;
    width: 130px;
    height: 130px;
    overflow: hidden;
    margin-bottom: 19px;
    border: 7px solid ${props => props.$borderColor};
    cursor: pointer;

    img {
      width: auto;
      height: 138px;
    }
  }

  span {
    display: block;
    margin: 0;
    text-align: center;
    font-size: ${fontSizeKit.medium};
    font-weight: ${fontWeightKit.bold};
  }

  span + span {
    margin-top: 8px;
    font-size: ${fontSizeKit.small};
    opacity: 0.6;
  }

  ${StyledDeleteButton} {
    background: none;
    position: absolute;
    padding: 5px;
    right: -20px;
    top: -20px;
    opacity: 0;
    outline: none;

    &:focus {
      opacity: 1;
    }
  }

  ${StyledDeleteIcon} {
    width: 25px;
    height: 22px;
    opacity: 0.2;
    cursor: pointer;
  }

  &:hover {
    ${StyledDeleteButton} {
      opacity: 1;
    }
  }
`;

const StyledLiContainer = styled(motion.div)`
  display: inline-block;
  position: relative;
`;

const StyledDeleteDialog = styled(motion.div)`
  padding: 12px 0;
  text-align: center;
  background: rgba(182, 182, 182, 0.4);
  border-radius: 5px;
  position: absolute;
  z-index: 999;
  top: -60px;
  right: 25px;

  span {
    cursor: pointer;
    padding: 6px 15px;
    z-index: 999;
  }

  &:hover {
    span {
      background: rgba(182, 182, 182, 1);
    }
  }
`;

const StyledTriangle = styled(VscTriangleDown)`
  position: absolute;
  top: 27px;
  right: 20px;
  width: 22px;
  height: 22px;
  color: ${palette.themeBrightGray};
  opacity: 0.4;
`;

const StyledDeleteModal = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  background: pink;
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  opacity: 0;
`;

const StyledContainer = styled(motion.div)``;

export {
  StyledMealList,
  StyledContainer,
  StyledDeleteButton,
  StyledDeleteIcon,
  StyledDeleteDialog,
  StyledDeleteModal,
  StyledLiContainer,
  StyledTriangle
};
