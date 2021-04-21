import { firestore } from './auth';
import firebase from 'firebase';

const diets = firestore.collection('diets');

export const getRecentDiets = limit => async () => {
  try {
    const response = await diets.orderBy('createdAt', 'desc').limit(limit).get();

    const recentDiets = [];

    response.forEach(doc => recentDiets.push(doc.data()));

    return recentDiets;
  } catch (e) {
    throw new Error(e.message);
  }
};

export const getPopularDiets = limit => async () => {
  try {
    const response = await diets.orderBy('like', 'desc').limit(limit).get();

    const popularDiets = [];

    response.forEach(doc => popularDiets.push(doc.data()));

    return popularDiets;
  } catch (e) {
    throw new Error(e.message);
  }
};

/* -------------------------------------------------------------------------- */
/*                                  다이어트 테이블                                  */
/* -------------------------------------------------------------------------- */

/* 데일리 리뷰 추가 및 수정 */
export const addOrEditDailyReviewInDiets = async (dietId, review) => {
  try {
    const diet = await diets.doc(dietId);

    diet.set(
      {
        dailyReview: review
      },
      { merge: true }
    );

    return true;
  } catch (e) {
    throw new Error(e.message);
  }
};

/* 데일리 리뷰 삭제 */
export const removeDailyReviewInDiets = async dietId => {
  try {
    const diet = await diets.doc(dietId);

    diet.set(
      {
        dailyReview: ''
      },
      { merge: true }
    );
  } catch (e) {
    throw new Error(e.message);
  }
};

/* 물 섭취량 수정 */
export const updateWaterDoseInDiets = async (dietId, curDose, addDose) => {
  try {
    const diet = await diets.doc(dietId);

    diet.set(
      {
        waterDose: curDose + addDose
      },
      { merge: true }
    );
  } catch (e) {
    throw new Error(e.message);
  }
};

/* meal 삭제 */
export const removeMealInDiets = async (dietId, dietList, date, mealId) => {
  const newMeals = dietList[date].meals.filter(meal => meal.id !== mealId);

  try {
    const diet = await diets.doc(dietId);

    if (!newMeals.length) diet.delete();
    else
      diet.set(
        {
          meals: newMeals
        },
        { merge: true }
      );
  } catch (e) {
    throw new Error(e.message);
  }
};

/* meal 추가 */
export const addMealInDiets = async (dietId, mealData) => {
  try {
    const diet = await diets.doc(dietId);
    diet.set(
      {
        meals: firebase.firestore.FieldValue.arrayUnion({
          ...mealData
        })
      },
      { merge: true }
    );
  } catch (e) {
    throw new Error(e.message);
  }
};
