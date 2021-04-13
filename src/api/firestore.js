import { firestore } from './auth';
import firebase from 'firebase';

const users = firestore.collection('users');

/* 마이 페이지 */

export const handleGetDietLists = (
  { uid },
  updateDietAction
) => async dispatch => {
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
    return new Error(e.message);
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
    return new Error(e.message);
  }
};

/* 포스팅 페이지 */

export const PostMeal = async ({ uid }, mealdata) => {
  try {
    const user = await users.doc(uid);
    user.set(
      {
        dietList: {
          [mealdata.date]: {
            meals: firebase.firestore.FieldValue.arrayUnion({
              ...mealdata
            })
          }
        }
      },
      { merge: true }
    );

    return true;
  } catch (e) {
    throw new Error(e.message);
  }
};
