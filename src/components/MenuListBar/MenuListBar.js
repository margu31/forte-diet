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
  StyledMoreDialog,
  StyledModal
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

  // 웹 접근성을 위한 날짜 코드 포맷 정의
  const formattedDate = date => {
    const getFullYear = `20${date.slice(0, 2)}`;
    const getMonth = date.slice(2, 4);
    const getDate = date.slice(4, 6);

    return `${getFullYear}-${getMonth}-${getDate}`;
  };

  return (
    <StyledMenuListBar>
      <div tabIndex='0' aria-label={`${formattedDate(date)} 식단`}>
        <span>{newDay}</span>
        <span>
          {newMonth}/{newDate}
        </span>
      </div>
      <div>
        {isLiked ? (
          <StyledLike
            onClick={() => handleDisLike(menuListData, date)}
            onKeyDown={e => {
              if (e.keyCode === 13) {
                handleDisLike(menuListData, date);
              }
            }}
            tabIndex='0'
            aria-label='싫어요 버튼'
          />
        ) : (
          <StyledDisLike
            onClick={() => handleLike(menuListData, date)}
            onKeyDown={e => {
              if (e.keyCode === 13) {
                handleLike(menuListData, date);
              }
            }}
            tabIndex='0'
            aria-label='좋아요 버튼'
          />
        )}
        <span tabIndex='0'>like {menuListData.like || '0'}</span>
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
          tabIndex='0'
          onKeyDown={e => {
            if (e.keyCode === 13) {
              setWaterIsActive(!waterIsActive);
            }
            if (e.keyCode === 27) {
              setWaterIsActive(false);
            }
          }}
        >
          <StyledWaterDose
            onClick={() => {
              setWaterIsActive(!waterIsActive);
            }}
            aria-label='물 섭취량 버튼'
          />
          <span lang='en'>{waterDose}ml</span>
        </StyledContainer>

        {waterIsActive && (
          <>
            <StyledModal
              onMouseDown={() => {
                setWaterIsActive(false);
              }}
            />
            <StyledWaterDoseDialog
              initial={{ x: 2, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.1
              }}
              exit={{ x: 2, opacity: 0 }}
              onKeyDown={e => {
                if (e.keyCode === 27) {
                  setWaterIsActive(false);
                }
              }}
            >
              <span
                onClick={e =>
                  onClickWaterDose(e, date, waterDose, setWaterIsActive)
                }
                onKeyDown={e => {
                  if (e.keyCode === 13) {
                    onClickWaterDose(e, date, waterDose, setWaterIsActive);
                  }
                }}
                tabIndex='0'
                aria-label='더하기 100 미리'
              >
                +100ml
              </span>
              <span
                onClick={e =>
                  onClickWaterDose(e, date, waterDose, setWaterIsActive)
                }
                onKeyDown={e => {
                  if (e.keyCode === 13) {
                    onClickWaterDose(e, date, waterDose, setWaterIsActive);
                  }
                }}
                tabIndex='0'
                aria-label='더하기 300 미리'
              >
                +300ml
              </span>
              <span
                onClick={e =>
                  onClickWaterDose(e, date, waterDose, setWaterIsActive)
                }
                onKeyDown={e => {
                  if (e.keyCode === 13) {
                    onClickWaterDose(e, date, waterDose, setWaterIsActive);
                  }
                }}
                tabIndex='0'
                aria-label='더하기 500 미리'
              >
                +500ml
              </span>
              <span
                onClick={e =>
                  onClickWaterDose(e, date, waterDose, setWaterIsActive)
                }
                onKeyDown={e => {
                  if (e.keyCode === 13) {
                    onClickWaterDose(e, date, waterDose, setWaterIsActive);
                  }
                  if (e.keyCode === 9) {
                    setWaterIsActive(false);
                  }
                }}
                tabIndex='0'
                aria-label='물 초기화'
              >
                초기화
              </span>
              <StyledTriangle />
            </StyledWaterDoseDialog>
          </>
        )}
      </div>
      <div tabIndex='0'>
        <StyledDonut aria-label='총 칼로리량' />
        <span lang='en'>{getTotalCalories(menuListData.meals)}kcal</span>
      </div>
      <div>
        <StyledMore
          onClick={() => setMoreIsActive(!moreIsActive)}
          tabIndex='0'
          aria-label='더보기'
          onKeyDown={e => {
            if (e.keyCode === 13) {
              setMoreIsActive(!moreIsActive);
            }
            if (e.keyCode === 27) {
              setMoreIsActive(false);
            }
          }}
        />
        {moreIsActive && (
          <>
            <StyledModal
              onMouseDown={() => {
                setMoreIsActive(false);
              }}
            />
            <StyledMoreDialog
              initial={{ x: 2, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.1
              }}
              exit={{ x: 2, opacity: 0 }}
              onKeyDown={e => {
                if (e.keyCode === 27) {
                  setMoreIsActive(false);
                }
              }}
            >
              <span
                onClick={async () => {
                  await setReviewIsActive(true);
                  await onClick(dailyTextarea);
                  setMoreIsActive(false);
                }}
                onKeyDown={async e => {
                  if (e.keyCode === 13) {
                    await setReviewIsActive(true);
                    await onClick(dailyTextarea);
                    setMoreIsActive(false);
                  }
                }}
                tabIndex='0'
                aria-label='오늘 기록 작성'
              >
                오늘 기록
              </span>
              <span
                onClick={() => {
                  onDeleteAll(menuListData);
                  setMoreIsActive(false);
                }}
                onKeyDown={e => {
                  if (e.keyCode === 13) {
                    onDeleteAll(menuListData);
                    setMoreIsActive(false);
                  }
                  if (e.keyCode === 9) {
                    setMoreIsActive(false);
                  }
                }}
                tabIndex='0'
                aria-label='식단 전체 삭제'
              >
                전체 삭제
              </span>
              <StyledTriangle />
            </StyledMoreDialog>
          </>
        )}
      </div>
    </StyledMenuListBar>
  );
}
