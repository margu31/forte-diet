import styled, { css } from "styled-components";

const StyledRadioTitle = styled.p`
  ${({ $titleFontSize, $titleMarginBottom }) => css`
    font-size: ${$titleFontSize}rem;
    margin: ${$titleMarginBottom}px 0;
  `}

  text-indent: 1rem;
`;

const StyledRadioGroup = styled.div`
  ${({
    $backgroundColor,
    $borderColor,
    $width,
    $radioMarginBottom,
    $checkedBackground,
    $checkedColor,
  }) => css`
    background-color: ${$backgroundColor};
    border: 1px solid ${$borderColor};
    width: ${$width};
    margin-bottom: ${$radioMarginBottom}px;

    input:checked + label {
      background-color: ${$checkedBackground};
      color: ${$checkedColor};
    }
  `}

  display: inline-block;
  border-radius: 5px;

  /* & label:last-child {
    border-right: none;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  } */
  /* margin-bottom: 10px; */
`;

export { StyledRadioGroup, StyledRadioTitle };
