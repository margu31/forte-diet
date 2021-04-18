import React, { useState } from 'react';
import {
  StyledMealList,
  StyledContainer,
  StyledDeleteButton,
  StyledDeleteIcon,
  StyledDeleteDialog,
  StyledDeleteModal,
  StyledLiContainer,
  StyledTriangle
} from './MealList.styled';
import { palette } from 'styles/index';

export default function MealList({ mealListData, variants, onDelete, date }) {
  const { photo, title, type, id } = mealListData;
  const [isActive, setIsActive] = useState(false);

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

  return (
    <StyledLiContainer>
      <StyledMealList
        $borderColor={changeBorderColor(type)}
        variants={variants}
      >
        <StyledDeleteButton onClick={() => setIsActive(!isActive)}>
          <StyledDeleteIcon />
        </StyledDeleteButton>
        <StyledContainer whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}>
          {/* <img src={photo} alt={title} /> */}
          <img
            src='https://i.pinimg.com/564x/b7/20/36/b720364e1b6503bafba08dc2a905c17d.jpg'
            alt={title}
          />
        </StyledContainer>
        <span>{type}</span>
        <span>{title}</span>
      </StyledMealList>
      {isActive && <StyledDeleteModal onMouseDown={() => setIsActive(false)} />}
      {isActive && (
        <>
          <StyledDeleteDialog
            initial={{ y: 2, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.1
            }}
            exit={{ x: 2, opacity: 0 }}
          >
            <span
              onClick={() => {
                onDelete(date, id);
                setIsActive(false);
              }}
            >
              Delete
            </span>
            <StyledTriangle />
          </StyledDeleteDialog>
        </>
      )}
    </StyledLiContainer>
  );
}
