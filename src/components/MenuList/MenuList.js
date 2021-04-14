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
  StyledTriangle
} from './MenuList.styled';

export default function MenuList({
  menuListData,
  getTotalCalories,
  onClick,
  onSubmit,
  onRemove
}) {
  const { dailyReview, waterDose } = menuListData;
  const { date } = menuListData.meals[0];
  const dayNum = date.slice(4, 6);
  const dayStr = date.slice(7, 10);
  const tempDay = date.slice(2, 6); // TODO: 임시로 뽑은거!!!1

  const dailyTextarea = useRef();
  const [reviewIsActive, setReviewIsActive] = useState(false);
  const [dailyReviewText, setDailyReviewText] = useState(dailyReview || '');
  const [waterIsActive, setWaterIsActive] = useState(false);
  const [waterDoseTotal, setWaterDoseTotal] = useState(waterDose || 0);

  return (
    <>
      <StyledMenuList>
        {/* TODO: key 바꿔야함!!!! */}
        {menuListData.meals.map((mealList, i) => (
          <MealList mealListData={mealList} key={i} />
        ))}
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
          ></textarea>
          {reviewIsActive && (
            <>
              <button onClick={() => onSubmit(tempDay, dailyReviewText)}>
                등록
              </button>
              <button
                onClick={() => {
                  onRemove(tempDay);
                  setDailyReviewText('');
                }}
              >
                삭제
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
            <StyledWaterDose
              onClick={() => {
                console.log(waterIsActive);
                setWaterIsActive(true);
              }}
            />
            <span>{waterDoseTotal}ml</span>
            {waterIsActive && (
              <>
                <StyledWaterDoseDialog>
                  <span>+100ml</span>
                  <span>+300ml</span>
                  <span>+500ml</span>
                  <span>초기화</span>
                </StyledWaterDoseDialog>
                <StyledTriangle />
              </>
            )}
          </div>
          <div>
            <StyledDonut />
            <span>{getTotalCalories(menuListData.meals)}kcal</span>
          </div>
          <div>
            <StyledPencil
              onClick={() => {
                onClick(dailyTextarea);
                setReviewIsActive(true);
              }}
            />
            <span>Diary</span>
          </div>
        </StyledMenuListBar>
      </StyledMenuList>
    </>
  );
}
