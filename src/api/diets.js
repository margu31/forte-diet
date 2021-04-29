import { firestore } from './auth';
import firebase from 'firebase';
import { getPopularMenus, getRecentMenus } from '../redux/modules/board';

/* 유틸 */
const getTotalCalories = meals => {
  const totalCalories = meals.reduce((acc, cur) => acc + +cur.calories, 0);

  return totalCalories > 999
    ? totalCalories.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    : totalCalories;
};

const diets = firestore.collection('diets');

/* 패치 */
export const getRecentDiets = limit => async () => {
  try {
    const response = await diets.orderBy('updatedAt', 'desc').limit(limit).get();

    const recentDiets = [];

    response.forEach(doc => {
      const datas = doc.data();
      datas.id = doc.id;
      recentDiets.push(datas);
    });

    return recentDiets;
  } catch (e) {
    throw new Error(e.message);
  }
};

export const getPopularDiets = limit => async () => {
  try {
    const response = await diets.orderBy('like', 'desc').limit(limit).get();

    const popularDiets = [];

    response.forEach(doc => {
      const datas = doc.data();
      datas.id = doc.id;
      popularDiets.push(datas);
    });

    return popularDiets;
  } catch (e) {
    throw new Error(e.message);
  }
};

export const getSearchDiets = limit => async searchWord => {
  try {
    const response = await diets
      .where('titles', 'array-contains-any', searchWord.split(''))
      .limit(limit)
      .get();

    const searchDiets = [];
    response.forEach(doc => {
      const datas = doc.data();
      datas.id = doc.id;
      searchDiets.push(datas);
    });

    return searchDiets;
  } catch (e) {
    throw new Error(e.message);
  }
};

/* -------------------------------------------------------------------------- */
/*                            다이어트 테이블                                  */
/* -------------------------------------------------------------------------- */

/* 데일리 리뷰 추가 및 수정 */
export const addOrEditDailyReviewInDiets = async (dietId, review) => {
  try {
    const diet = await diets.doc(dietId);

    diet.set(
      {
        dailyReview: review,
        updatedAt: new Date()
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
        dailyReview: '',
        updatedAt: new Date()
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
        waterDose: curDose + addDose,
        updatedAt: new Date()
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
  const newTitles = dietList[date].meals.reduce((titles, meal) => {
    meal.id !== mealId && titles.push(...meal.title.split(''));
    meal.id !== mealId && titles.push(meal.title);

    return titles;
  }, []);

  try {
    const diet = await diets.doc(dietId);
    const totalCalories = parseInt(getTotalCalories(newMeals), 10);

    if (!newMeals.length) diet.delete();
    else
      diet.set(
        {
          titles: newTitles,
          meals: newMeals,
          calories: totalCalories,
          updatedAt: new Date()
        },
        { merge: true }
      );
  } catch (e) {
    throw new Error(e.message);
  }
};

/* meal 수정 */
export const handleEditMealInDiets = (
  { id: dietId, meals },
  newMeals,
  mealData
) => async dispatch => {
  const newTitles = newMeals.reduce((titles, meal) => {
    titles.push(...meal.title.split(''));
    titles.push(meal.title);

    return titles;
  }, []);
  try {
    const diet = await diets.doc(dietId);
    const totalCalories = parseInt(getTotalCalories(newMeals), 10);
    diet.set(
      {
        titles: newTitles,
        meals: newMeals,
        calories: totalCalories,
        updatedAt: new Date()
      },
      { merge: true }
    );

    dispatch(getPopularMenus(25)());
    dispatch(getRecentMenus(25)());
  } catch (e) {
    throw new Error(e.message);
  }
};

/* menu 삭제 */
export const handleDeleteDietInDiets = dietId => async dispatch => {
  try {
    const diet = await diets.doc(dietId);

    diet.delete();

    dispatch(getPopularMenus(25)());
    dispatch(getRecentMenus(25)());
  } catch (e) {
    throw new Error(e.message);
  }
};

/* meal 추가 */
export const addMealInDiets = async ({ id: dietId, meals }, mealData) => {
  try {
    const diet = await diets.doc(dietId);
    const totalCalories = parseInt(getTotalCalories(meals), 10);
    diet.set(
      {
        titles: firebase.firestore.FieldValue.arrayUnion(
          ...mealData.title.split(''),
          mealData.title
        ),
        updatedAt: new Date(),
        calories: totalCalories + parseInt(mealData.calories, 10),
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

/* 좋아요 토글 */
export const handleEditLikeToDiets = ({ id: dietId }, newLike) => async dispatch => {
  try {
    const diet = await diets.doc(dietId);
    diet.set(
      {
        like: newLike,
        updatedAt: new Date()
      },
      { merge: true }
    );

    dispatch(getRecentMenus(25)());
    dispatch(getPopularMenus(25)());
  } catch (e) {
    throw new Error(e.message);
  }
};
