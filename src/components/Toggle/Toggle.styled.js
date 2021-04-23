import styled from "styled-components";
import { fontSizeKit, fontWeightKit, palette } from "../../styles";

const StyledToggle = styled.div`
  font-size: ${fontSizeKit.small};
  width: 700px;
  text-align: right;
  padding-right: 15px;
  margin: 10px 0 20px;

  input {
    display: none;
  }

  label {
    position: relative;
    outline: none;
    display: inline-block;
    cursor: pointer;
    user-select: none;
    width: 95px;
    height: 35px;
    border-radius: 50px;
    border: 4px solid ${palette.themePrimaryThick};
    background-color: ${palette.themeBrightYellow};

    span {
      position: absolute;
      display: inline-block;
      height: 30px;
      line-height: 28px;
      font-weight: ${fontWeightKit.bold};
    }

    & span:first-child {
      right: 15px;
    }

    & span:nth-child(2) {
      display: none;
    }
  }

  & span:last-child {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${palette.themePrimaryThick};
    left: 3px;
    top: 50%;
    transform: translateY(-50%);
    transition: all 0.6s;
  }

  input:checked + label {
    background-color: ${palette.themePrimaryThick};

    & span:last-child {
      background-color: ${palette.themeBrightYellow};
      width: 20px;
      height: 20px;
      transform: translate3d(60px, -50%, 0);
    }

    & span:nth-child(2) {
      display: inline-block;
      color: ${palette.themeBrightYellow};
      left: 10px;
    }

    & span:first-child {
      display: none;
    }
  }
`;

export default StyledToggle;
