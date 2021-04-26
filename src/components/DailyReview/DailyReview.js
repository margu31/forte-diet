import React, { useState, useRef } from 'react';
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
  id,
  mealListFocus
}) {
  const [wroteReview, setWroteReview] = useState(dailyReview || '');
  const [totalTextLength, setTotalTextLength] = useState(0);
  const maxTextLength = 80;
  const deleteButton = useRef();

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
        {reviewIsActive && (
          <>
            <span ref={deleteButton} tabIndex='0'>
              {totalTextLength}/80자
            </span>
            <button
              onMouseDown={() =>
                onRemove(
                  date,
                  setWroteReview,
                  setReviewIsActive,
                  setTotalTextLength
                )
              }
              onKeyDown={e => {
                if (e.keyCode === 13) {
                  onRemove(
                    date,
                    setWroteReview,
                    setReviewIsActive,
                    setTotalTextLength
                  );
                }
                if (e.keyCode === 27) {
                  setReviewIsActive(false);
                }
              }}
            >
              삭제
            </button>
            <button
              onMouseDown={() => onSubmit(date, wroteReview, setReviewIsActive)}
              onKeyDown={async e => {
                if (e.keyCode === 13) {
                  onSubmit(date, wroteReview, setReviewIsActive);
                }
                if (e.keyCode === 9) {
                  await setReviewIsActive(false);
                  console.log(mealListFocus.current);
                  await mealListFocus.current.focus();
                  console.log('여긴되냐?');
                }
                if (e.keyCode === 27) {
                  setReviewIsActive(false);
                }
              }}
            >
              등록
            </button>
          </>
        )}
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
          onKeyDown={e => {
            if (e.keyCode === 9) {
              deleteButton.current.focus();
            }
            if (e.keyCode === 27) {
              setReviewIsActive(false);
            }
          }}
          tabIndex='0'
        ></textarea>
      </StyledDailyReview>
    </>
  );
}
