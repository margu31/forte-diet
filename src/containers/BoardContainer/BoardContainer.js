import React, { useEffect } from 'react';
import Board from 'components/Board/Board';
import { getPopularMenus, getRecentMenus } from 'redux/modules/board';
import { useDispatch, useSelector } from 'react-redux';

export default function BoardContainer({ boardType, setBoardType }) {
  const board = useSelector(state => state.board);
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopularMenus(25)());
    dispatch(getRecentMenus(25)());
  }, [boardType, dispatch]);

  const handleClick = e => {
    setBoardType(e.target.id);
  };

  return (
    <Board
      boardType={boardType}
      setBoardType={setBoardType}
      diets={board[boardType]?.data}
      auth={auth}
      handleClick={handleClick}
    />
  );
}
