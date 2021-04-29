import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { MealModalGroup } from 'components';

export default function MealModalContainer({
  onMealModal,
  mealListData,
  showMealModal
}) {
  const authUser = useSelector(state => state.auth.authUser);
  const menuList = useSelector(state => state.menuList);
  const slideRef = useRef(null);
  const history = useHistory();

  const { date, id } = mealListData;

  // meals 배열
  const mealsArrayList = Object.entries(menuList)
    .sort((a, b) => b[0].slice(0, 6) - a[0].slice(0, 6))
    .map(data => data[1])
    .filter(data => data.date === date || data.id === id)[0].meals;

  const mealIdIndex = mealsArrayList
    .map(data => parseInt(data.id))
    .indexOf(parseInt(id));

  const mealIdIndexArray = mealsArrayList.map((data, index) => index);

  // id가 담긴 배열을 index로 담긴 배열로 바꾸고 클릭 된 mealId와
  // 같은지 비교해서 추출한 값을 캐러셀 이동 상태값으로 사용하기 위해 적용
  const mealArrayIndex = mealIdIndexArray.filter(
    data => data === mealIdIndex
  )[0];

  const [currentMealArrayIndex, setCurrentMealArrayIndex] = useState(
    mealArrayIndex
  );

  // 캐러셀 전체 길이
  const mealLength = mealsArrayList.map(data => data.id).length - 1;

  const prevMeal = e => {
    setCurrentMealArrayIndex(
      currentMealArrayIndex === 0 ? mealLength : currentMealArrayIndex - 1
    );
  };

  const nextMeal = e => {
    setCurrentMealArrayIndex(
      currentMealArrayIndex === mealLength ? 0 : currentMealArrayIndex + 1
    );
  };

  const onSetting = () => {
    const mealDate = mealsArrayList.filter(data => data.id === id);

    history.push({
      pathname: '/postEdit',
      state: {
        authUser: authUser,
        id: id,
        mealDate: mealDate,
        menuList: menuList
      }
    });
  };

  window.addEventListener('keyup', e => {
    if (e.key === 'Escape') {
      onMealModal();
    }
  });

  useEffect(() => {
    slideRef.current.style.transition = '0.5s ease-in-out';
    slideRef.current.style.transform = `translateX(-${currentMealArrayIndex}00%)`;
  }, [currentMealArrayIndex]);

  return (
    <>
      <MealModalGroup
        mealsArrayList={mealsArrayList}
        onMealModal={onMealModal}
        prevMeal={prevMeal}
        nextMeal={nextMeal}
        mealListData={mealListData}
        mealLength={mealLength}
        onSetting={onSetting}
        slideRef={slideRef}
      />
    </>
  );
}
