import styled from 'styled-components';
import { a11yHidden } from 'styles';

export const StyledHomePageWrapper = styled.section`
  max-width: 85vw;
  min-height: 100vh;
  position: relative;
  flex-grow: 9;
`;

export const HomePageHeading = styled.h2`
  ${a11yHidden()}
`;
