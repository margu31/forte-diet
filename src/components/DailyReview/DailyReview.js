import React, { useState } from 'react';
import { checkByte } from '../../utils/validation/DailyReviewValidation';
import {
  StyledDailyReview,
  StyledDailyReviewModal
} from './DailyReview.styled';

export default function DailyReview({
  date,
  dailyTextarea,
  reviewIsActive,
  setReviewIsActive,
  onSubmit,
  onRemove,
  dailyReview,
  id
}) {
  const [wroteReview, setWroteReview] = useState(dailyReview || '');
  const [totalTextLength, setTotalTextLength] = useState(0);
  const maxTextLength = 80;

  return (
    <>
      {reviewIsActive && (
        <StyledDailyReviewModal
          onMouseDown={() => {
            setReviewIsActive(false);
          }}
        />
      )}
      <StyledDailyReview>
        <textarea
          name='dailyReview'
          id={id}
          rows='2'
          placeholder='오늘도 즐거운 식사 되셨나요? 오늘의 느낀 점을 기록해보세요. (80자 이내)'
          value={wroteReview}
          onChange={e => {
            totalTextLength <= maxTextLength
              ? setWroteReview(e.target.value)
              : setWroteReview(e.target.value.substring(0, 80));
            setTotalTextLength(checkByte(e));
          }}
          onFocus={e => {
            setTotalTextLength(checkByte(e));
            e.target.selectionStart = e.target.value.length;
          }}
          ref={dailyTextarea}
          disabled={reviewIsActive ? '' : 'disabled'}
        ></textarea>
        {reviewIsActive && (
          <>
            <span>{totalTextLength}/80자</span>
            <button
              onMouseDown={() =>
                onRemove(
                  date,
                  setWroteReview,
                  setReviewIsActive,
                  setTotalTextLength
                )
              }
            >
              삭제
            </button>
            <button
              onMouseDown={() => onSubmit(date, wroteReview, setReviewIsActive)}
            >
              등록
            </button>
          </>
        )}
      </StyledDailyReview>
    </>
  );
}
