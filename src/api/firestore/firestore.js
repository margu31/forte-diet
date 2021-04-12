import { firestore } from '../auth/auth';

const users = firestore.collection('users');

export const handleGetDietLists = ({ uid }, updateDietAction) => async dispatch => {
  try {
    const snapshot = await users.where('id', '==', uid).get();

    snapshot.forEach(user => dispatch(updateDietAction(user.data().dietList)));

    return true;
  } catch (e) {
    return new Error(e.message);
  }
};

export const handlePostMeal = async ({ uid }, mealdata) => {
  try {
    const user = await users.doc(uid);
    user.set(
      {
        dietList: [
          firestore.FieldValue.arrayUnion({
            [mealdata.date]: {
              ...mealdata
            }
          })
        ]
      },
      { merge: true }
    );
  } catch (e) {
    throw new Error(e.message);
  }
};
