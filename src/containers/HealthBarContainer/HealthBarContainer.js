import React, { useEffect } from 'react';
import HealthBar from '../../components/HealthBar/HealthBar';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { signInAction } from 'redux/modules/auth/auth';
import { handleGetDietLists } from '../../api/firestore';
import { getHealthBarListAction } from '../../redux/modules/healthBar';

export default function HealthBarContainer() {
  const { authUser } = useSelector(state => state.auth);
  const healthBar = useSelector(state => state.healthBar);
  const dispatch = useDispatch();

  const getTotalCalories = meals => {
    const totalCalories = meals.reduce((acc, cur) => acc + +cur.calories, 0);

    return totalCalories > 999
      ? totalCalories.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
      : totalCalories;
  };

  const getDate = i => {
    const dayNum = healthBar[i].meals[0].date.slice(4, 6);
    const dayStr = healthBar[i].meals[0].date.slice(7, 10);

    return `${dayNum} ${dayStr}`;
  };

  // const getTotalWaterDose = () => {
  //   healthBar;
  // };

  useEffect(() => {
    dispatch(signInAction({ uid: 'MWcXe49pXQdQk5xHduQu' }));
  }, [dispatch]);

  useEffect(() => {
    if (!authUser) return null;
    dispatch(handleGetDietLists(authUser, getHealthBarListAction));
  }, [authUser, dispatch]);

  if (!authUser) return null;

  return (
    <HealthBar
      healthBar={healthBar}
      getTotalCalories={getTotalCalories}
      getDate={getDate}
    />
  );
}
