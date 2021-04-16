import { motion } from 'framer-motion';
import styled from 'styled-components';
import { palette } from 'styles';

export const StyledButton = styled(motion.button)`
  display: inline-block;
  padding: 2rem 4rem;
  font-size: 1.2rem;
  color: ${palette.themeDefault};
  border-radius: 0.5rem;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    color: ${palette.themeDefaultWhite};
    background-color: ${palette.themeHover};
  }

  & + & {
    margin-left: 2rem;
  }

  /* 접근성 - 키보드 포커싱일 경우 box-shadow */
  &:focus {
    outline: none;
    box-shadow: 0 0 0 4px ${palette.themePrimary};
  }
  &:focus:not(:focus-visible) {
    box-shadow: none;
  }
`;
