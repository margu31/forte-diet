import React, { useRef, useState } from 'react';
import MealList from 'components/MealList/MealList';
import {
  StyledMenuList,
  StyledMenuListBar,
  StyledLike,
  StyledWaterDose,
  StyledDonut,
  StyledDailyReview,
  StyledPencil,
  StyledWaterDoseDialog,
  StyledTriangle,
  StyledContainer,
  StyledDailyReviewModal
} from './MenuList.styled';

export default function MenuList({
  menuListData,
  getTotalCalories,
  onClick,
  onSubmit,
  onRemove,
  onAdd
}) {
  const { dailyReview, waterDose } = menuListData;
  const { date } = menuListData.meals[0];
  const dayNum = date.slice(4, 6);
  const dayStr = date.slice(7, 10);

  const dailyTextarea = useRef();
  const [reviewIsActive, setReviewIsActive] = useState(false);
  const [dailyReviewText, setDailyReviewText] = useState(dailyReview || '');
  const [waterIsActive, setWaterIsActive] = useState(false);
  const [waterDoseTotal, setWaterDoseTotal] = useState(waterDose || 0);

  const onAddWaterDose = e => {
    const additionalDose = parseInt(e.target.innerText.slice(1, 4), 10);
    setWaterDoseTotal(waterDoseTotal + additionalDose);
    onAdd(date, additionalDose, waterDoseTotal);
    setWaterIsActive(false);
  };

  const onResetWaterDose = () => {
    const additionalDose = 0;
    setWaterDoseTotal(0);
    onAdd(date, additionalDose);
    setWaterIsActive(false);
  };

  return (
    <>
      <StyledMenuList>
        {/* TODO: key 바꿔야함!!!! */}
        {menuListData.meals.map((mealList, i) => (
          <MealList mealListData={mealList} key={i} />
        ))}
        {reviewIsActive && (
          <StyledDailyReviewModal
            onClick={() => {
              setReviewIsActive(false);
            }}
          />
        )}
        <StyledDailyReview>
          <textarea
            name='dailyReview'
            id='dailyReview'
            rows='2'
            placeholder='오늘도 즐거운 식사 되셨나요? 오늘의 느낀 점을 기록해보세요. (100자 이내)'
            value={dailyReviewText}
            onChange={e => {
              setDailyReviewText(e.target.value);
            }}
            ref={dailyTextarea}
            disabled={reviewIsActive ? '' : 'disabled'}
          ></textarea>
          {reviewIsActive && (
            <>
              <button
                onClick={() => {
                  onRemove(date);
                  setDailyReviewText('');
                  setReviewIsActive(false);
                }}
              >
                삭제
              </button>
              <button
                onClick={() => {
                  onSubmit(date, dailyReviewText);
                  setReviewIsActive(false);
                }}
              >
                등록
              </button>
            </>
          )}
        </StyledDailyReview>
        <StyledMenuListBar>
          <span>{dayStr}</span>
          <span>{dayNum}</span>
          <div>
            <StyledLike />
            <span>like 3</span>
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
              <span>{waterDoseTotal}ml</span>
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
                  <span onClick={e => onAddWaterDose(e)}>+100ml</span>
                  <span onClick={e => onAddWaterDose(e)}>+300ml</span>
                  <span onClick={e => onAddWaterDose(e)}>+500ml</span>
                  <span onClick={() => onResetWaterDose()}>초기화</span>
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
      </StyledMenuList>
    </>
  );
}
