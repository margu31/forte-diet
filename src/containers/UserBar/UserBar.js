import React from 'react';
import { useSelector } from 'react-redux';
import UserNavigation from '../../components/UserNavigation/UserNavigation';

export default function UserBar() {
  const { isAuthed } = useSelector(state => state.auth);

  return <UserNavigation isAuthed={isAuthed} />;
}
