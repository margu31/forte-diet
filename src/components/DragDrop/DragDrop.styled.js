import styled from "styled-components";
import { fontSizeKit, fontWeightKit, palette } from "styles";

export const StyledFileWrapper = styled.div`
  /* width: 280px;
  height: 280px; */
  width: 320px;
  height: 320px;
  margin: 40px 0;
  border-radius: 50%;
  position: relative;

  label {
    overflow: hidden;
    position: absolute;
    clip: rect(0 0 0 0);
    clip-path: polygon(0 0, 0 0, 0 0);
    width: 1px;
    height: 1px;
    margin: -1px;
    white-space: nowrap;
  }

  input {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    cursor: pointer;
    opacity: 0;
    z-index: 9999;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }

  canvas {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
`;

export const StyledDefaultView = styled.div`
  width: inherit;
  height: inherit;
  position: absolute;
  top: 0;
  z-index: -2;
  text-align: center;
  padding: 95px;
  padding-left: 110px;
  background-color: ${palette.themeBrightYellow};
  border: 8px solid ${palette.themeSecondary};
  border-radius: 50%;

  svg {
    width: 80px;
    height: 80px;
  }

  p {
    line-height: 3rem;
    font-size: ${fontSizeKit.small};
    font-weight: ${fontWeightKit.bold};
    text-indent: -1rem;
  }
`;

export const StyledHoverView = styled.div`
  width: inherit;
  height: inherit;
  /* background-color: ${palette.themeHover}; */
  /* background-color: #c3d7ff; */
  background-color: #d4e3ff;
  border: 8px solid ${palette.themeSecondary};
  border-radius: 50%;
  position: absolute;
  top: 0;
  z-index: -2;
  text-align: center;
  padding: 85px 0;

  svg {
    width: 80px;
    height: 80px;
  }

  p {
    line-height: 5rem;
    font-size: ${fontSizeKit.medium};
    font-weight: ${fontWeightKit.bold};
  }
`;
