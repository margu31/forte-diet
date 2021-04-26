import Button from "components/Button/Button";
import Form from "components/Form/Form";
import styled, { css } from "styled-components";

export const StyledMealContainer = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledMealWrapper = styled.div`
  position: relative;
  display: flex;
  /* justify-content: center; */
  /* align-items: center; */
  width: 500px;
  height: 500px;
`;

export const MealDialogPrevButton = styled(Button)`
  position: absolute;
  margin: 0;
  top: 45%;
  left: 0;
  padding: 0.5em 2em;
  color: coral;
  border-radius: 10px;
  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: coral;
    color: #fff;
  }
`;

export const MealDialogNextButton = styled(Button)`
  position: absolute;
  margin: 0;
  /* width: 100px; */
  /* height: 100px; */
  top: 45%;
  right: 0%;
  /* border: 1px solid coral; */
  padding: 0.5em 2em;
  /* color: coral; */
  border-radius: 10px;
  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: coral;
    color: #fff;
  }
`;

export const MealDialogOkButton = styled(Button)`
  position: absolute;
  bottom: 0;
  left: 0;
  margin: 0;
  width: 100px;
  height: 100px;
  border: 1px solid coral;
  padding: 0.5em 2em;
  color: coral;
  border-radius: 50px;
  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: coral;
    color: #fff;
  }
`;

export const MealDialogEditButton = styled(Button)`
  margin: 0;
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100px;
  height: 100px;
  border: 1px solid coral;
  padding: 0.5em 2em;
  color: coral;
  border-radius: 10px;
  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: coral;
    color: #fff;
  }
`;
