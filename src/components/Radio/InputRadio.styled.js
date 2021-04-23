import styled from "styled-components";
import { fontSizeKit, fontWeightKit, palette } from "styles";

const StyledInputRadio = styled.span`
  label {
    font-size: ${fontSizeKit.medium};
    width: 86px;
    height: 35px;
    line-height: 35px;
    background-color: ${palette.themeBrightYellow};
    border: 1px solid ${palette.themePrimary};
    display: inline-block;
    cursor: pointer;
    text-align: center;
    margin-right: -1px;

    &:hover {
      background-color: ${palette.themePrimary};
      color: ${palette.themeDefaultWhite};
    }
  }
  input:checked + label {
    background-color: ${palette.themePrimary};
    color: ${palette.themeDefaultWhite};
  }

  input {
    display: none;
  }
`;

export default StyledInputRadio;
