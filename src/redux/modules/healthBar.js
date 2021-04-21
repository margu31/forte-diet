const GET_HEALTH_BAR_LIST = 'healthbar/GET_HEALTH_BAR_LIST';
const UPDATE_WATER_DOSE = 'healthbar/UPDATE_WATER_DOSE';
const UPDATE_CALORIES = 'healthbar/UPDATE_CALORIES';

export const getHealthBarListAction = data => ({
  type: GET_HEALTH_BAR_LIST,
  payload: {
    data
  }
});

export const updateWaterDoseAction = (date, waterDose) => ({
  type: UPDATE_WATER_DOSE,
  payload: {
    date,
    waterDose
  }
});

export const updateCaloriesAction = (date, mealId) => ({
  type: UPDATE_CALORIES,
  payload: {
    date,
    mealId
  }
});

const initialState = [];

export default function healthBar(state = initialState, action) {
  switch (action.type) {
    case GET_HEALTH_BAR_LIST:
      const healthBarData = Object.entries({ ...action.payload.data })
        .sort((a, b) => b[0].slice(0, 6) - a[0].slice(0, 6))
        .map(data => data[1])
        .filter(data => data.meals);

      if (healthBarData.length > 3) {
        return healthBarData.slice(0, 3);
      } else {
        return healthBarData;
      }
    case UPDATE_WATER_DOSE:
      return state.map(data =>
        data.meals[0].date === action.payload.date
          ? { ...data, waterDose: action.payload.waterDose }
          : data
      );
    case UPDATE_CALORIES:
      return state.map(data =>
        data.meals[0].date === action.payload.date
          ? {
              ...data,
              meals: data.meals.filter(
                data2 => data2.id !== action.payload.mealId
              )
            }
          : data
      );

    default:
      return state;
  }
}
