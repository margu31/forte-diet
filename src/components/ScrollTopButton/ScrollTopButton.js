import React from 'react';
import { StyledTopButton } from './ScrollTopButton.styled';

export default function ScrollTopButton({ onMoveToTop }) {
  return <StyledTopButton onClick={onMoveToTop} />;
}
