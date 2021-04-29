import styled, { css } from 'styled-components';
import { ReactComponent as Donut } from 'assets/icons/MenuList/donut.svg';
import { ReactComponent as waterDrop } from 'assets/icons/MenuList/waterDrop.svg';
import { TiHeart } from 'react-icons/ti';
import { motion } from 'framer-motion';
import { fontSizeKit, fontWeightKit, palette } from 'styles';

export const DietItem = styled(motion.li)`
  position: relative;
  padding: 1rem;
  margin-bottom: 5rem;
  width: 30%;
  height: auto;
  border-radius: 15px;
  background-color: rgba(0, 0, 0, 0.1);

  ${({ $isUserItem }) => $isUserItem && `background-color: rgb(242, 104, 48, 0.3)`}
`;

export const StyledDietCard = styled.div`
  /* position: relative; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DietAuthor = styled.div`
  padding-left: 0.5rem;
  font-size: ${fontSizeKit.small};
  font-weight: ${fontWeightKit.bold};
  margin-bottom: 1rem;
`;

export const MealImgContainer = styled.div`
  overflow: hidden;
  width: 340px;
  height: 300px;

  ${({ $borderColor }) => css`
    border: 4px solid ${$borderColor};
  `};

  border-radius: 10px;
`;

export const MealImg = styled.img`
  ${({ $imgStyle }) => css`
    ${$imgStyle};
  `};
`;

export const DietInfos = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  padding: 1rem 0;
`;

export const DietInfo = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1rem;
`;

export const DailyReview = styled.p`
  width: 100%;
  padding: 1rem;
  border-radius: 10px;
  font-size: ${fontSizeKit.small};
  line-height: 1.6rem;
  background-color: ${palette.themeBright};
`;

export const DonutIcon = styled(Donut)`
  width: 30px;
  height: 30px;
`;
export const WaterIcon = styled(waterDrop)`
  width: 25px;
  height: 25px;
`;

export const Likes = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 1.5rem;
  color: ${palette.themeDefault};
  display: flex;
  align-items: center;
`;

export const HeartIcon = styled(TiHeart)`
  color: ${palette.themeDefaultWhite};
  width: 30px;
  height: 30px;
  box-sizing: border-box;
  position: relative;
  top: -0.2rem;
  cursor: pointer;

  &:hover {
    color: ${palette.themeQuaternary};
  }
`;

export const LikedHeartIcon = styled(TiHeart)`
  color: ${palette.themeQuaternary};
  width: 30px;
  height: 30px;
  box-sizing: border-box;
  position: relative;
  top: -0.2rem;
  cursor: pointer;

  &:hover {
    color: ${palette.themeDisable};
  }
`;
