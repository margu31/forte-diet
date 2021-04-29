// 액션 타입
const SIGN_IN = "auth/SIGN_IN";
const SIGN_OUT = "auth/SIGN_OUT";
const EDIT_USER = "auth/EDIT_USER";
const PUSH_LIKE = "auth/PUSH_LIKE";

// 액션 생성 함수
export const signInAction = (authUser) => ({
  type: SIGN_IN,
  payload: {
    authUser,
  },
});

export const signOutAction = () => ({
  type: SIGN_OUT,
});

export const signUpAction = (authUser) => ({
  type: SIGN_OUT,
  payload: {
    authUser,
  },
});

export const editUserAction = (authUser) => ({
  type: EDIT_USER,
  payload: {
    authUser,
  },
});

export const pushLikeAction = (newLike) => ({
  type: PUSH_LIKE,
  payload: {
    newLike,
  },
});

// 초깃값
const initialState = {
  isAuthed: false,
  authUser: null,
};

// 리듀서 reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SIGN_IN:
      return {
        isAuthed: true,
        authUser: action.payload.authUser,
      };
    case SIGN_OUT:
      return {
        isAuthed: false,
        authUser: null,
      };
    case EDIT_USER:
      return {
        ...state,
        authUser: action.payload.authUser,
      };
    case PUSH_LIKE:
      return {
        ...state,
        authUser: {
          ...state.authUser,
          like: action.payload.newLike,
        },
      };
    default:
      return state;
  }
}
