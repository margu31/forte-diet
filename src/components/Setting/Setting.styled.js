import styled from "styled-components";
import { fontSizeKit, fontWeightKit, palette } from "styles";

export const StyledFormWrapper = styled.div`
  margin-top: 5rem;
  border-radius: 5px;
  display: flex;
  justify-content: space-evenly;
`;
export const StyledImage = styled.div`
  background-image: url("/setting-_image.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 400px;
  height: 490px;
`;

export const StyledInputWrapper = styled.div`
  margin-top: 4rem;
`;

export const StyledSettingInput = styled.div`
  position: relative;

  label {
    display: inline-block;
    font-size: ${fontSizeKit.medium};
    font-weight: ${fontWeightKit.bold};
    width: 60px;
    text-align: right;
  }

  input {
    box-sizing: border-box;
    width: 30rem;
    height: 35px;
    font-size: ${fontSizeKit.small};
    margin-left: 2rem;
    margin-bottom: 2.5rem;
    padding-right: 35px;
    border-radius: 0;
    background-color: inherit;

    border: 0;
    border-bottom: 1px solid ${palette.themePrimary};

    &:focus {
      border: 2px solid;
      border-image: linear-gradient(to left, #f12711 0%, #f5af19 100%);
      border-image-slice: 1;
    }
  }

  svg {
    position: absolute;
    top: 15px;
    right: 45px;
    cursor: pointer;
  }
`;
export const StyledError = styled.p`
  color: #ff0000;
  font-size: ${fontSizeKit.xSmall};
  position: absolute;
  bottom: 7px;
  left: 8.5rem;
`;

export const StyledRadio = styled.div`
  width: 417px;
  margin-bottom: 2.4rem;
  margin-top: 1.8rem;

  p {
    display: inline-block;
    font-size: ${fontSizeKit.medium};
    font-weight: ${fontWeightKit.bold};
    text-align: right;
    width: 60px;
    margin-right: 2rem;
  }

  label {
    box-sizing: border-box;
    width: 151px;
    height: 35px;
    line-height: 35px;
    font-size: ${fontSizeKit.small};
    cursor: auto;

    background-color: inherit;

    &:hover {
      background-color: inherit;
      color: inherit;
    }
  }
`;

export const StyledButtonGroup = styled.div`
  padding-top: 30px;

  button {
    width: 18rem;
    font-size: ${fontSizeKit.medium};
    font-weight: ${fontWeightKit.bold};
  }
`;
