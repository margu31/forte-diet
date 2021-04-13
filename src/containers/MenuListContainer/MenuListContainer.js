import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signInAction } from '../../redux/modules/auth/auth';
import {
  handleGetDietLists,
  addOrEditDailyReview,
  removeDailyReview
} from '../../api/firestore';
import { getMenuListAction } from '../../redux/modules/menuList';
import MenuList from '../../components/MenuList/MenuList';

export default function MenuListContainer() {
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

  const getTotalCalories = meals => {
    const totalCalories = meals.reduce((acc, cur) => acc + cur.calories, 0);

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
  const forMenuListData = Object.entries(menuList).map(data => data[1]);

  return (
    <>
      {forMenuListData.map(menuList => (
        <MenuList
          menuListData={menuList}
          getTotalCalories={getTotalCalories}
          onClick={onClick}
          onSubmit={onSubmit}
          onRemove={onRemove}
        />
      ))}
    </>
  );
}
