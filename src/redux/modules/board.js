import { createBoardThunk, getBoardReducer } from 'lib/boardUtils';

const initialState = {
  popular: null,
  recent: null,
  search: null
};

const GET_POPULAR = 'board/GET_POPULAR';
const GET_POPULAR_SUCCESS = 'board/GET_POPULAR_SUCCESS';
const GET_POPULAR_ERROR = 'board/GET_POPULAR_ERROR';

const GET_RECENT = 'board/GET_RECENT';
const GET_RECENT_SUCCESS = 'board/GET_RECENT_SUCCESS';
const GET_RECENT_ERROR = 'board/GET_RECENT_ERROR';

const GET_SEARCH = 'board/GET_SEARCH';
const GET_SEARCH_SUCCESS = 'board/GET_SEARCH_SUCCESS';
const GET_SEARCH_ERROR = 'board/GET_SEARCH_ERROR';

export const getPopularMenus = createBoardThunk(GET_POPULAR);
export const getRecentMenus = createBoardThunk(GET_RECENT);
export const getSearchMenus = createBoardThunk(GET_SEARCH);

const getPopularReducer = getBoardReducer(GET_POPULAR, 'popular');
const getRecentReducer = getBoardReducer(GET_RECENT, 'recent');
const getReducer = getBoardReducer(GET_SEARCH, 'search');

export default function BoardReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POPULAR:
    case GET_POPULAR_SUCCESS:
    case GET_POPULAR_ERROR:
      return getPopularReducer(state, action);
    case GET_RECENT:
    case GET_RECENT_SUCCESS:
    case GET_RECENT_ERROR:
      return getRecentReducer(state, action);
    case GET_SEARCH:
    case GET_SEARCH_SUCCESS:
    case GET_SEARCH_ERROR:
      return getReducer(state, action);
    default:
      return state;
  }
}
