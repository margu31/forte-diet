import styled from 'styled-components';
import { StyledButton } from 'components/UserNavigation/UserNavigation.styled';
import { palette } from 'styles';
import { a11yHidden } from 'styles/a11y';

const StyledMyPageWrapper = styled.section`
  min-height: 100vh;
  flex-grow: 9;
  max-width: 85vw;

  ${StyledButton} {
    color: ${palette.themeDefault};
  }

  h2 {
    ${a11yHidden()};
  }
`;

export { StyledMyPageWrapper };
