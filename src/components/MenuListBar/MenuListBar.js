import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  StyledMenuListBar,
  StyledLike,
  StyledWaterDose,
  StyledDonut,
  StyledMore,
  StyledWaterDoseDialog,
  StyledTriangle,
  StyledContainer,
  StyledDisLike,
  StyledMoreDialog
} from './MenuListBar.styled';
import { pushLikeAction } from '../../redux/modules/auth/auth';
import { addLikeToUser } from 'api/auth';
import { handleEditLikeToDiets } from 'api/diets';
import { handleEditLikeNumberToUsers } from 'api/firestore';

export default function MenuListBar({
  date,
  onAdd,
  getTotalCalories,
  setReviewIsActive,
  menuListData,
  onClick,
  dailyTextarea,
  onReset,
  authUser,
  onDeleteAll
}) {
  const [waterIsActive, setWaterIsActive] = useState(false);
  const [moreIsActive, setMoreIsActive] = useState(false);
  let { waterDose } = useSelector(state => state.menuList[date]);
  waterDose = waterDose || 0;
  const dispatch = useDispatch();

  const newMonth = parseInt(date.slice(2, 4), 10);
  const newDate = date.slice(4, 6);
  const newDay = date.slice(7, 10);

  const onClickWaterDose = e => {
    if (e.target.innerText === '초기화') {
      onReset(date);
    } else {
      onAdd(date, waterDose, e);
    }
    setWaterIsActive(false);
  };

  const isLiked = authUser?.like.includes(menuListData.id);

  /* 밑에 두 함수 합치는 리팩토링 필요 */
  const handleLike = () => {
    if (!authUser) return;
    const newLike = [...authUser.like, menuListData.id];
    dispatch(pushLikeAction(newLike));

    addLikeToUser(authUser, newLike, menuListData, menuListData.like + 1);

    dispatch(handleEditLikeToDiets(menuListData, menuListData.like + 1));
    dispatch(
      handleEditLikeNumberToUsers(authUser, date, menuListData.like + 1)
    );
  };

  const handleDisLike = () => {
    const newLike = [...authUser.like].filter(id => id !== menuListData.id);
    dispatch(pushLikeAction(newLike));

    addLikeToUser(authUser, newLike, menuListData, menuListData.like - 1);

    dispatch(handleEditLikeToDiets(menuListData, menuListData.like - 1));
    dispatch(
      handleEditLikeNumberToUsers(authUser, date, menuListData.like - 1)
    );
  };

  return (
    <StyledMenuListBar>
      <span>{newDay}</span>
      <span>
        {newMonth}/{newDate}
      </span>
      <div>
        {isLiked ? (
          <StyledLike onClick={handleDisLike} />
        ) : (
          <StyledDisLike onClick={handleLike} />
        )}
        <span>like {menuListData.like || '0'}</span>
      </div>
      <div>
        <StyledContainer
          initial={{ x: 0 }}
          whileHover={{
            x: [0, 3, -3, 3, -3, 3, -3],
            transition: {
              duration: 0.6,
              type: 'spring',
              mass: 0.6,
              stiffness: 300,
              repeat: Infinity,
              repeatType: 'mirror'
            }
          }}
        >
          <StyledWaterDose
            onClick={() => {
              setWaterIsActive(!waterIsActive);
            }}
          />
          <span>{waterDose}ml</span>
        </StyledContainer>

        {waterIsActive && (
          <>
            <StyledWaterDoseDialog
              initial={{ x: 2, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.1
              }}
              exit={{ x: 2, opacity: 0 }}
            >
              <span onClick={e => onClickWaterDose(e)}>+100ml</span>
              <span onClick={e => onClickWaterDose(e)}>+300ml</span>
              <span onClick={e => onClickWaterDose(e)}>+500ml</span>
              <span onClick={e => onClickWaterDose(e)}>초기화</span>
              <StyledTriangle />
            </StyledWaterDoseDialog>
          </>
        )}
      </div>
      <div>
        <StyledDonut />
        <span>{getTotalCalories(menuListData.meals)}kcal</span>
      </div>
      <div>
        <StyledMore onClick={() => setMoreIsActive(!moreIsActive)} />
        {moreIsActive && (
          <StyledMoreDialog
            initial={{ x: 2, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.1
            }}
            exit={{ x: 2, opacity: 0 }}
          >
            <span
              onClick={async () => {
                await setReviewIsActive(true);
                await onClick(dailyTextarea);
                setMoreIsActive(false);
              }}
            >
              오늘 기록
            </span>
            <span
              onClick={() => {
                onDeleteAll(menuListData);
                setMoreIsActive(false);
              }}
            >
              전체 삭제
            </span>
            <StyledTriangle />
          </StyledMoreDialog>
        )}
      </div>
    </StyledMenuListBar>
  );
}
