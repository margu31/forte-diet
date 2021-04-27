import Form from "components/Form/Form";
import styled from "styled-components";
import { palette } from "styles";

export const StyledMealModalDialogContainer = styled.div`
  /* background-color: ${palette.themeHover}; */
  /* display: flex; */
  /* flex-flow: column; */
  /* justify-content: space-between; */
  /* align-items: center; */
  /* backdrop-filter: Blur(100px); */
  /* height: 700px; */
  background-color: ${palette.themeBright};
  border: 3px solid;
  border-color: ${palette.themePrimary};
  border-radius: 20px;
  padding-top: 30px;
  width: 500px;
`;

export const StyledMealModalDialogForm = styled(Form)`
  position: relative;
`;
