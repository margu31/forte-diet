import styled, { css } from "styled-components";

const StyledRadioTitle = styled.p`
  ${({ $titleFontSize, $titleMarginBottom }) => css`
    font-size: ${$titleFontSize}rem;
    margin: ${$titleMarginBottom}px 0;
  `}

  text-indent: 1rem;
`;

const StyledRadioGroup = styled.div`
  display: inline-block;
  border-radius: 5px;
  margin-bottom: 10px;

  span:first-of-type {
    label {
      border-radius: 5px 0 0 5px;
    }
  }
  span:last-of-type {
    label {
      border-radius: 0 5px 5px 0;
    }
  }
`;

export { StyledRadioGroup, StyledRadioTitle };
