import styled, { css } from "styled-components";

const StyledInputRadio = styled.span`
  ${({
    $fontSize,
    $width,
    $height,
    $borderColor,
    $hoverBackground,
    $hoverColor,
    $backgroundColor,
  }) => css`
    label {
      font-size: ${$fontSize}rem;
      width: ${$width}px;
      height: ${$height}px;
      line-height: ${$height}px;
      background-color: ${$backgroundColor};
      border: 1px solid ${$borderColor};

      &:hover {
        background-color: ${$hoverBackground};
        color: ${$hoverColor};
      }
    }
    input:checked + label {
      background-color: ${$hoverBackground};
      color: ${$hoverColor};
    }
  `}

  input {
    display: none;
  }

  label {
    display: inline-block;
    cursor: pointer;
    text-align: center;
    margin-right: -1px;
  }
`;

export default StyledInputRadio;
