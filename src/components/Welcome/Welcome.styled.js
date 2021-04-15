import styled, { css } from 'styled-components';
import { palette } from '../../styles';
import Button from '../Button/Button';

export const StyledWelcomeWrapper = styled.section`
  min-height: 600px;
  background-image: url('/example-bg.jpg');
  display: flex;
  flex-direction: column;
  padding-left: 180px;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20% 2rem 2rem 2rem;
  width: 30vw;
`;

const StyledP = styled.p`
  padding: 1rem 0 2rem;
  font-size: 1.2rem;
  line-height: 1.6rem;
  letter-spacing: 0.15rem;
  ${({ theme }) =>
    css`
      color: ${theme.themeDefaultWhite};
    `}
`;

const StyledTitle = styled.h2`
  font-size: 3rem;
  ${({ theme }) =>
    css`
      color: ${theme.themeDefaultWhite};
    `}
`;

const TutorialBtn = styled(Button)`
  padding: 1rem 2rem;
  font-size: 1.2rem;
  background-color: transparent;
  border-radius: 50px;
  color: ${palette.themeDefaultWhite};
  border: 2px solid ${palette.themeDefaultWhite};
`;

export const WelcomeContent = () => (
  <StyledDiv>
    <StyledTitle>우연히, 식단</StyledTitle>
    <StyledP>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat.
    </StyledP>
    <TutorialBtn>튜토리얼로 이동!</TutorialBtn>
  </StyledDiv>
);
