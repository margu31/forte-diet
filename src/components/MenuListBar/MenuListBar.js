import React, { useState } from 'react';
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

export default function MenuListBar({
  date,
  getTotalCalories,
  setReviewIsActive,
  menuListData,
  onClick,
  dailyTextarea,
  authUser,
  onDeleteAll,
  handleLike,
  handleDisLike,
  waterDose,
  onClickWaterDose
}) {
  const [waterIsActive, setWaterIsActive] = useState(false);
  const [moreIsActive, setMoreIsActive] = useState(false);
  waterDose = waterDose || 0;

  const newMonth = parseInt(date.slice(2, 4), 10);
  const newDate = date.slice(4, 6);
  const newDay = date.slice(7, 10);

  const isLiked = authUser?.like.includes(menuListData.id);

  return (
    <StyledMenuListBar>
      <span>{newDay}</span>
      <span>
        {newMonth}/{newDate}
      </span>
      <div>
        {isLiked ? (
          <StyledLike onClick={() => handleDisLike(menuListData, date)} />
        ) : (
          <StyledDisLike onClick={() => handleLike(menuListData, date)} />
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
              <span
                onClick={e =>
                  onClickWaterDose(e, date, waterDose, setWaterIsActive)
                }
              >
                +100ml
              </span>
              <span
                onClick={e =>
                  onClickWaterDose(e, date, waterDose, setWaterIsActive)
                }
              >
                +300ml
              </span>
              <span
                onClick={e =>
                  onClickWaterDose(e, date, waterDose, setWaterIsActive)
                }
              >
                +500ml
              </span>
              <span
                onClick={e =>
                  onClickWaterDose(e, date, waterDose, setWaterIsActive)
                }
              >
                초기화
              </span>
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
