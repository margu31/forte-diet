import React from 'react';
import { StyledTopButton, StyledTopIcon } from './ScrollTopButton.styled';
import { useSelector } from 'react-redux';

export default function ScrollTopButton({ onMoveToTop }) {
  const { authUser } = useSelector(state => state.auth);

  if (!authUser) return null;

  return (
    <StyledTopButton
      onClick={onMoveToTop}
      tabIndex='0'
      aria-label='페이지 맨 위로가기'
    >
      <StyledTopIcon />
    </StyledTopButton>
  );
}
