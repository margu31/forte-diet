import Button from "components/Button/Button";
import Form from "components/Form/Form";
import styled from "styled-components";

export const StyledMealModalDialogContainer = styled.div`
  position: relative;
  backdrop-filter: blur(10px);

  /* background-color: cyan; */
  width: 500px;
`;

export const StyledMealModalDialogForm = styled(Form)`
  /* position: relative; */
  /* background-color: yellow; */
  /* width: 800px;
  height: 800px; */
`;

export const StyledButtonContainer = styled.div`
  /* background-color: blue; */
  display: flex;
  justify-content: space-around;
  width: 300px;
  height: 100px;
`;

export const MealDialogPrevButton = styled(Button)`
  position: absolute;
  margin-left: 0;
  top: 45%;
  left: 0;
  width: 100px;
  height: 100px;
`;

export const MealDialogNextButton = styled(Button)`
  position: absolute;
  width: 100px;
  height: 100px;
  top: 45%;
  right: 0%;
`;
