import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signInAction } from '../../redux/modules/auth/auth';
import { handleGetDietLists } from '../../api/firestore';
import { getMenuListAction } from '../../redux/modules/menuList';
import MenuList from '../../components/MenuList/MenuList';

export default function MenuListContainer() {
  const { authUser } = useSelector(state => state.auth);
  const menuList = useSelector(state => state.menuList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(signInAction({ uid: 'MWcXe49pXQdQk5xHduQu' }));
  }, [dispatch]);

  useEffect(() => {
    if (!authUser) return null;
    dispatch(handleGetDietLists(authUser, getMenuListAction));
  }, [authUser, dispatch]);

  if (!authUser) return null;
  const menuListData = Object.entries(menuList)
    .map(data => data[1])
    .map(data => data.meals);

  return (
    <>
      {menuListData.map(dailyMenuListData => (
        <MenuList menuListData={dailyMenuListData} />
      ))}
      ;
    </>
  );
}
