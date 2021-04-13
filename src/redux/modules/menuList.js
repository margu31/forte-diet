const GET_MENU_LIST = 'mypage/GET_MENU_LIST';
const DELETE_MENU_LIST = 'mypage/DELETE_MENU_LIST';
const ADD_WATER_DOSE = 'mypage/ADD_WATER_DOSE';
const RESET_WATER_DOSE = 'mypage/RESET_WATER_DOSE';

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
    default:
      return state;
  }
}
