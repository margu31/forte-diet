import styled from 'styled-components';
import Title from 'components/Title/Title';

export const StyledBoardWrapper = styled.section`
  padding: 8rem 5rem 0;
`;

export const StyledBoardTitle = styled(Title)`
  margin-top: 0;
  &::before {
    content: none;
  }
`;

export const StyledDiets = styled.ul`
  display: flex;
  min-height: 100vh;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-top: 1rem;
`;
