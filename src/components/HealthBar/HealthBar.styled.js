import styled from 'styled-components';
import { motion } from 'framer-motion';
import { IoWater } from 'react-icons/io5';
import { RiRestaurantFill } from 'react-icons/ri';
import { palette, fontSizeKit, fontWeightKit } from 'styles';
import { a11yHidden } from 'styles/a11y';

const StyledWaterDose = styled(IoWater)``;
const StyledCalories = styled(RiRestaurantFill)``;

const StyledNav = styled(motion.nav)`
  width: 140px;
  position: fixed;
  top: 100px;
  right: 30px;
  overflow: hidden;
  z-index: 3;
  display: flex;
  border-radius: 5px;

  h3 {
    ${a11yHidden()};
  }
`;

const StyledLi = styled(motion.li)`
  width: 85%;
  font-size: ${fontSizeKit.xSmall};
  text-align: center;
  padding: 1px;
  display: flex;
  flex-flow: column nowrap;
  margin: 0 auto 20px;
  border-radius: 5px;
  background: linear-gradient(
    to bottom,
    ${palette.themePrimaryThick},
    ${palette.themePrimary}
  );

  div {
    display: flex;
    flex-flow: column nowrap;
    background: ${palette.themeDefaultWhite};
    padding: 13px 0px 10px 0;
    border-radius: 4px;

    p {
      font-size: ${fontSizeKit.small};
      font-weight: ${fontWeightKit.bold};
      margin-bottom: 7px;
      color: ${palette.themePrimaryThick};
    }

    div {
      color: rgba(20, 24, 44, 0.8);
      padding: 2px;
      display: flex;
      flex-flow: row;
      justify-content: center;
      align-items: center;
    }

    span {
      height: 9px;
      font-size: ${fontSizeKit.xSmall};
      font-weight: ${fontWeightKit.bold};
    }
    ${StyledWaterDose} {
      width: 16px;
      height: 18px;
    }
    ${StyledCalories} {
      width: 16px;
      height: 18px;
      margin-right: 4px;
    }
  }
`;

const StyledHeader = styled(motion.div)`
  width: inherit;
  height: 40px;
  background: linear-gradient(
    to left,
    ${palette.themePrimaryThick},
    ${palette.themePrimary}
  );
`;

const StyledContainer = styled(motion.div)`
  width: inherit;
  height: inherit;
  background: ${palette.themeDefaultWhite};

  ${StyledHeader}
`;

const StyledUl = styled(motion.ul)`
  width: inherit;
  height: inherit;
  display: flex;
  flex-flow: column nowrap;
  margin-top: 20px;

  ${StyledLi}
`;

const StyledButton = styled(motion.button)`
  padding: 13px 13px 9px 12px;
  border-radius: 50%;
  cursor: pointer;
  outline: none;
  position: fixed;
  top: 101px;
  right: 30px;
  z-index: 3;
  background: none;
`;

export {
  StyledNav,
  StyledContainer,
  StyledUl,
  StyledLi,
  StyledWaterDose,
  StyledButton,
  StyledHeader,
  StyledCalories
};
