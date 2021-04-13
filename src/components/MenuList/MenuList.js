import React, { useRef, useState } from 'react';
import MealList from 'components/MealList/MealList';
import {
  StyledMenuList,
  StyledMenuListBar,
  StyledLike,
  StyledWaterDose,
  StyledDonut,
  StyledDailyReview,
  StyledPencil
} from './MenuList.styled';

export default function MenuList({
  menuListData,
  getTotalCalories,
  onClick,
  onSubmit,
  onRemove
}) {
  const { dailyReview } = menuListData;
  const { date } = menuListData.meals[0];
  const dayNum = date.slice(4, 6);
  const dayStr = date.slice(7, 10);
  const tempDay = date.slice(2, 6); // 임시로 뽑은거!!!1

  const dailyTextarea = useRef();
  const [isActive, setIsActive] = useState(false);
  const [dailyReviewText, setDailyReviewText] = useState(dailyReview || '');

  return (
    <>
      <StyledMenuList>
        {menuListData.meals.map(mealList => (
          <MealList mealListData={mealList} />
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
          {isActive && (
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
            <StyledWaterDose />
            <span>300ml</span>
          </div>
          <div>
            <StyledDonut />
            <span>{getTotalCalories(menuListData.meals)}kcal</span>
          </div>
          <div>
            <StyledPencil
              onClick={() => {
                onClick(dailyTextarea);
                setIsActive(true);
              }}
            />
            <span>Diary</span>
          </div>
        </StyledMenuListBar>
      </StyledMenuList>
    </>
  );
}
