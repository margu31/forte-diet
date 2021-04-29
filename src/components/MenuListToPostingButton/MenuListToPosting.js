import React from 'react';
import { useSelector } from 'react-redux';
import { StyledPlusButton, StyledPlusIcon } from './MenuListToPosting.styled';

export default function MenuListToPosting({ onMoveToPosting }) {
  const { authUser } = useSelector(state => state.auth);

  if (!authUser) return null;

  return (
    <StyledPlusButton onClick={onMoveToPosting} tabIndex='0' aria-label='포스팅 페이지로 이동'>
      <StyledPlusIcon />
    </StyledPlusButton>
  );
}
