import React, { useState } from 'react';
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
  StyledNextButton
} from './Calendar.styled';
import { palette } from 'styles/index';

export default function Calendar() {
  const [isActive, setIsActive] = useState(false);
  const [currentDate, setCurrentDate] = useState(() => new Date());
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
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

  const formattedDate = () => {
    const format = n => (n < 10 ? '0' + n : n + '');
    return date =>
      `${date.getFullYear()}-${format(date.getMonth() + 1)}-${format(
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

  const styledTodayProps = date => {
    const today = new Date();
    const $border = [];

    if (isEqualDate(date, today))
      $border.push(`1px solid ${palette.themeBrightGray}`);

    return $border;
  };

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

  if (!year) return null;

  return (
    <>
      <StyledCalendarButton onClick={() => setIsActive(!isActive)}>
        <StyledCalendarIcon />
      </StyledCalendarButton>
      {isActive && (
        <>
          <StyledCalendarModal onClick={() => setIsActive(false)} />
          <StyledCalendarDialog>
            <h2 aria-hidden='true'>캘린더</h2>
            <StyledNav role='navigation' aria-labelledby='year-title'>
              <button onClick={onClickPrev}>
                <StyledPrevButton />
              </button>
              <div>
                <div>{year}</div>
                <div>{monthNames[month]}</div>
              </div>
              <button onClick={onClickNext}>
                <StyledNextButton />
              </button>
            </StyledNav>
            <StyledGrid>
              {dayNames.map((day, i) => (
                <StyledDay key={i}>{day}</StyledDay>
              ))}
              {eachCalendarDates(year, month).map((date, i) => (
                <StyledDate
                  dataDate={formattedDate(date)}
                  key={i}
                  $styledColorProps={styledColorProps(date)}
                  $styledBackgroundProps={styledBackgroundProps(date)}
                  $styledTodayProps={styledTodayProps(date)}
                >
                  {date.getDate()}
                </StyledDate>
              ))}
            </StyledGrid>
          </StyledCalendarDialog>
        </>
      )}
    </>
  );
}
