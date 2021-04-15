import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleSignOut } from '../../api/auth';
import UserNavigation from '../../components/UserNavigation/UserNavigation';
import { signOutAction } from '../../redux/modules/auth/auth';

export default function UserBar() {
  const { isAuthed } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const onSignOut = () => {
    dispatch(handleSignOut(signOutAction));
  };

  return <UserNavigation isAuthed={isAuthed} onSignOut={onSignOut} />;
}
