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
import MealModalContainer from 'containers/MealModalContainer/MealModalContainer';

export default function MealList({
  mealListData,
  variants,
  onDelete,
  date,
  isHome,
  ...restProps
}) {
  const { photo, title, type, id } = mealListData;
  const [isActive, setIsActive] = useState(false);
  const [showMealModal, setShowMealModal] = useState(false);

  const changeBorderColor = type => {
    switch (type) {
      case '아침':
        return palette.themeTertiary;
      case '점심':
        return palette.themePrimary;
      case '저녁':
        return palette.themeSecondary;
      case '간식':
        return palette.themeQuaternary;
      default:
        return palette.themeSecondary;
    }
  };

  const onMealModal = e => {
    setShowMealModal(!showMealModal);
  };

  return (
    <>
      {showMealModal === true ? (
        <MealModalContainer
          onMealModal={onMealModal}
          mealListData={mealListData}
        ></MealModalContainer>
      ) : null}
      <StyledLiContainer {...restProps}>
        <StyledMealList
          $borderColor={changeBorderColor(type)}
          variants={variants}
        >
          {!isHome && (
            <StyledDeleteButton onClick={() => setIsActive(!isActive)}>
              <StyledDeleteIcon />
            </StyledDeleteButton>
          )}
          <StyledContainer
            onClick={onMealModal}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1 }}
          >
            <img src={photo} alt={title} />
          </StyledContainer>
          <span>{type}</span>
          <span>{title}</span>
        </StyledMealList>
        {!isHome && isActive && (
          <StyledDeleteModal onMouseDown={() => setIsActive(false)} />
        )}
        {!isHome && isActive && (
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
                삭제
              </span>
              <StyledTriangle />
            </StyledDeleteDialog>
          </>
        )}
      </StyledLiContainer>
    </>
  );
}
