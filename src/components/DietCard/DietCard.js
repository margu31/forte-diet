import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addLikeToUser } from '../../api/auth';
import { handleEditLikeToDiets } from '../../api/diets';
import { pushLikeAction } from '../../redux/modules/auth/auth';
import { palette } from '../../styles';
import {
  DietItem,
  StyledDietCard,
  MealImg,
  DietInfos,
  DietInfo,
  Likes,
  DailyReview,
  DonutIcon,
  HeartIcon,
  WaterIcon,
  DietAuthor,
  LikedHeartIcon,
  MealImgContainer
} from './DietCard.styled';

export default function DietCard({ dietData, auth, variants }) {
  const Image = useRef();
  const ImgContainer = useRef();
  const [$imgStyle, setImgStyle] = useState(null);
  const dispatch = useDispatch();

  const handleImgSize = () => {
    if (!Image.current) return;
    const containerAspect = ImgContainer.current.offsetHeight / ImgContainer.current.offsetWidth;
    const imgAspect = Image.current.height / Image.current.width;

    if (imgAspect <= containerAspect) {
      // 이미지가 div보다 납작한 경우 세로를 div에 맞추고 가로는 잘라낸다
      const imgWidthActual = ImgContainer.current.height / imgAspect;
      const imgWidthToBe = ImgContainer.current.height / containerAspect;
      const marginLeft = -Math.round((imgWidthActual - imgWidthToBe) / 4);
      setImgStyle(`width: auto; height: 100%; margin-left:${marginLeft}px;`);
    } else {
      const imgHeightActual = ImgContainer.current.width / imgAspect;
      const imgHeightToBe = ImgContainer.current.width / containerAspect;
      const marginTop = -Math.round((imgHeightActual - imgHeightToBe) / 4);
      // 이미지가 div보다 길쭉한 경우 가로를 div에 맞추고 세로를 잘라낸다
      setImgStyle(`width: 100%; height: auto; margin-top: ${marginTop};`);
    }
  };

  const changeBorderColor = type => {
    switch (type) {
      case '아침':
        // return palette.themeSecondary;
        return palette.themeTertiary;
      case '점심':
        return palette.themePrimary;
      case '저녁':
        // return palette.themeDefault;
        return palette.themeSecondary;
      case '간식':
        // return palette.themePrimaryThick;
        return palette.themeQuaternary;
      default:
        return palette.themeSecondary;
    }
  };

  const isLiked = auth.authUser?.like.includes(dietData.id);

  /* 밑에 두 함수 합치는 리팩토링 필요 */
  const handleLike = () => {
    if (!auth.authUser) return;
    const newLike = [...auth.authUser.like, dietData.id];

    // auth 상태에 like 리스트 업데이트 <- 이거 밑에 거 dispatch하면서 함께 하면 될 듯
    dispatch(pushLikeAction(newLike));

    // firebase/users 테이블에 like 리스트 업데이트
    addLikeToUser(auth.authUser, newLike, dietData, dietData.like + 1);

    // firebase/diets 테이블에 like 수 업데이트 -> board 상태 최신화
    dispatch(handleEditLikeToDiets(dietData, dietData.like + 1));
  };

  const handleDisLike = () => {
    const newLike = [...auth.authUser.like].filter(id => id !== dietData.id);
    dispatch(pushLikeAction(newLike));

    addLikeToUser(auth.authUser, newLike, dietData, dietData.like - 1);

    dispatch(handleEditLikeToDiets(dietData, dietData.like - 1));
  };

  return (
    <DietItem variants={variants} $isUserItem={auth.authUser && auth.authUser.uid === dietData.uid}>
      <DietAuthor>{dietData.author} 님</DietAuthor>
      <StyledDietCard>
        <MealImgContainer
          ref={ImgContainer}
          $borderColor={changeBorderColor(dietData.meals[0].type)}
        >
          <MealImg
            alt='음식 사진'
            src={dietData.meals[0].photo}
            ref={Image}
            $imgStyle={$imgStyle}
            onLoad={handleImgSize}
          />
        </MealImgContainer>
        <DietInfos>
          <DietInfo>
            <DonutIcon /> {dietData.calories || '0'}kcal
          </DietInfo>
          <DietInfo>
            <WaterIcon /> {dietData.waterDose || '0'}ml
          </DietInfo>
          <Likes>
            {isLiked ? (
              <LikedHeartIcon onClick={handleDisLike} />
            ) : (
              <HeartIcon onClick={handleLike} />
            )}{' '}
            {dietData.like || '0'}
          </Likes>
        </DietInfos>
        {dietData.dailyReview && <DailyReview>{dietData.dailyReview}</DailyReview>}
      </StyledDietCard>
    </DietItem>
  );
}
