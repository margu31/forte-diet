import styled, { css } from 'styled-components';
import { ReactComponent as WaterDose } from '../../assets/icons/MenuList/waterDrop.svg';
import { ReactComponent as Donut } from '../../assets/icons/MenuList/donut.svg';

const StyledWaterDose = styled(WaterDose)``;

const StyledDonut = styled(Donut)``;

const StyledHealthBar = styled.div`
  width: 130px;
  height: 480px;
  ${({ theme }) => css`
    border: 4px solid ${theme.themeSecondary};
    background: ${theme.themeBrightYellow};
    box-shadow: 0 2px 5px ${theme.themeBrightGray};
  `}
  border-radius: 10px;
  position: fixed;
  top: 110px;
  right: 20px;
  display: flex;
  flex-flow: column;
  overflow: hidden;
  font-size: 1.3rem;
  padding: 15px 10px;
  z-index: 1;

  h2 {
    width: 120px;
    padding: 15px 0 10px 10px;
    border-radius: 5px 0 0 5px;
    text-align: left;
    font-size: 1.3rem;
    ${({ theme }) => css`
      background: ${theme.themeSecondary};
      color: ${theme.themeDefaultWhite};
      box-shadow: 0 2px 5px ${theme.themeSecondary};
    `}
  }
`;

const StyledContainer = styled.ul`
  display: flex;
  flex-flow: column nowrap;
  margin-top: 25px;

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

export { StyledHealthBar, StyledContainer, StyledWaterDose, StyledDonut };
