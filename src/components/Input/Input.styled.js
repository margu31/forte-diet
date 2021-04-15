import styled, { css } from "styled-components";

export const StyledInputWrapper = styled.div`
  /* display: inline-flex;
  flex-flow: column; */
`;

export const StyledLabel = styled.label`
  ${({ $labelFontSize }) =>
    css`
      font-size: ${$labelFontSize}rem;
    `}

  display: block;
  text-indent: 1rem;
  margin: 5px 0;

  &[for="postingFile"] {
    width: 230px;
    height: 230px;
    border-radius: 50%;
    border: 8px solid #395b9d;
    text-align: center;
    cursor: pointer;
    line-height: 214px;
    background-color: #fefdf8;
    margin: 40px 0;
    font-size: 1.3rem;
  }
`;

export const StyledInput = styled.input`
  /* flex: 1;
  border: 1px solid #585757;
  padding: 0.6em;
  font: 500 0.9rem "Noto Sans";
  border-radius: 5px;
  background: transparent;
  color: #000; */

  /* &::placeholder {
    color: rgba(147, 153, 210, 0.56);
  }

  &:read-only {
    color: rgba(147, 153, 210, 0.56);
  }

  &:disabled {
    cursor: not-allowed;
    color: rgba(147, 153, 210, 0.56);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 4px rgba(147, 153, 210, 0.56);
    &:not(:focus-visible) {
      box-shadow: none;
    }
  } */

  ${({
    $width,
    $height,
    $marginBottom,
    $backgroundColor,
    $borderColor,
    $paddingSide,
    $inputFontSize,
  }) => css`
    width: ${$width}px;
    height: ${$height}px;
    margin-bottom: ${$marginBottom}px;
    background-color: ${$backgroundColor};
    border: 1px solid ${$borderColor};
    padding: 0 ${$paddingSide}px;
    font-size: ${$inputFontSize}rem;
  `}

  border-radius: 5px;
  outline: none;

  &[type="file"] {
    display: none;
  }

  &[type="date"] {
    cursor: pointer;
  }
`;

export const StyledErrorMessage = styled.p`
  color: red;
`;

export const StyledlabelHidden = styled.label`
  overflow: hidden;
  position: absolute;
  clip: rect(0 0 0 0);
  clip-path: polygon(0 0, 0 0, 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  white-space: nowrap;
`;
