// Action Type
const ADD_MEAL = "posting/ADD_MEAL";
const EDIT_MEAL = "posting/EDIT_MEAL";

// const mealData = {
//   id: 1,
//   date:'2021-04-12',
//   type: 'breakfast',
//   isPublic: true,
//   review: 'blabla',
//   photo: '',
//   calories: 0,
// }

// Action Creator Function
export const addMealAction = (mealData) => ({
  type: ADD_MEAL,
  payload: {
    mealData,
  },
});

export const editMealAction = (mealData) => ({
  type: EDIT_MEAL,
  payload: {
    mealData,
  },
});

const initialState = [];

const uploadReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MEAL:
      return [...state, action.payload.mealData];
    case EDIT_MEAL:
      return state.map((meal) => {
        if (meal.id === state.payload.mealData.id)
          return action.payload.mealData;
        else return meal;
      });
    default:
      return state;
  }
};

export default uploadReducer;
