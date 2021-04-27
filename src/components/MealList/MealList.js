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
  mealListFocus,
  ...restProps
}) {
  const { photo, title, type, id } = mealListData;
  const [isActive, setIsActive] = useState(false);
  const [showMealModal, setShowMealModal] = useState(false);

  const onMealModal = e => {
    setShowMealModal(!showMealModal);
  };

  /* -------------------------------------------------------------------------- */
  /*                           스타일 컴포넌트 프롭스 지정                             */
  /* -------------------------------------------------------------------------- */
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

  /* -------------------------------------------------------------------------- */
  /*                           웹 접근성 키보드 이벤트 코드                            */
  /* -------------------------------------------------------------------------- */
  const forPhoto = e => {
    if (e.keyCode === 13) {
      onMealModal();
    }
  };

  const forDeleteDialog = e => {
    if (e.keyCode === 13) {
      onDelete(date, id);
      setIsActive(false);
    }
    if (e.keyCode === 27) {
      setIsActive(false);
    }
    if (e.keyCode === 9) {
      setIsActive(false);
    }
  };

  /* -------------------------------------------------------------------------- */

  return (
    <>
      {showMealModal === true ? (
        <MealModalContainer
          onMealModal={onMealModal}
          mealListData={mealListData}
          showMealModal={showMealModal}
        ></MealModalContainer>
      ) : null}
      <StyledLiContainer {...restProps}>
        <StyledMealList
          $borderColor={changeBorderColor(type)}
          variants={variants}
          ref={mealListFocus}
        >
          <StyledContainer
            onClick={onMealModal}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1 }}
            tabIndex='0'
            onKeyDown={e => forPhoto(e)}
            aria-label={`${type} ${title}`}
          >
            <img src={photo} alt={title} />
          </StyledContainer>
          <span>{type}</span>
          <span>{title}</span>
          {!isHome && (
            <StyledDeleteButton
              onClick={() => setIsActive(!isActive)}
              aria-label='삭제'
            >
              <StyledDeleteIcon />
            </StyledDeleteButton>
          )}
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
                onKeyDown={e => forDeleteDialog(e)}
                tabIndex='0'
                aria-label='정말로 삭제하시겠습니까?'
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
