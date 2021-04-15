import React, { useState } from 'react';
import {
  StyledDailyReview,
  StyledDailyReviewModal
} from './DailyReview.styled';

export default function DailyReview({
  dailyReview,
  dailyTextarea,
  reviewIsActive,
  setReviewIsActive,
  date,
  onSubmit,
  onRemove
}) {
  const [dailyReviewText, setDailyReviewText] = useState(dailyReview || '');

  return (
    <>
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
    </>
  );
}
