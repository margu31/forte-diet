import styled from 'styled-components';
import { StyledButton } from 'components/UserNavigation/UserNavigation.styled';
import { palette } from 'styles';

export const StyledBackground = styled.section`
  max-width: 85vw;
  height: 100vh;
  flex-grow: 9;
  margin-top: 70px;

  ${StyledButton} {
    color: ${palette.themeDefault};
  }
`;

export const StyledSettingPage = styled.div`
  width: 90rem;
  margin: 0 auto;
  padding-top: 2rem;
`;
