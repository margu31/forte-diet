import styled from 'styled-components';
import { TiHeart } from 'react-icons/ti';
import { ReactComponent as WaterDose } from '../../assets/icons/MenuList/waterDrop.svg';
import { ReactComponent as Donut } from '../../assets/icons/MenuList/donut.svg';

const StyledMenuList = styled.div`
  display: inline-block;
  min-height: 340px;
  max-width: 1000px;
  border: none;
  border-left: 4px solid #b6b6b6;
  margin-left: 15%; /* 왼쪽 nav 179px */
  margin-top: 120px; /* 위쪽 nav 94px */
  margin-bottom: 128px;
  padding: 24px 52px 27px 52px;
  box-sizing: border-box;
  position: relative;

  & + & {
    margin-top: 14px;
    margin-bottom: 128px;
  }

  p {
    max-width: 800px;
    line-height: 30px;
    margin: 0;
    margin-top: 31px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    word-wrap: break-word;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    color: #14182c;
    opacity: 0.8;
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

  span + span {
    font-size: 30px;
    margin-top: 4px;
  }
`;

const StyledLike = styled(TiHeart)`
  color: #faafaf;
  width: 45px;
  height: 45px;
  box-sizing: border-box;
  display: block;

  & + span {
    display: block;
    font-size: 14px;
    color: #faafaf;
    text-align: center;
    margin-top: -5px;
  }
`;

const StyledWaterDose = styled(WaterDose)`
  margin: 10px auto 0;
  width: 40px;
  height: 40px;
  box-sizing: border-box;
  display: block;

  & + span {
    display: block;
    font-size: 14px;
    color: #34b0c0;
    text-align: center;
    margin-top: 3px;
  }
`;

const StyledDonut = styled(Donut)`
  width: 47px;
  height: 47px;
  box-sizing: border-box;
  display: block;
  margin: 5px auto 0;

  & + span {
    display: block;
    font-size: 14px;
    color: #6c3909;
    text-align: center;
    margin-top: -4px;
  }
`;

export {
  StyledMenuList,
  StyledMenuListBar,
  StyledLike,
  StyledWaterDose,
  StyledDonut
};
