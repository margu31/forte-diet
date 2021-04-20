import React from 'react';
import Calendar from 'components/Calendar/Calendar';
import { useSelector } from 'react-redux';

export default function CalendarContainer() {
  const menuList = useSelector(state => state.menuList);
  const calendarMenuList = Object.entries(menuList).map(
    data => data[1].meals[0] && data[1].meals[0].date
  );

  console.log(
    'dksjfl',
    Object.entries(menuList).map(
      data => data[1].meals[0] && data[1].meals[0].date
    )
  );

  return <Calendar calendarMenuList={calendarMenuList} />;
}
