import styled from 'styled-components';
import { motion } from 'framer-motion';
import { fontSizeKit, fontWeightKit, palette } from 'styles';

export const StyledTitle = styled(motion.h2)`
  display: inline-block;
  font-size: ${fontSizeKit.xxLarge};
  font-weight: ${fontWeightKit.bold};
  position: relative;
  text-indent: 20px;
  height: 50px;
  line-height: 50px;
  margin-top: 20px;

  &::before {
    position: absolute;
    content: '';
    display: block;
    width: 5px;
    height: 50px;
    background-color: ${palette.themePrimaryThick};
  }
`;
