import { MealModalGroup } from "components/MealWrapper/MealModalGroup";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import SettingPage from "../../pages/SettingPage/SettingPage";

export default function MealModalContainer({
  onMealModal,
  mealListData,
  showMealModal,
}) {
  const authUser = useSelector((state) => state.auth.authUser);
  const menuList = useSelector((state) => state.menuList);
  const slideRef = useRef(null);
  const history = useHistory();

  const { date, id } = mealListData;

  // meals 배열
  const mealsArrayList = Object.entries(menuList)
    .sort((a, b) => b[0].slice(0, 6) - a[0].slice(0, 6))
    .map((data) => data[1])
    .filter((data) => data.date === date || data.id === id)[0].meals;

  // const mealIdIndex = mealsArrayList
  //   .map((data) => parseInt(data.id))
  //   .findIndex((id) => id === parseInt(id));

  const [currentMealId, setCurrentMealId] = useState(parseInt(id));
  // const [currentMealId, setCurrentMealId] = useState(parseInt(id));
  const mealLength = mealsArrayList.map((data) => data.id).length - 1;

  const mealIdIndex = mealsArrayList
    .map((data) => parseInt(data.id))
    .findIndex((id) => id === currentMealId, [currentMealId]);

  const prevMeal = (e) => {
    setCurrentMealId(mealIdIndex === 0 ? mealLength : mealIdIndex - 1);

    // if (currentMealId <= 0) {
    //   setCurrentMealId(mealLength);
    // } else {
    //   setCurrentMealId(mealIdIndex - 1);
    // }
    // console.log(currentMealId, "현재 id");
    // console.log(mealLength);
  };

  const nextMeal = (e) => {
    setCurrentMealId(mealIdIndex === mealLength ? 0 : mealIdIndex + 1);
    // if (mealIdIndex = mealLength) {
    //   setCurrentMealId(0);
    // } else {
    //   setCurrentMealId(mealIdIndex + 1);
    // }
    console.log(currentMealId, "현재 id");
    console.log(mealLength);
  };

  const onSetting = () => {
    const mealDate = mealsArrayList.filter((data) => data.id === id);

    history.push({
      pathname: "/postEdit",
      state: {
        authUser: authUser,
        id: id,
        mealDate: mealDate,
        menuList: menuList,
      },
    });
  };

  window.addEventListener("keyup", (e) => {
    if (e.key === "Escape") {
      onMealModal();
    }
  });

  // console.log(mealsArrayList.map((data) => data.id));
  // console.log(mealsArrayList.map((data) => data.id).length);
  // console.log(mealsArrayList);
  // console.log(mealsArrayList.map((data) => data.id));
  // console.log(currentMealId);
  // console.log(mealLength);
  // console.log(slideRef.current);

  useEffect(() => {
    slideRef.current.style.transition = "0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${mealIdIndex}00%)`;
  }, [mealIdIndex]);

  // if (!showMealModal) {
  //   setCurrentMealId(id);
  // }

  // console.log(mealsArrayList);
  // console.log(mealsArrayList.map((data) => parseInt(data.id)));
  // console.log(id, "props로 받는 id");
  // console.log(mealLength, "인덱스 길이");
  // console.log(
  //   mealsArrayList.map((data) => parseInt(data.id)).indexOf(currentMealId)
  // );

  // console.log(mealIdIndex, "배열에서 맞는 값에 인텍스 추출");

  // console.log(mealIdIndex, "다른 id 탈출");

  // console.log(mealsArrayList.map((data) => parseInt(data.id)).findIndex(1));

  // const fff = [1, 3, 5];
  // console.log(fff.findIndex((id) => id === 3));
  // console.log(authUser);
  // console.log(menuList);
  // console.log(id);
  return (
    <>
      <MealModalGroup
        mealsArrayList={mealsArrayList}
        onMealModal={onMealModal}
        prevMeal={prevMeal}
        nextMeal={nextMeal}
        mealListData={mealListData}
        currentMealId={currentMealId}
        mealLength={mealLength}
        onSetting={onSetting}
        slideRef={slideRef}
      />
    </>
  );
}
