import { createBoardThunk, getBoardReducer } from 'lib/boardUtils';
import { getPopularDiets, getRecentDiets, getSearchDiets } from 'api/diets';

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

export const GET_SEARCH = 'board/GET_SEARCH';
const GET_SEARCH_SUCCESS = 'board/GET_SEARCH_SUCCESS';
const GET_SEARCH_ERROR = 'board/GET_SEARCH_ERROR';

export const getPopularMenus = limit => createBoardThunk(GET_POPULAR, getPopularDiets(limit));
export const getRecentMenus = limit => createBoardThunk(GET_RECENT, getRecentDiets(limit));
export const getSearchMenus = limit => createBoardThunk(GET_SEARCH, getSearchDiets(limit));

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
