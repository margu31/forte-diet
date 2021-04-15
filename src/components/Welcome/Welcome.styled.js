import styled, { css } from 'styled-components';
import { palette } from '../../styles';
import Button from 'components/Button/Button';

/* 래퍼 */

export const StyledWelcomeWrapper = styled.section`
  min-height: 500px;
  background-image: url('/example-bg.jpg');
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
`;

/* 웰컴 컨텐츠 */

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 7% 2rem 7% 25rem;
  width: 40vw;
  min-height: 300px;
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

/* 검색창 */

const SearchSection = styled.section`
  position: relative;
  padding-left: 25rem;
  flex-grow: 1;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1));
`;

const SearchInputForm = styled.form`
  position: absolute;
  top: 50%;
  transform: translate3d(0, -50%, 0);
`;

const SerachBar = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const SearchLabel = styled.label`
  position: absolute;
  top: 50%;
  transform: translate3d(0, -50%, 0);
  font-size: 1.2rem;
  font-weight: 400;
  left: 3rem;
`;

const SearchInput = styled.input`
  width: 200px;
  height: 50px;
  border-radius: 50px 0 0 50px;
  padding-left: 9rem;
  font-size: 1.5rem;
  border: none;

  &::placeholder {
    opacity: 0.5;
  }

  &:focus {
    outline: none;
    ${({ theme }) => css`
      box-shadow: 0 0 0 4px ${theme.themePrimary};
    `}
  }
  &:focus:not(:focus-visible) {
    box-shadow: 0;
  }
`;

const SearchBtn = styled(Button)`
  padding: 2rem 4rem;
  font-size: 1.2rem;
  background-color: transparent;
  border-radius: 0 50px 50px 0;
  color: ${palette.themeDefaultWhite};
  background-color: ${palette.themePrimary};
`;

export const Search = () => (
  <SearchSection>
    <SearchInputForm legend='식단 검색'>
      <fieldset>
        <SerachBar>
          <SearchLabel>식단 검색: </SearchLabel>
          <SearchInput placeholder='브로콜리, 카레 ...' />
          <SearchBtn>Find</SearchBtn>
        </SerachBar>
      </fieldset>
    </SearchInputForm>
  </SearchSection>
);
