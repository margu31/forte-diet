import React from 'react';
import { Link } from 'react-router-dom';
import { StyledLogo } from './HomeLink.styled';

export default function HomeLink() {
  return (
    <h1>
      <Link to='/'>
        <StyledLogo>우연히, 식단</StyledLogo>
      </Link>
    </h1>
  );
}
