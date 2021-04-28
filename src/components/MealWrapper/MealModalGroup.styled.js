import Button from "components/Button/Button";
import Form from "components/Form/Form";
import styled, { css } from "styled-components";
import { palette } from "styles";

export const StyledMealContainer = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  /* backdrop-filter: blur(4px); */
`;

export const StyledMealWrapper = styled.div`
  position: relative;
  display: flex;
  /* justify-content: center; */
  /* align-items: center; */
  width: 500px;
  height: 600px;
`;

export const MealDialogSubmitButton = styled(Button)`
  position: absolute;
  bottom: 2%;
  left: 0;
  margin: 0;
  padding: 0.5em 2em;
  background-color: transparent;
  border-radius: 50px;
  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: coral;
    color: ${palette.themeDefaultWhite};
  }

  /* edit button 스타일 */
  && + button {
    background-color: transparent;
    color: ${palette.themeDefault};
    border-radius: 10px;
    margin: 0;
  }
`;

export const MealDialogEditButton = styled(Button)`
  /* margin: 0; */
  /* margin-left: 0; */
  position: absolute;
  bottom: 2%;
  right: 0;
  padding: 0.5em 2em;
  border-radius: 10px;
  background-color: transparent;

  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: coral;
    color: ${palette.themeDefaultWhite};
  }

  /* prev button 스타일 */
  && + button {
    background-color: transparent;
    color: ${palette.themeDefault};
    border-radius: 10px;
    margin: 0;
  }
`;

export const MealDialogPrevButton = styled(Button)`
  position: absolute;
  top: 45%;
  left: 0;
  padding: 0.5em 2em;
  color: white;
  border-radius: 10px;
  &:hover {
    transition: all 0.3s ease-in-out;
    /* background-color: coral; */
    color: #fff;
  }

  /* next button 스타일 */
  && + button {
    background-color: transparent;
    color: ${palette.themeDefault};
    border-radius: 10px;
    margin: 0;
  }
`;

export const MealDialogNextButton = styled(Button)`
  position: absolute;
  top: 45%;
  right: 0%;
  padding: 0.5em 2em;
  /* color: coral; */
  background-color: white;
  border-radius: 10px;
  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: coral;
    color: #fff;
  }

  /* close button 스타일 */
  && + button {
    background-color: transparent;
    color: ${palette.themeDefault};
    border-radius: 10px;
    margin: 0;
  }
`;

export const MealDialogCloseButton = styled(Button)`
  position: absolute;
  top: 1%;
  right: 1%;
  background-color: transparent;
  padding: 15px;
  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: coral;
    color: #fff;
  }
`;
