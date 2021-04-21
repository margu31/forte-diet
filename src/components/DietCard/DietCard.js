import React from 'react';
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
  LikedHeartIcon
} from './DietCard.styled';

export default function DietCard({ dietData, auth, boardType, ...restProps }) {
  const dispatch = useDispatch();
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
    dispatch(pushLikeAction(newLike));

    addLikeToUser(auth.authUser, newLike);

    dispatch(handleEditLikeToDiets(dietData, boardType, dietData.like + 1));
  };

  const handleDisLike = () => {
    const newLike = [...auth.authUser.like].filter(id => id !== dietData.id);
    dispatch(pushLikeAction(newLike));

    addLikeToUser(auth.authUser, newLike);

    dispatch(handleEditLikeToDiets(dietData, boardType, dietData.like - 1));
  };

  return (
    <DietItem>
      <DietAuthor>{dietData.author}</DietAuthor>
      <StyledDietCard>
        <MealImg
          $borderColor={changeBorderColor(dietData.meals[0].type)}
          src='https://i.pinimg.com/564x/b7/20/36/b720364e1b6503bafba08dc2a905c17d.jpg'
        />
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
        <DailyReview>{dietData.dailyReview}</DailyReview>
      </StyledDietCard>
    </DietItem>
  );
}
