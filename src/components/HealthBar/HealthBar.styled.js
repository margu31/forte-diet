import styled, { css } from 'styled-components';
import { ReactComponent as WaterDose } from '../../assets/icons/MenuList/waterDrop.svg';
import { ReactComponent as Donut } from '../../assets/icons/MenuList/donut.svg';
import { motion } from 'framer-motion';
import { ReactComponent as Fork } from '../../assets/icons/healthBar/fork.svg';

const StyledWaterDose = styled(WaterDose)``;

const StyledDonut = styled(Donut)``;

const StyledFoodIcon = styled(Fork)`
  color: #fff;
`;

const StyledNav = styled(motion.nav)`
  width: 200px;
  padding: 15px 0 10px 0;
  text-align: center;
  font-size: 1.3rem;
  ${({ theme }) => css`
    background: linear-gradient(
      to left,
      ${theme.themePrimaryThick},
      ${theme.themePrimary}
    );
    color: ${theme.themeDefaultWhite};
  `}
  cursor: pointer;
  outline: none;
  position: fixed;
  top: 100px;
  right: 0;
  z-index: 2;

  ${StyledFoodIcon} {
    width: 30px;
    height: 30px;
  }
`;

const StyledHealthBar = styled(motion.div)`
  width: 200px;
  height: 670px;
  ${({ theme }) => css`
    background: ${theme.themeDefaultWhite};
    box-shadow: 0 2px 5px ${theme.themeBrightGray};
  `}
  position: fixed;
  top: 100px;
  right: 0;
  display: flex;
  flex-flow: column;
  overflow: hidden;
  font-size: 1.3rem;
  padding: 15px 10px;
  z-index: 1;
`;

const StyledContainer = styled.ul`
  display: flex;
  flex-flow: column nowrap;
  margin-top: 65px;

  li {
    font-size: 1.1rem;
    text-align: center;
    padding: 5px 0 0 0;
    display: flex;
    flex-flow: column nowrap;
    border-bottom: 2px solid rgba(242, 104, 48, 0.2);
    margin-bottom: 15px;

    h3 {
      font-size: 1.2rem;
      margin-bottom: 10px;
      ${({ theme }) => css`
        color: ${theme.themeSecondary};
      `}
    }

    div {
      display: flex;
      justify-content: center;

      span {
        margin-bottom: 5px;
        color: rgba(20, 24, 44, 0.8);
        padding: 4px;
      }

      ${StyledDonut} + span {
        margin-bottom: 10px;
      }

      ${StyledWaterDose} {
        width: 18px;
        height: 19px;
      }

      ${StyledDonut} {
        height: 20px;
      }
    }
  }
`;

export {
  StyledHealthBar,
  StyledContainer,
  StyledWaterDose,
  StyledDonut,
  StyledNav,
  StyledFoodIcon
};
