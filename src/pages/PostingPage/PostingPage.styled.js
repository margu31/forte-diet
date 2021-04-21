import styled, { css } from "styled-components";
import { StyledButton } from "components/UserNavigation/UserNavigation.styled";

const StylePostingPage = styled.div`
  min-height: 100vh;
  width: 692px;
  margin: 0 auto;
  margin-top: 70px;
  padding-top: 20px;

  ${StyledButton} {
    ${({ theme }) => css`
      color: ${theme.themeDefault};
    `}
  }
`;

export default StylePostingPage;
