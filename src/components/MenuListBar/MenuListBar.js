import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  StyledMenuListBar,
  StyledLike,
  StyledWaterDose,
  StyledDonut,
  StyledPencil,
  StyledWaterDoseDialog,
  StyledTriangle,
  StyledContainer
} from './MenuListBar.styled';

export default function MenuListBar({
  date,
  onAdd,
  getTotalCalories,
  setReviewIsActive,
  menuListData,
  onClick,
  dailyTextarea,
  onReset
}) {
  const [waterIsActive, setWaterIsActive] = useState(false);
  let { waterDose, like } = useSelector(state => state.menuList[date]);
  waterDose = waterDose || 0;

  const dayNum = date.slice(4, 6);
  const dayStr = date.slice(7, 10);

  const onClickWaterDose = e => {
    if (e.target.innerText === '초기화') {
      onReset(date);
    } else {
      onAdd(date, waterDose, e);
    }
    setWaterIsActive(false);
  };

  return (
    <StyledMenuListBar>
      <span>{dayStr}</span>
      <span>{dayNum}</span>
      <div>
        <StyledLike />
        <span>like {like || 0}</span>
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
          <StyledPencil
            onClick={async () => {
              await setReviewIsActive(true);
              await onClick(dailyTextarea);
            }}
          />
          <span>Diary</span>
        </StyledContainer>
      </div>
    </StyledMenuListBar>
  );
}
