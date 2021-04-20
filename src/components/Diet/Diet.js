import React from 'react';
import { StyledMeal } from './Diet.styled';

export default function Diet({ ...restProps }) {
  return <StyledMeal isHome={true} {...restProps} />;
}
