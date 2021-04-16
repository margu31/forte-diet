import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signInAction } from '../../redux/modules/auth/auth';
import {
  handleGetDietLists,
  addOrEditDailyReview,
  removeDailyReview,
  addWaterDose
} from '../../api/firestore';
import {
  getMenuListAction,
  addWaterDoseAction,
  resetWaterDoseAction
} from '../../redux/modules/menuList';
import MenuList from '../../components/MenuList/MenuList';
import MenuListToPosting from 'components/MenuListToPostingButton/MenuListToPosting';
import { updateWaterDoseAction } from 'redux/modules/healthBar';

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
  };

  const onRemove = date => {
    dispatch(removeDailyReview({ uid: 'MWcXe49pXQdQk5xHduQu' }, date));
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
    dispatch(resetWaterDoseAction(date, RESET_WATER_DOSE));
    dispatch(updateWaterDoseAction(date, RESET_WATER_DOSE));
  };

  const onMoveToPosting = () => {
    history.push('/posting');
  };

  const getTotalCalories = meals => {
    const totalCalories = meals.reduce((acc, cur) => acc + +cur.calories, 0);

    return totalCalories > 999
      ? totalCalories.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
      : totalCalories;
  };

  useEffect(() => {
    dispatch(signInAction({ uid: 'MWcXe49pXQdQk5xHduQu' }));
  }, [dispatch]);

  useEffect(() => {
    if (!authUser) return null;
    dispatch(handleGetDietLists(authUser, getMenuListAction));
  }, [authUser, dispatch]);

  if (!authUser) return null;
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
        />
      ))}
      <MenuListToPosting onMoveToPosting={onMoveToPosting} />
    </>
  );
}
