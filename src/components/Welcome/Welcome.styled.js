import styled from 'styled-components';
import { a11yHidden, fontSizeKit, palette } from '../../styles';
import Button from 'components/Button/Button';

/* 래퍼 */

export const StyledWelcomeWrapper = styled.section`
  min-height: 460px;
  background: url('/home-welcome.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
`;

/* 헤딩 */

export const WelcomeHeading = styled.h3`
  ${a11yHidden()}
`;

/* 웰컴 컨텐츠 */

const MessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 7% 2rem 3% 20rem;
  min-height: 280px;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1));
`;

const StyledDiv = styled.div`
  width: 25vw;
`;

const StyledP = styled.p`
  padding: 1rem 0 2rem;
  font-size: ${fontSizeKit.small};
  line-height: 1.6rem;
  letter-spacing: 0.15rem;
  color: ${palette.themeDefaultWhite};
`;

const StyledTitle = styled.h4`
  font-size: ${fontSizeKit.xxLarge};
  color: ${palette.themeDefaultWhite};
`;

const TutorialBtn = styled(Button)`
  padding: 1rem 2rem;
  background-color: transparent;
  border-radius: 50px;
  color: ${palette.themePrimary};
  border: 2px solid ${palette.themePrimary};

  &:hover {
    background-color: ${palette.themePrimary};
    color: ${palette.themeDefaultWhite};
  }
`;

export const WelcomeContent = () => (
  <MessageWrapper>
    <StyledDiv>
      <StyledTitle>우연히, 식단</StyledTitle>
      <StyledP>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.
      </StyledP>
      <TutorialBtn>튜토리얼로 이동하기</TutorialBtn>
    </StyledDiv>
  </MessageWrapper>
);

/* 검색창 */

export const SearchSection = styled.section`
  position: relative;
  padding-left: 20rem;
  flex-grow: 1;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.1));
`;

export const SearchHeading = styled.h4`
  ${a11yHidden()}
`;

export const SearchInputForm = styled.form`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
`;

export const SerachBar = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const SearchLabel = styled.label`
  position: absolute;
  top: 50%;
  transform: translate3d(0, -50%, 0);
  font-size: ${fontSizeKit.small};
  font-weight: 400;
  left: 3rem;
`;

export const SearchInput = styled.input`
  padding: 1.95rem 9rem;
  padding-left: 10rem;
  border-radius: 50px 0 0 50px;
  font-size: ${fontSizeKit.small};
  border: none;
  outline: none;

  &::placeholder {
    opacity: 0.5;
  }
`;

export const SearchBtn = styled(Button)`
  padding: 2rem 6rem;
  font-size: ${fontSizeKit.small};
  background-color: transparent;
  border-radius: 0 50px 50px 0;
  color: ${palette.themeDefaultWhite};
  background-color: ${palette.themePrimary};
  margin: 0;

  &:hover {
    background-color: ${palette.themeSecondary};
  }
`;
