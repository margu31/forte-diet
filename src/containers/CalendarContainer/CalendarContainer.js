import React from 'react';
import Calendar from 'components/Calendar/Calendar';
import { useSelector } from 'react-redux';

export default function CalendarContainer() {
  const { authUser } = useSelector(state => state.auth);

  const menuList = useSelector(state => state.menuList);
  const calendarMenuList = Object.entries(menuList)
    .sort((a, b) => b[0].slice(0, 6) - a[0].slice(0, 6))
    .map(data => data[1].meals[0] && data[1].meals[0].date);

  const checkMealListLength = index => {
    let count = 0;

    Object.entries(menuList)
      .sort((a, b) => b[0].slice(0, 6) - a[0].slice(0, 6))
      .filter(data => data[1].meals.length)
      .map(data => data[1])
      .slice(0, index)
      .map(data =>
        data.meals.length > 4
          ? (count += 1 * Math.floor(data.meals.length / 4))
          : null
      );

    return count;
  };

  const onScroll = selectedDate => {
    const offsetY = calendarMenuList.filter(list => list).indexOf(selectedDate);
    const addOffsetY = checkMealListLength(offsetY);

    window.scroll({
      top: 464 * offsetY + 227 * addOffsetY,
      left: 0,
      behavior: 'smooth'
    });
  };

  if (!authUser) return null;

  return <Calendar calendarMenuList={calendarMenuList} onScroll={onScroll} />;
}
