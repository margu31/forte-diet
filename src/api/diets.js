import { firestore } from './auth';

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
