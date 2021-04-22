import styled, { css } from 'styled-components';
import { StyledButton } from 'components/UserNavigation/UserNavigation.styled';

const StyledMyPageWrapper = styled.section`
  min-height: 100vh;
  flex-grow: 9;
  max-width: 85vw;

  ${StyledButton} {
    ${({ theme }) => css`
      color: ${theme.themeDefault};
    `}
  }
`;

export { StyledMyPageWrapper };
