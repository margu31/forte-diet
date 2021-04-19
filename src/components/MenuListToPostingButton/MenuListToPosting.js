import React from 'react';
import { StyledPlusButton } from './MenuListToPosting.styled';

export default function MenuListToPosting({ onMoveToPosting }) {
  return <StyledPlusButton onClick={onMoveToPosting} />;
}
