import MealDialog from "components/MealDialog/MealDialog";
import { Modal } from "components/Modal/Modal";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { StyledMealModalContainer } from "./MealModalContainer.styled";

export default function MealModalContainer({ onMealModal, mealListData }) {
  const menuList = useSelector((state) => state.menuList);

  const { date } = mealListData;

  // meals 배열
  const mealsArrayList = Object.entries(menuList)
    .sort((a, b) => b[0].slice(0, 6) - a[0].slice(0, 6))
    .map((data) => data[1])
    .filter((data) => data.date === date)[0].meals;

  const prevMeal = (e) => {};

  const nextMeal = (e) => {};

  return (
    <StyledMealModalContainer>
      <Modal>
        {mealsArrayList.map(({ id, review, photo }) => (
          <MealDialog
            key={id}
            id={id}
            photo={photo}
            review={review}
            onMealModal={onMealModal}
            prevMeal={prevMeal}
            nextMeal={nextMeal}
            mealListData={mealListData}
          ></MealDialog>
        ))}
      </Modal>
    </StyledMealModalContainer>
  );
}
