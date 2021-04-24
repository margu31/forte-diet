import MealDialog from "components/MealDialog/MealDialog";
import { Modal } from "components/Modal/Modal";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { StyledMealModalContainer } from "./MealModalContainer.styled";

export default function MealModalContainer({ onMealModal, mealListData }) {
  const auth = useSelector((state) => state.auth);
  const menuList = useSelector((state) => state.menuList);

  const [user, setUser] = useState(auth);
  const { id, photo, review } = mealListData;
  const [dailyId, setDailyId] = useState(id);

  const mealsArrayList = Object.entries(menuList)[0][1].meals;
  // meals 배열
  const [dayilyMeal, setDayilyMeal] = useState(mealsArrayList);

  console.log(dayilyMeal);
  console.log(dailyId);
  // const { id, photo, review } = dayilyMeal;
  const dailyMealChange = (dailyId) => {
    dayilyMeal.filter((data) => data.id === dailyId);
    console.log(dayilyMeal);
  };
  const mealNumberId = parseInt(dailyId, 10);
  // console.log(typeof parseInt(dailyId, 10));
  // console.log(typeof dailyId);
  // console.log(mealNumberId);
  // console.log(dayilyMeal);

  // const check = dayilyMeal.map((id) => id === dailyId);
  // const checkcheck = dayilyMeal.map((id) => +id);
  // console.log(check);
  // console.log(checkcheck);
  // useEffect(() => {
  //   if (auth.isAuthed === true) {
  //     const menuListData = Object.entries(menuList).map((data) => data[1])[0]
  //       .meals;
  //     console.log(menuList.meals);
  //   }
  // }, []);
  // const menuListData = Object.entries(menuList).map((data) => data[1])[0].meals;

  const prevMeal = (e) => {
    if (dailyId === 0) return;
    if (dailyId === mealNumberId) {
    }
    setDailyId(mealNumberId - 1);
    // dailyMealChange(dailyId);
  };

  const nextMeal = (e) => {
    setDailyId(mealNumberId + 1);
  };

  // const dialyMeal =
  //   mealsArrayList.map((id, review, photo) => )
  console.log(mealsArrayList);
  return (
    <StyledMealModalContainer>
      <Modal>
        {mealsArrayList.map(({ id, review, photo }) => (
          <MealDialog
            dailyId={dailyId}
            id={id}
            photo={photo}
            review={review}
            onMealModal={onMealModal}
            prevMeal={prevMeal}
            nextMeal={nextMeal}
            mealListData={mealListData}
          ></MealDialog>
        ))}
        {/* <MealDialog
          dailyId={dailyId}
          id={id}
          photo={photo}
          review={review}
          onMealModal={onMealModal}
          prevMeal={prevMeal}
          nextMeal={nextMeal}
          mealListData={mealListData}
        ></MealDialog> */}
      </Modal>
    </StyledMealModalContainer>
  );
}
