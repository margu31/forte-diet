import React, { useEffect, useState } from 'react';
import Welcome from 'components/Welcome/Welcome';
import UserBar from 'containers/UserBar/UserBar';
import { StyledHomePageWrapper, HomePageHeading } from './Home.styled';
import BoardContainer from 'containers/BoardContainer/BoardContainer';
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
