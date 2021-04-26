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

  h2 {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
    clip: rect(1px, 1px, 1px, 1px);
  }
`;

export { StyledMyPageWrapper };
