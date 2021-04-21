// 액션 타입
const SIGN_IN = "auth/SIGN_IN";
const SIGN_UP = "auth/SIGN_UP";
const SIGN_OUT = "auth/SIGN_OUT";
const EDIT_USER = "auth/EDIT_USER";

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

// export const getAuthUserActionAsync = () => async (dispatch) => {
//   // 요청이 시작됨
//   dispatch(getTodosAction());
//   // API를 호출
//   try {
//     const getTodos = await fetch("http://15.165.145.100:3003/fetch_todo");
//     const todos = await getTodos.json();
//     // 성공했을 때
//     dispatch(getTodosSuccessAction(todos));
//   } catch (e) {
//     dispatch(getTodosErrorAction(e));
//   }
// };

// export const getAuthUserActionAsync2 = async () => {
//   try {
//     const getTodos = await fetch("http://15.165.145.100:3003/fetch_todo");
//     const todos = await getTodos.json();

//     return todos;
//   } catch (e) {
//     console.error(e);
//   }
// };

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
      return state.map((user) => {
        if (user.uid === state.payload.authUser.uid)
          return action.payload.authUser;
        else return user;
      });
    default:
      return state;
  }
}
