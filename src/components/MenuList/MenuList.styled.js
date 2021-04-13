import styled from 'styled-components';
import { TiHeart } from 'react-icons/ti';
import { ReactComponent as WaterDose } from '../../assets/icons/MenuList/waterDrop.svg';
import { ReactComponent as Donut } from '../../assets/icons/MenuList/donut.svg';
import { ReactComponent as Pencil } from '../../assets/icons/MenuList/pencil.svg';

const StyledMenuList = styled.div`
  display: inline-block;
  min-height: 340px;
  max-width: 900px;
  border: none;
  border-left: 4px solid #b6b6b6;
  margin-left: 15%; /* 왼쪽 nav 179px */
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

const StyledDailyReview = styled.div`
  width: 730px;
  border-radius: 10px;
  box-sizing: border-box;
  min-height: 50px;
  margin: 0;
  margin-top: 50px;
  position: relative;

  textarea {
    border-radius: 10px;

    padding: 20px;
    width: 100%;
    line-height: 30px;
    background: inherit;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    word-wrap: break-word;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    color: #14182c;
    opacity: 0.8;
    resize: none;
    font-size: 15px;
    outline: none;

    &:focus {
      box-shadow: 3px 3px 5px #e0dfde;
      background: #fff;
    }

    &::placeholder {
      opacity: 0.7;
    }
  }

  button {
    background: inherit;
    border-radius: 10px;
    font: inherit;
    font-size: 11px;
    color: #14182c;
    padding: 7px;
    box-sizing: border-box;
    border: none;
    position: absolute;
    bottom: 5px;
    right: 45px;
    outline: none;
    cursor: pointer;

    &:hover {
      background: #e0dfde;
    }
  }

  button + button {
    right: 8px;
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
  font-size: 16px;

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

const StyledPencil = styled(Pencil)`
  width: 47px;
  height: 47px;
  box-sizing: border-box;
  display: block;
  margin: 10px auto 0;
  cursor: pointer;

  & + span {
    display: block;
    font-size: 14px;
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
  StyledDailyReview,
  StyledPencil
};
