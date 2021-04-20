import React from 'react';
import { StyledPlusButton } from './MenuListToPosting.styled';
import { useSelector } from 'react-redux';

export default function MenuListToPosting({ onMoveToPosting }) {
  const { authUser } = useSelector(state => state.auth);

  if (!authUser) return null;

  return <StyledPlusButton onClick={onMoveToPosting} />;
}
