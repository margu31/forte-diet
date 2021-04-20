import React from 'react';
import { StyledTopButton } from './ScrollTopButton.styled';
import { useSelector } from 'react-redux';

export default function ScrollTopButton({ onMoveToTop }) {
  const { authUser } = useSelector(state => state.auth);

  if (!authUser) return null;

  return <StyledTopButton onClick={onMoveToTop} />;
}
