import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  handleGetDietLists,
  addOrEditDailyReview,
  removeDailyReview,
  addWaterDose,
  removeMeal,
  handleDeleteDietInUsers,
  handleEditLikeNumberToUsers
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
  updateWaterDoseInDiets,
  handleEditLikeToDiets
} from 'api/diets';
import { pushLikeAction } from '../../redux/modules/auth/auth';
import { addLikeToUser } from 'api/auth';
import NotFound from 'components/NotFound/NotFound';

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

  const onSubmit = (date, review, setReviewIsActive) => {
    setReviewIsActive(false);

    dispatch(addOrEditDailyReview(authUser, date, review));
    addOrEditDailyReviewInDiets(menuList[date].id, review);
    dispatch(addDailyReviewAction(date, review));
  };

  const onRemove = (date, setWroteReview, setReviewIsActive, setTotalBytes) => {
    setWroteReview('');
    setReviewIsActive(false);
    setTotalBytes(0);

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

  const onClickWaterDose = (e, date, waterDose, setWaterIsActive) => {
    if (e.target.innerText === '초기화') {
      onReset(date);
    } else {
      onAdd(date, waterDose, e);
    }
    setWaterIsActive(false);
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

  const handleLike = (menuListData, date) => {
    if (!authUser) return;
    const newLike = [...authUser.like, menuListData.id];
    dispatch(pushLikeAction(newLike));
    addLikeToUser(authUser, newLike, menuListData, menuListData.like + 1);
    dispatch(handleEditLikeToDiets(menuListData, menuListData.like + 1));
    dispatch(
      handleEditLikeNumberToUsers(authUser, date, menuListData.like + 1)
    );
  };

  const handleDisLike = (menuListData, date) => {
    if (!authUser) return;
    const newLike = [...authUser.like].filter(id => id !== menuListData.id);
    dispatch(pushLikeAction(newLike));
    addLikeToUser(authUser, newLike, menuListData, menuListData.like - 1);
    dispatch(handleEditLikeToDiets(menuListData, menuListData.like - 1));
    dispatch(
      handleEditLikeNumberToUsers(authUser, date, menuListData.like - 1)
    );
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

  if (!isAuthed) return <NotFound text='로그인 후 이용해 주새오.' />;
  if (!Object.entries(menuList).length)
    return <NotFound text='식단을 등록해 주새오.' />;

  const menuListData = Object.entries(menuList)
    .sort((a, b) => b[0].slice(0, 6) - a[0].slice(0, 6))
    .map(data => data[1]);

  return (
    <>
      {menuListData.map(menuList => (
        <MenuList
          key={menuList.id}
          id={menuList.id}
          menuListData={menuList}
          getTotalCalories={getTotalCalories}
          onClick={onClick}
          onSubmit={onSubmit}
          onRemove={onRemove}
          onDelete={onDelete}
          authUser={authUser}
          onDeleteAll={onDeleteAll}
          handleLike={handleLike}
          handleDisLike={handleDisLike}
          onClickWaterDose={onClickWaterDose}
        />
      ))}
    </>
  );
}
