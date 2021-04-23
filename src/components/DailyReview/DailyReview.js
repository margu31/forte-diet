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
  dailyReview
}) {
  const [wroteReview, setWroteReview] = useState(dailyReview || '');
  const [totalBytes, setTotalBytes] = useState(0);
  const maxByte = 148;

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
          id='dailyReview'
          rows='2'
          placeholder='오늘도 즐거운 식사 되셨나요? 오늘의 느낀 점을 기록해보세요. (150btyes 이내)'
          value={wroteReview}
          onChange={e => {
            totalBytes <= maxByte
              ? setWroteReview(e.target.value)
              : setWroteReview(e.target.value.substring(0, 80));
            setTotalBytes(checkByte(e));
          }}
          onFocus={e => {
            setTotalBytes(checkByte(e));
            e.target.selectionStart = e.target.value.length;
          }}
          ref={dailyTextarea}
          disabled={reviewIsActive ? '' : 'disabled'}
        ></textarea>
        {reviewIsActive && (
          <>
            <span>{totalBytes}/150bytes</span>
            <button
              onMouseDown={() =>
                onRemove(date, setWroteReview, setReviewIsActive, setTotalBytes)
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
