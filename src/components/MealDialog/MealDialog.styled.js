import Button from "components/Button/Button";
import Form from "components/Form/Form";
import styled from "styled-components";
import { palette } from "styles";

export const StyledMealModalDialogContainer = styled.div`
  background-color: ${palette.themeHover};
  /* height: 700px; */
  width: 500px;
`;

export const StyledMealModalDialogForm = styled(Form)`
  position: relative;
  /* width: 800px;
  height: 800px; */
`;
