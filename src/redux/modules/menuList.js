const GET_MENU_LIST = 'mypage/GET_MENU_LIST';
// const DELETE_MENU_LIST = 'mypage/DELETE_MENU_LIST';
// const ADD_WATER_DOSE = 'mypage/ADD_WATER_DOSE';
// const RESET_WATER_DOSE = 'mypage/RESET_WATER_DOSE';
// const ADD_DAILY_REVIEW = 'mypage/ADD_DAILY_REVIEW';
// const EDIT_DAILY_REVIEW = 'mypage/ADD_DAILY_REVIEW';
// const DELETE_DAILY_REVIEW = 'mypage/ADD_DAILY_REVIEW';

export const getMenuListAction = data => ({
  type: GET_MENU_LIST,
  payload: {
    data
  }
});

// export const deleteMenuListAction = data => ({
//   type: DELETE_MENU_LIST,
//   payload: {
//     data
//   }
// });
// export const addWaterDoseAction = data => ({
//   type: ADD_WATER_DOSE,
//   payload: {
//     data
//   }
// });
// export const resetWaterDoseAction = data => ({
//   type: RESET_WATER_DOSE,
//   payload: {
//     data
//   }
// });

// export const addDailyReview = (date, review) => ({
//   type: ADD_DAILY_REVIEW,
//   payload: {
//     date,
//     review
//   }
// });

const initialState = {};

export default function menuList(state = initialState, action) {
  switch (action.type) {
    case GET_MENU_LIST:
      return {
        ...action.payload.data
      };
    // case DELETE_MENU_LIST:
    //   return state;
    // case ADD_WATER_DOSE:
    //   return state;
    // case RESET_WATER_DOSE:
    //   return state;
    // case ADD_DAILY_REVIEW:
    //   return {
    //     ...state,
    //     [action.date]: {
    //       ...state[action.date],
    //       dailyReview: action.review
    //     }
    //   };
    default:
      return state;
  }
}
