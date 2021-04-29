import styled from 'styled-components';
import { Title } from 'components';
import { motion } from 'framer-motion';

export const StyledBoardWrapper = styled.section`
  padding: 8rem 5rem 0;
`;

export const StyledBoardTitle = styled(Title)`
  margin-top: 0;
  &::before {
    content: none;
  }
`;

export const StyledDiets = styled(motion.ul)`
  display: flex;
  min-height: 100vh;
  flex-wrap: wrap;
  justify-content: space-around;
  padding-top: 3rem;
`;
