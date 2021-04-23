import styled from "styled-components";
import { fontSizeKit, palette } from "../../styles";

const StyledReviewBox = styled.div`
  position: relative;

  label {
    overflow: hidden;
    position: absolute;
    clip: rect(0 0 0 0); /* IE 6,7 */
    clip: rect(0, 0, 0, 0);
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
  }

  input {
    width: 660px;
    height: 30px;
    outline: none;
    border: 1px solid ${palette.themeSecondary};
    border-radius: 5px;
    background-color: ${palette.themeBrightYellow};
    padding: 0 15px;
    margin: 15px 0;
  }

  textarea {
    width: 730px;
    min-height: 240px;
    outline: none;
    border: 1px solid ${palette.themeSecondary};
    border-radius: 5px;
    padding: 20px 15px;
    background-color: ${palette.themeBrightYellow};
    resize: none;
    line-height: 1.8;
    font-size: ${fontSizeKit.medium};
  }

  p {
    position: absolute;
    left: 20px;
    bottom: -30px;
    color: #ff0000;
    font-size: ${fontSizeKit.xSmall};
    margin: 5px 0;
  }
`;

export default StyledReviewBox;
