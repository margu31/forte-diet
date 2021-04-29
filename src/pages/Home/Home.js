import React, { useEffect, useState } from 'react';
import { StyledHomePageWrapper, HomePageHeading } from './Home.styled';
import { UserBar, BoardContainer } from 'containers';
import Welcome from 'components/Welcome/Welcome';
import ScrollTopButton from '../../components/ScrollTopButton/ScrollTopButton';

export default function Home() {
  const [boardType, setBoardType] = useState('popular');

  const setBoardToSearch = () => {
    setBoardType('search');
  };

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, []);

  const onMoveToTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };

  return (
    <StyledHomePageWrapper>
      <HomePageHeading>홈 페이지</HomePageHeading>
      <UserBar />
      <Welcome setBoardToSearch={setBoardToSearch} />
      <BoardContainer boardType={boardType} setBoardType={setBoardType} />
      <ScrollTopButton onMoveToTop={onMoveToTop} />
    </StyledHomePageWrapper>
  );
}
