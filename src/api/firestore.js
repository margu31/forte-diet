import { firestore } from './auth';
import firebase from 'firebase';

const users = firestore.collection('users');
const diets = firestore.collection('diets');

/* 마이 페이지 */

export const handleGetDietLists = ({ uid }, updateDietAction) => async dispatch => {
  try {
    const snapshot = await users.where('id', '==', uid).get();

    snapshot.forEach(user => dispatch(updateDietAction(user.data().dietList)));

    return true;
  } catch (e) {
    return new Error(e.message);
  }
};

export const addOrEditDailyReview = ({ uid }, date, review) => async () => {
  try {
    const user = await users.doc(uid);
    user.set(
      {
        dietList: {
          [date]: {
            dailyReview: review
          }
        }
      },
      { merge: true }
    );

    return true;
  } catch (e) {
    return new Error('$addOrEditDailyReview :' + e.message);
  }
};

export const removeDailyReview = ({ uid }, date) => async () => {
  try {
    const user = await users.doc(uid);
    user.set(
      {
        dietList: {
          [date]: {
            dailyReview: ''
          }
        }
      },
      { merge: true }
    );

    return true;
  } catch (e) {
    return new Error('$removeDailyReview :' + e.message);
  }
};

export const addWaterDose = ({ uid }, date, currentDose, additionalDose) => async () => {
  try {
    const user = await users.doc(uid);
    user.set(
      {
        dietList: {
          [date]: {
            waterDose: currentDose + additionalDose
          }
        }
      },
      { merge: true }
    );
  } catch (e) {
    return new Error('$waterDose API :' + e.message);
  }
};

export const removeMeal = ({ uid }, dietList, date, mealId) => async () => {
  const newMeals = dietList[date].meals.filter(meal => meal.id !== mealId);

  try {
    const user = await users.doc(uid);

    if (!newMeals.length)
      user.set(
        {
          dietList: {
            [date]: firebase.firestore.FieldValue.delete()
          }
        },
        { merge: true }
      );
    else
      user.set(
        {
          dietList: {
            [date]: {
              meals: newMeals
            }
          }
        },
        { merge: true }
      );

    return true;
  } catch (e) {
    throw new Error(e.message);
  }

  /* diets에서도 지워야 함. */
};

/* 포스팅 페이지 */

export const addNewDiet = async mealdata => {
  try {
    const newDietRef = await diets.add({
      dailyReview: null,
      createdAt: new Date(),
      calories: mealdata.calories,
      like: 0,
      meals: [{ ...mealdata }]
    });

    return newDietRef.id;
  } catch (e) {
    throw new Error(e.message);
  }
};

export const PostMeal = async ({ uid }, mealdata, dietId) => {
  try {
    const user = await users.doc(uid);
    const newData = {
      dietList: {
        [mealdata.date]: {
          meals: firebase.firestore.FieldValue.arrayUnion({
            ...mealdata
          })
        }
      }
    };
    if (dietId) newData.dietList[mealdata.date].id = dietId;
    user.set(newData, { merge: true });

    return true;
  } catch (e) {
    throw new Error(e.message);
  }
};

/* 셋팅 페이지 */

/* 유저 정보 수정 api */

export const editUserInfo = async ({ uid }, userInfo) => {
  try {
    const user = await users.doc(uid);

    user.set(
      {
        ...userInfo
      },
      { merge: true }
    );

    return true;
  } catch (e) {
    throw new Error(e.message);
  }
};
