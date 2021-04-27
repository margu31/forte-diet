import React from 'react';
import { StyledFox, StyledSpeech } from './NotFound.styled';

export default function NotFound({ text }) {
  return (
    <>
      <StyledSpeech>{text}</StyledSpeech>
      <StyledFox />
    </>
  );
}
