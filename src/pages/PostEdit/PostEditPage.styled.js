import styled from "styled-components";
import { StyledButton } from "components/UserNavigation/UserNavigation.styled";
import { palette } from "styles";

const StylePostEditPage = styled.div`
  min-height: 100vh;
  width: 90rem;

  margin: 0 auto;
  margin-top: 70px;
  padding-top: 20px;

  ${StyledButton} {
    color: ${palette.themeDefault};
  }
`;

export default StylePostEditPage;
