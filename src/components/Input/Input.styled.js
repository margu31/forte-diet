import styled from "styled-components";
import { fontSizeKit, fontWeightKit, palette } from "../../styles";

export const StyledInputWrapper = styled.div``;

export const StyledLabel = styled.label`
  display: block;
  text-indent: 1rem;
  margin: 5px 0;
  font-size: ${fontSizeKit.medium};
  font-weight: ${fontWeightKit.bold};
`;

export const StyledInput = styled.input`
  width: 320px;
  height: 35px;
  margin-bottom: 1rem;
  background-color: ${palette.themeBrightYellow};
  border: 1px solid ${palette.themePrimary};
  padding: 0 1rem;
  border-radius: 5px;
  outline: none;
  font-size: ${fontSizeKit.medium};

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px #395b9d;
    opacity: 1;
  }

  &:focus:not(:focus-visible) {
    box-shadow: none;
  }

  &[type="date"] {
    cursor: pointer;

    &::-webkit-calendar-picker-indicator {
      cursor: pointer;

      &:focus {
        outline: none;
        box-shadow: 0 0 0 3px #395b9d;
        opacity: 1;
      }
    }
  }
`;

export const StyledErrorMessage = styled.p`
  color: red;
  text-indent: 1rem;
  font-size: ${fontSizeKit.xSmall};
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
