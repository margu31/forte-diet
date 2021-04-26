import { GET_SEARCH } from 'redux/modules/board';

/* 상태 Creator */
export const boardReducerUtils = {
  inital: {
    loading: false,
    data: null,
    error: null
  },
  loading: prevState => ({
    ...prevState,
    loading: true,
    error: null
  }),
  success: data => ({
    loading: false,
    data,
    error: null
  }),
  error: error => ({
    loading: false,
    data: null,
    error
  })
};

/* Thunk 함수 Creator */
export const createBoardThunk = (type, api) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

  return searchWord => async dispatch => {
    dispatch({
      type
    });

    try {
      const res = await api(searchWord || type);
      dispatch({
        type: SUCCESS,
        payload: res
      });
    } catch (e) {
      dispatch({
        type: ERROR,
        error: true,
        payload: e
      });
    }
  };
};

/* 리듀서 Creator */
export const getBoardReducer = (type, key) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

  return (state, action) => {
    switch (action.type) {
      case type:
        return {
          ...state,
          [key]: {
            ...boardReducerUtils.loading(state[key])
          }
        };
      case SUCCESS:
        return {
          ...state,
          [key]: {
            ...boardReducerUtils.success(action.payload)
          }
        };
      case ERROR:
        return {
          ...state,
          [key]: {
            ...boardReducerUtils.error(action.payload)
          }
        };
      default:
        return state;
    }
  };
};
