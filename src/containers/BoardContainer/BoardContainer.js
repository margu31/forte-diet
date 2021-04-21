import React, { useEffect, useState } from 'react';
import Board from 'components/Board/Board';
import { getPopularMenus, getRecentMenus } from 'redux/modules/board';
import { useDispatch, useSelector } from 'react-redux';

export default function BoardContainer() {
  const board = useSelector(state => state.board);
  const dispatch = useDispatch();

  const [boardType, setBoardType] = useState('popular');

  useEffect(() => {
    dispatch(getPopularMenus(25)());
    dispatch(getRecentMenus(25)());
  }, []);

  return <Board boardType={boardType} setBoardType={setBoardType} diets={board[boardType]?.data} />;
}
