import React from 'react';
import { StyledMealList } from './MealList.styled';
import { palette } from 'styles/index';
import { motion } from 'framer-motion';

export default function MealList({ mealListData, variants }) {
  const { photo, title, type } = mealListData;
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
    <>
      <StyledMealList
        $borderColor={changeBorderColor(type)}
        variants={variants}
      >
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}>
          {/* <img src={photo} alt={title} /> */}
          <img
            src='https://i.pinimg.com/564x/b7/20/36/b720364e1b6503bafba08dc2a905c17d.jpg'
            alt={title}
          />
        </motion.div>
        <span>{type}</span>
        <span>{title}</span>
      </StyledMealList>
    </>
  );
}
