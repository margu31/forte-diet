import React, { useEffect } from 'react';
import Board from 'components/Board/Board';
import { getPopularMenus, getRecentMenus } from 'redux/modules/board';
import { useDispatch } from 'react-redux';

export default function BoardContainer() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopularMenus(25)());
    dispatch(getRecentMenus(25)());
  });

  return <Board />;
}
