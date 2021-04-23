import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  handleGetDietLists,
  addOrEditDailyReview,
  removeDailyReview,
  addWaterDose,
  removeMeal,
  handleDeleteDietInUsers
} from '../../api/firestore';
import {
  getMenuListAction,
  addWaterDoseAction,
  resetWaterDoseAction,
  addDailyReviewAction,
  DeleteDailyReviewAction
} from '../../redux/modules/menuList';
import MenuList from '../../components/MenuList/MenuList';
import { updateWaterDoseAction } from 'redux/modules/healthBar';
import { throttle } from 'lodash';
import { getHealthBarListAction } from '../../redux/modules/healthBar';
import {
  addOrEditDailyReviewInDiets,
  removeDailyReviewInDiets,
  removeMealInDiets,
  updateWaterDoseInDiets
} from 'api/diets';

export default function MenuListContainer() {
  const { authUser, isAuthed } = useSelector(state => state.auth);
  const menuList = useSelector(state => state.menuList);
  const dispatch = useDispatch();

  const onClick = ref => {
    onFocus(ref);
  };

  const onFocus = ref => {
    ref.current.focus();
  };

  const onSubmit = (date, review) => {
    dispatch(addOrEditDailyReview(authUser, date, review));
    addOrEditDailyReviewInDiets(menuList[date].id, review);
    dispatch(addDailyReviewAction(date, review));
  };

  const onRemove = date => {
    dispatch(removeDailyReview(authUser, date));
    removeDailyReviewInDiets(menuList[date].id);
    dispatch(DeleteDailyReviewAction(date));
  };

  const onAdd = (date, currentDose, e) => {
    const additionalDose = parseInt(e.target.innerText.slice(1, 4), 10);

    dispatch(addWaterDose(authUser, date, currentDose, additionalDose));
    updateWaterDoseInDiets(menuList[date].id, currentDose, additionalDose);
    dispatch(addWaterDoseAction(date, currentDose + additionalDose));
    dispatch(updateWaterDoseAction(date, currentDose + additionalDose));
  };

  const onReset = date => {
    const RESET_WATER_DOSE = 0;

    dispatch(addWaterDose(authUser, date, RESET_WATER_DOSE, RESET_WATER_DOSE));
    updateWaterDoseInDiets(
      menuList[date].id,
      RESET_WATER_DOSE,
      RESET_WATER_DOSE
    );
    dispatch(resetWaterDoseAction(date));
    dispatch(updateWaterDoseAction(date, RESET_WATER_DOSE));
  };

  const onDelete = (date, mealId) => {
    dispatch(removeMeal(authUser, menuList, date, mealId));
    removeMealInDiets(menuList[date].id, menuList, date, mealId);
    dispatch(getHealthBarListAction(authUser.dietList));
  };

  const getTotalCalories = meals => {
    const totalCalories = meals.reduce((acc, cur) => acc + +cur.calories, 0);

    return totalCalories > 999
      ? totalCalories.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
      : totalCalories;
  };

  const onDeleteAll = menuListData => {
    dispatch(handleDeleteDietInUsers(authUser, menuListData));
  };

  useEffect(() => {
    if (!authUser) return null;
    dispatch(handleGetDietLists(authUser, getMenuListAction));
    dispatch(getMenuListAction(authUser.dietList));
  }, [authUser, dispatch]);

  useEffect(() => {
    window.addEventListener(
      'scroll',
      throttle(() => {}, 1000)
    );
  }, []);

  if (!isAuthed)
    return (
      <div style={{ fontSize: '3rem', margin: '350px 300px' }}>
        가입하라~ 이 말입니다. 아시겠어여??????
      </div>
    );

  const menuListData = Object.entries(menuList)
    .sort((a, b) => b[0].slice(0, 6) - a[0].slice(0, 6))
    .map(data => data[1]);

  return (
    <>
      {/* TODO: key 바꿔야함!!!! */}
      {menuListData.map((menuList, i) => (
        <MenuList
          key={i}
          menuListData={menuList}
          getTotalCalories={getTotalCalories}
          onClick={onClick}
          onSubmit={onSubmit}
          onRemove={onRemove}
          onAdd={onAdd}
          onReset={onReset}
          onDelete={onDelete}
          authUser={authUser}
          onDeleteAll={onDeleteAll}
        />
      ))}
    </>
  );
}
