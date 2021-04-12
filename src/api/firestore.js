import { firestore } from './auth';

export const handleGetDietLists = ({ uid }, updateDietAction) => async dispatch => {
  try {
    const snapshot = await firestore.collection('users').get();

    snapshot.forEach(user => {
      if (user.id === uid) dispatch(updateDietAction(user.data().dietList));
    });

    return true;
  } catch (e) {
    return new Error(e.message);
  }
};
