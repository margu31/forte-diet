import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signInAction } from '../../redux/modules/auth/auth';
import {
  handleGetDietLists,
  addOrEditDailyReview,
  removeDailyReview,
  addWaterDose,
  removeMeal
} from '../../api/firestore';
import {
  getMenuListAction,
  addWaterDoseAction,
  resetWaterDoseAction,
  addDailyReviewAction,
  DeleteDailyReviewAction,
  deleteMenuListAction
} from '../../redux/modules/menuList';
import MenuList from '../../components/MenuList/MenuList';
import MenuListToPosting from 'components/MenuListToPostingButton/MenuListToPosting';
import {
  updateWaterDoseAction,
  updateCaloriesAction
} from 'redux/modules/healthBar';
import ScrollTopButton from 'components/ScrollTopButton/ScrollTopButton';
import { throttle } from 'lodash';

export default function MenuListContainer({ history }) {
  const { authUser } = useSelector(state => state.auth);
  const menuList = useSelector(state => state.menuList);
  const dispatch = useDispatch();

  const onClick = ref => {
    onFocus(ref);
  };

  const onFocus = ref => {
    ref.current.focus();
  };

  const onSubmit = (date, review) => {
    dispatch(
      addOrEditDailyReview({ uid: 'MWcXe49pXQdQk5xHduQu' }, date, review)
    );
    dispatch(addDailyReviewAction(date, review));
  };

  const onRemove = date => {
    dispatch(removeDailyReview({ uid: 'MWcXe49pXQdQk5xHduQu' }, date));
    dispatch(DeleteDailyReviewAction(date));
  };

  const onAdd = (date, currentDose, e) => {
    const additionalDose = parseInt(e.target.innerText.slice(1, 4), 10);

    dispatch(
      addWaterDose(
        { uid: 'MWcXe49pXQdQk5xHduQu' },
        date,
        currentDose,
        additionalDose
      )
    );
    dispatch(addWaterDoseAction(date, currentDose + additionalDose));
    dispatch(updateWaterDoseAction(date, currentDose + additionalDose));
  };

  const onReset = date => {
    const RESET_WATER_DOSE = 0;

    dispatch(
      addWaterDose(
        { uid: 'MWcXe49pXQdQk5xHduQu' },
        date,
        RESET_WATER_DOSE,
        RESET_WATER_DOSE
      )
    );
    dispatch(resetWaterDoseAction(date));
    dispatch(updateWaterDoseAction(date, RESET_WATER_DOSE));
  };

  const onMoveToPosting = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
    history.push('/posting');
  };

  const onDelete = (date, mealId) => {
    dispatch(
      removeMeal({ uid: 'MWcXe49pXQdQk5xHduQu' }, menuList, date, mealId)
    );
    dispatch(deleteMenuListAction(date, mealId));
    dispatch(updateCaloriesAction(date, mealId));
  };

  const getTotalCalories = meals => {
    const totalCalories = meals.reduce((acc, cur) => acc + +cur.calories, 0);

    return totalCalories > 999
      ? totalCalories.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
      : totalCalories;
  };

  const onMoveToTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    dispatch(signInAction({ uid: 'MWcXe49pXQdQk5xHduQu' }));
  }, [dispatch]);

  useEffect(() => {
    if (!authUser) return null;
    dispatch(handleGetDietLists(authUser, getMenuListAction));
  }, [authUser, dispatch]);

  useEffect(() => {
    window.addEventListener(
      'scroll',
      throttle(() => {}, 1000)
    );
  }, []);

  if (!authUser)
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
        />
      ))}
      <MenuListToPosting onMoveToPosting={onMoveToPosting} />
      <ScrollTopButton onMoveToTop={onMoveToTop} />
    </>
  );
}
