import styled from 'styled-components';
import { motion } from 'framer-motion';

const StyledMenuList = styled(motion.ul)`
  display: inline-block;
  min-height: 340px;
  max-width: 900px;
  border: none;
  border-left: 1px solid #dbdbdb;
  margin-left: 17%;
  margin-top: 120px;
  margin-bottom: 100px;
  padding: 24px 52px 0 52px;
  box-sizing: border-box;
  position: relative;
  cursor: default;

  & + & {
    margin-top: 14px;
    margin-bottom: 100px;
  }
`;

export { StyledMenuList };
