import styled from "styled-components";
import { palette } from "../../styles";

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
    width: 690px;
    min-height: 170px;
    outline: none;
    border: 1px solid ${palette.themeSecondary};
    border-radius: 5px;
    padding: 20px 15px;
    background-color: ${palette.themeBrightYellow};
    resize: none;
    letter-spacing: 0.15rem;
    line-height: 1.5;
    font-size: 1.5rem;
  }

  p {
    position: absolute;
    left: 15px;
    bottom: -25px;
    color: #ff0000;
    font-size: 1rem;
    margin: 5px 0;
  }
`;

export default StyledReviewBox;
