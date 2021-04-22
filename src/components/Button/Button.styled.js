import { motion } from "framer-motion";
import styled from "styled-components";
import { fontSizeKit, fontWeightKit, palette } from "styles";

export const StyledButton = styled(motion.button)`
  display: inline-block;
  padding: 1.25rem 6rem 1.1rem;
  margin-bottom: 30px;
  font-size: ${fontSizeKit.medium};
  font-weight: ${fontWeightKit.bold};
  color: ${palette.themeDefault};
  border-radius: 0.5rem;
  background-color: #9f9f9f33;
  cursor: pointer;

  &:hover {
    background-color: ${palette.themeBrightGray};
  }

  & + & {
    margin-left: 2rem;
    background-color: #f2683033;
    color: ${palette.themePrimaryThick};

    &:hover {
      background-color: ${palette.themePrimaryThick};
      color: ${palette.themeDefaultWhite};
    }
  }

  /* 접근성 - 키보드 포커싱일 경우 box-shadow */
  &:focus {
    outline: none;
    box-shadow: 0 0 0 4px ${palette.themePrimary};
  }
  &:focus:not(:focus-visible) {
    box-shadow: none;
  }

  &:disabled {
    cursor: not-allowed;

    &:hover {
      background-color: #f2683033;
      color: ${palette.themePrimaryThick};
    }
  }
`;
