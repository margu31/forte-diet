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
  const [dayilyMeal, setDayilyMeal] = useState(mealsArrayList);

  console.log(dailyId);
  console.log(mealListData);
  console.log(dayilyMeal);
  console.log(dayilyMeal[0].id);
  console.log(dailyId);
  console.log(+dayilyMeal[0].id === dailyId);

  console.log(parseInt(dayilyMeal[0].id, 10) === dailyId);

  const check = dayilyMeal.map((id) => id === dailyId);
  const checkcheck = dayilyMeal.map((id) => +id);
  console.log(check);
  console.log(checkcheck);
  // useEffect(() => {
  //   if (auth.isAuthed === true) {
  //     const menuListData = Object.entries(menuList).map((data) => data[1])[0]
  //       .meals;
  //     console.log(menuList.meals);
  //   }
  // }, []);
  // const menuListData = Object.entries(menuList).map((data) => data[1])[0].meals;

  const prevMeal = (e) => {
    setDailyId(+dailyId - 1);
  };

  const nextMeal = (e) => {
    setDailyId(+dailyId + 1);
  };

  // const dialyMeal =
  //   mealsArrayList.map((id, review, photo) => )

  return (
    <StyledMealModalContainer>
      <Modal>
        {mealsArrayList.map((id, review, photo) => (
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
