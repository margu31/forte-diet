import styled, { css } from 'styled-components';
import { StyledButton } from 'components/UserNavigation/UserNavigation.styled';

const StyledMyPageWrapper = styled.section`
  min-height: 100vh;

  ${StyledButton} {
    ${({ theme }) => css`
      color: ${theme.themeDefault};
    `}
  }
`;

export { StyledMyPageWrapper };
