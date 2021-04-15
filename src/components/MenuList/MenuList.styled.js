import styled, { css } from 'styled-components';
import { TiHeart } from 'react-icons/ti';
import { ReactComponent as WaterDose } from '../../assets/icons/MenuList/waterDrop.svg';
import { ReactComponent as Donut } from '../../assets/icons/MenuList/donut.svg';
import { ReactComponent as Pencil } from '../../assets/icons/MenuList/pencil.svg';
import { VscTriangleRight } from 'react-icons/vsc';
import { motion } from 'framer-motion';

const StyledMenuList = styled.div`
  display: inline-block;
  min-height: 340px;
  max-width: 900px;
  border: none;
  ${({ theme }) => css`
    border-left: 4px solid ${theme.themeBrightGray};
  `}
  margin-left: 17%; /* 왼쪽 nav 179px */
  margin-top: 120px; /* 위쪽 nav 94px */
  margin-bottom: 128px;
  padding: 24px 52px 27px 52px;
  box-sizing: border-box;
  position: relative;
  cursor: default;

  & + & {
    margin-top: 14px;
    margin-bottom: 128px;
  }
`;

const StyledMenuListBar = styled.div`
  color: #14182c;
  width: 70px;
  height: 261px;
  position: absolute;
  top: 24px;
  left: -108px;
  display: flex;
  flex-flow: column;
  align-items: center;
  font-size: 1.4rem;

  span + span {
    font-size: 2.8rem;
    margin-top: 4px;
  }
`;

const StyledLike = styled(TiHeart)`
  color: #faafaf;
  width: 45px;
  height: 45px;
  box-sizing: border-box;
  display: block;
  margin-top: 20px;

  & + span {
    display: block;
    font-size: 1.2rem;
    color: #faafaf;
    text-align: center;
    margin-top: -5px;
  }
`;

const StyledContainer = styled(motion.div)``;

const StyledWaterDose = styled(WaterDose)`
  margin: 10px auto 0;
  width: 40px;
  height: 40px;
  box-sizing: border-box;
  display: block;
  cursor: pointer;

  & + span {
    display: block;
    font-size: 1.2rem;
    color: #34b0c0;
    text-align: center;
    margin-top: 3px;
  }
`;

const StyledWaterDoseDialog = styled(motion.div)`
  width: 80px;
  height: auto;
  position: absolute;
  border-radius: 8px;
  top: 70px;
  left: -78px;
  background: rgba(182, 182, 182, 0.4);
  ${({ theme }) => css`
    box-shadow: -1px 1px 3px ${theme.themeBrightGray};
  `}
  display: flex;
  flex-flow: column;
  font-size: 1.2rem;

  span {
    text-align: center;
    padding: 11px;
    border-radius: 8px 8px 0 0;
    cursor: pointer;
    opacity: 0.6;
  }

  span + span {
    font-size: 1.2rem;
    border-radius: 0;
    margin-top: 0;
    ${({ theme }) => css`
      border-top: 1px solid ${theme.themeBrightGray};
    `}
  }

  span + span + span + span {
    border-radius: 0 0 8px 8px;
  }

  span:hover {
    background: #34b0c0;
    opacity: 0.8;
  }
`;

const StyledTriangle = styled(VscTriangleRight)`
  position: absolute;
  right: -17px;
  top: 48%;
  width: 25px;
  height: 25px;
  ${({ theme }) => css`
    color: ${theme.themeBrightGray};
  `}
  opacity: 0.4;
`;

const StyledDonut = styled(Donut)`
  width: 47px;
  height: 47px;
  box-sizing: border-box;
  display: block;
  margin: 5px auto 0;

  & + span {
    display: block;
    font-size: 1.2rem;
    color: #6c3909;
    text-align: center;
    margin-top: -4px;
    letter-spacing: 0;
  }
`;

const StyledPencil = styled(Pencil)`
  width: 47px;
  height: 47px;
  box-sizing: border-box;
  display: block;
  margin: 10px auto 0;
  cursor: pointer;

  & + span {
    display: block;
    font-size: 1.2rem;
    color: #ffc219;
    text-align: center;
    margin-top: 4px;
  }
`;

export {
  StyledMenuList,
  StyledMenuListBar,
  StyledLike,
  StyledWaterDose,
  StyledDonut,
  StyledPencil,
  StyledWaterDoseDialog,
  StyledTriangle,
  StyledContainer
};
