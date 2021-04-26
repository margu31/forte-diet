import styled, { css } from 'styled-components';
import { ReactComponent as Donut } from 'assets/icons/MenuList/donut.svg';
import { ReactComponent as waterDrop } from 'assets/icons/MenuList/waterDrop.svg';
import { TiHeart } from 'react-icons/ti';
import { palette } from '../../styles';

export const DietItem = styled.li`
  padding: 1rem;
  margin-bottom: 5rem;
  width: 30%;
  border-radius: 15px;
  background-color: rgba(0, 0, 0, 0.1);
`;

export const StyledDietCard = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DietAuthor = styled.div`
  padding-left: 0.5rem;
  font-size: 1.4rem;
  margin-bottom: 1rem;
`;

export const MealImg = styled.img`
  ${({ $borderColor }) => css`
    border: 4px solid ${$borderColor};
  `}
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

export const DietInfos = styled.section`
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
  font-size: 1.2rem;
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
  top: 1rem;
  right: 1rem;
  color: ${palette.themeDefault};
  display: flex;
  align-items: center;
`;

export const HeartIcon = styled(TiHeart)`
  color: ${palette.themeDisable};
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
