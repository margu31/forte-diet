import styled from 'styled-components';
import { StyledButton } from 'components/UserNavigation/UserNavigation.styled';
import { palette } from 'styles';

const StyledMyPageWrapper = styled.section`
  min-height: 100vh;
  flex-grow: 9;
  max-width: 85vw;

  ${StyledButton} {
    color: ${palette.themeDefault};
  }
`;

export { StyledMyPageWrapper };
