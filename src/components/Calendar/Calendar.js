import React, { useState, useRef } from 'react';
import {
  StyledCalendarButton,
  StyledCalendarIcon,
  StyledCalendarModal,
  StyledCalendarDialog,
  StyledNav,
  StyledDay,
  StyledDate,
  StyledGrid,
  StyledPrevButton,
  StyledNextButton,
  StyledDot,
  StyledTodayButton
} from './Calendar.styled';
import { palette } from 'styles/index';

export default function Calendar({ calendarMenuList, onScroll }) {
  const [isActive, setIsActive] = useState(false);

  /* -------------------------------------------------------------------------- */
  /*                              캘린더 html 생성                                 */
  /* -------------------------------------------------------------------------- */
  const [currentDate, setCurrentDate] = useState(() => new Date());
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const dayNames = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  const formattedDateForFetch = date => {
    const format = n => (n < 10 ? '0' + n : n + '');

    const selectedYear = date.getFullYear().toString().slice(2, 4);
    const selectedMonth = format(+date.getMonth().toString() + 1);
    const selectedDate = format(+date.getDate().toString());
    const selectedDay = date.toString().slice(0, 3).toUpperCase();

    return `${selectedYear}${selectedMonth}${selectedDate} ${selectedDay}`;
  };

  const formattedDateForSelect = date => {
    const format = n => (n < 10 ? '0' + n : n + '');

    return `${date.getFullYear()}-${format(date.getMonth() + 1)}-${format(
      date.getDate()
    )}`;
  };

  const eachCalendarDates = (() => {
    const diffDays = (from, to) => Math.abs(to - from) / 86400000;

    return (currentYear, currentMonth) => {
      const firstDay = new Date(currentYear, currentMonth, 1).getDay() + 1;
      const lastDay = new Date(currentYear, currentMonth + 1, 0).getDay() + 1;
      const from = new Date(currentYear, currentMonth, 1 - (firstDay - 1)); // 일주일 시작점 찾기 SUNDAY
      const to = new Date(currentYear, currentMonth + 1, 7 - lastDay); // 일주일 끝점 찾기

      return Array.from({ length: diffDays(from, to) + 1 }, (_, i) => {
        if (i) from.setDate(from.getDate() + 1);
        return new Date(from);
      });
    };
  })();

  const isEqualDate = (date1, date2) =>
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate();

  const onClickPrev = () => {
    setCurrentDate(
      new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() - 1,
        currentDate.getDate()
      )
    );
  };

  const onClickNext = () => {
    setCurrentDate(
      new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        currentDate.getDate()
      )
    );
  };

  /* -------------------------------------------------------------------------- */
  /*                           스타일 컴포넌트 프롭스 지정                             */
  /* -------------------------------------------------------------------------- */
  const styledColorProps = date => {
    const $color = [];

    if (!date.getDay()) $color.push(palette.themeQuaternary);
    if (isEqualDate(date, currentDate)) $color.push(palette.themeDefaultWhite);
    if (date.getMonth() !== month) {
      if ($color.length) $color.splice(0, $color.length, 'rgba(0, 0, 0, 0.3)');
      else $color.push('rgba(0, 0, 0, 0.3)');
    }

    return $color;
  };

  const styledBackgroundProps = date => {
    const $background = [];

    if (isEqualDate(date, currentDate))
      $background.push(palette.themePrimaryThick);

    return $background;
  };

  const styledTodayBorderProps = date => {
    const today = new Date();
    const $border = [];

    if (isEqualDate(date, today))
      $border.push(`1px solid rgb(242, 104, 48, 0.5)`);

    return $border;
  };

  const styledSelectedColorProps = date => {
    const $selectedColor = [];

    if (isEqualDate(date, currentDate))
      $selectedColor.push(palette.themeDefaultWhite);

    return $selectedColor;
  };

  /* -------------------------------------------------------------------------- */
  /*                         웹 접근성 키보드 이벤트 코드                              */
  /* -------------------------------------------------------------------------- */
  const foucsFirst = useRef();

  const forCalendarButton = e => {
    if (e.keyCode === 27) {
      setIsActive(!isActive);
    }
  };

  const forSelectDate = e => {
    if (
      calendarMenuList[0].slice(0, 6) ===
      e.target.ariaLabel.slice(2, 10).replace(/-/g, '')
    ) {
      if (e.keyCode === 13) {
        e.stopPropagation(); // 이벤트 전파 막기
        setCurrentDate(new Date(e.target.parentElement.dataset.dateOrigin));
        setIsActive(false);
        onScroll(e.target.parentElement.dataset.date);
      }

      if (e.keyCode === 9) {
        foucsFirst.current.focus();
      }
    }

    if (e.keyCode === 13) {
      e.stopPropagation(); // 이벤트 전파 막기
      setCurrentDate(new Date(e.target.parentElement.dataset.dateOrigin));
      setIsActive(false);
      onScroll(e.target.parentElement.dataset.date);
    }
  };

  /* -------------------------------------------------------------------------- */

  if (!year) return null;

  return (
    <>
      <StyledCalendarButton
        onClick={() => setIsActive(!isActive)}
        onKeyDown={e => forCalendarButton(e)}
        tabIndex='0'
        aria-label='식단 캘린더'
        ref={foucsFirst}
      >
        <StyledCalendarIcon />
      </StyledCalendarButton>
      {isActive && (
        <>
          <StyledCalendarModal onClick={() => setIsActive(false)} />
          <StyledCalendarDialog
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.1
            }}
            exit={{ y: 10, opacity: 0 }}
            aria-label={`${year} ${monthNames[month]}`}
            tabIndex='0'
            onKeyDown={e => forCalendarButton(e)}
          >
            <StyledNav role='application'>
              <button onClick={onClickPrev} aria-label='이전 달로 이동'>
                <StyledPrevButton />
              </button>
              <div>
                <div>{year}</div>
                <div>{monthNames[month]}</div>
              </div>
              <button onClick={onClickNext} aria-label='다음 달로 이동'>
                <StyledNextButton />
              </button>
              <StyledTodayButton
                onClick={e => {
                  e.stopPropagation(); // 이벤트 전파 막기
                  setCurrentDate(new Date());
                }}
                aria-label='오늘로 이동'
              >
                Today
              </StyledTodayButton>
            </StyledNav>
            <StyledGrid>
              {dayNames.map((day, i) => (
                <StyledDay key={i}>{day}</StyledDay>
              ))}
              {eachCalendarDates(year, month).map((date, i) => (
                <StyledDate
                  data-date={formattedDateForFetch(date)}
                  data-date-origin={formattedDateForSelect(date)}
                  key={i}
                  $styledColorProps={styledColorProps(date)}
                  $styledBackgroundProps={styledBackgroundProps(date)}
                  $styledTodayBorderProps={styledTodayBorderProps(date)}
                  $styledSelectedColorProps={styledSelectedColorProps(date)}
                >
                  {date.getDate()}
                  {calendarMenuList.includes(formattedDateForFetch(date)) && (
                    <StyledDot
                      $styledSelectedColorProps={styledSelectedColorProps(date)}
                      onClick={e => {
                        e.stopPropagation(); // 이벤트 전파 막기
                        setCurrentDate(
                          new Date(e.target.parentElement.dataset.dateOrigin)
                        );
                        setIsActive(false);
                        onScroll(e.target.parentElement.dataset.date);
                      }}
                      onKeyDown={e => forSelectDate(e)}
                      aria-label={`${formattedDateForSelect(date)} 식단 이동`}
                      tabIndex='0'
                    >
                      .
                    </StyledDot>
                  )}
                </StyledDate>
              ))}
            </StyledGrid>
          </StyledCalendarDialog>
        </>
      )}
    </>
  );
}
