import styled from 'styled-components';
import Title from 'components/Title/Title';

export const StyledBoardWrapper = styled.section`
  padding: 8rem 10rem 0;
`;

export const StyledBoardTitle = styled(Title)`
  margin-top: 0;
  &::before {
    content: none;
  }
`;

export const StyledBoardWindow = styled.article`
  min-height: 100vh;
  max-width: 70%;
  margin: 0 auto;
`;
