import styled from "styled-components";
import { StyledButton } from "components/UserNavigation/UserNavigation.styled";
import { palette } from "styles";

const StylePostingPage = styled.div`
  min-height: 100vh;
  /* width: 692px; */
  width: 90rem;

  margin: 0 auto;
  margin-top: 70px;
  padding-top: 20px;
  padding-bottom: 100px;

  ${StyledButton} {
    color: ${palette.themeDefault};
  }
`;

export default StylePostingPage;
