import styled from 'styled-components';
import { palette } from '../../styles';

export const StyledLogo = styled.div`
  padding: 5rem;
  font-size: 2rem;
  margin: 3rem 0;
  color: ${palette.themeDefaultWhite};
  border-radius: 10px;

  transition: all 0.2s;

  &:hover {
    transform: scale(1.2, 1.2);
  }
`;
